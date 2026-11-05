"use client";

import { useEffect, useRef, useState } from "react";

const LABEL = { matched: "Matched", review: "Needs review", pending: "Checking" };

// The reconciliation demo: a log of the script's output beside a table that fills in row by row.
// The server renders the finished state (so it works without JavaScript and for people who
// prefer reduced motion); in the browser it replays once when scrolled into view.
export default function Demo({ rows, log }) {
  const ref = useRef(null);
  const [phase, setPhase] = useState("done"); // waiting | running | done
  const [resolved, setResolved] = useState(rows.length);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window) || !ref.current) return;

    const timers = [];
    setPhase("waiting");
    setResolved(0);

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        setPhase("running");
        rows.forEach((_, i) => {
          timers.push(
            setTimeout(() => {
              setResolved(i + 1);
              if (i === rows.length - 1) setPhase("done");
            }, 700 + i * 650)
          );
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [rows]);

  const stateOf = (row, i) => (i < resolved ? row.state : "pending");
  const matched = rows.filter((r, i) => stateOf(r, i) === "matched").length;
  const flagged = rows.filter((r, i) => stateOf(r, i) === "review").length;
  const chip = phase === "done" ? ["chip-done", "Done"] : phase === "running" ? ["chip-running", "Running"] : ["", "Ready"];
  const lineVisible = (at) => at === -1 || (phase !== "waiting" && (at === 0 || resolved >= at));

  return (
    <>
      <div className="demo-copy">
        <h2 id="demo-title">A reconciliation, start to finish</h2>
        <p>
          This is what a script does with a bank feed. It matches what it can, and it stops and
          asks you about what it can&apos;t.
        </p>
        <div className="runlog" role="img" aria-label="Sample script output">
          {log.map((line, i) => (
            <span className={`log-line${lineVisible(line.at) ? "" : " is-hidden"}`} key={i}>
              {line.parts.map((p, j) => (
                <span className={p.cls} key={j}>{p.text}</span>
              ))}
            </span>
          ))}
        </div>
        <p className="note">Sample data.</p>
      </div>

      <div className="window" ref={ref}>
        <div className="window-bar">
          <span className="dots" aria-hidden="true"><i /><i /><i /></span>
          <span className="window-title">reconcile_october.py</span>
          <span className={`chip ${chip[0]}`}>{chip[1]}</span>
        </div>
        <div className="progress" aria-hidden="true">
          <span className="progress-fill" style={{ width: `${(resolved / rows.length) * 100}%` }} />
        </div>
        <div className="ledger">
          <div className="ledger-head" aria-hidden="true">
            <span>Bank line</span><span>Ledger entry</span><span className="num">Amount</span><span>Status</span>
          </div>
          <ul className="ledger-rows">
            {rows.map((row, i) => {
              const state = stateOf(row, i);
              return (
                <li className={`ledger-row${state === "review" ? " is-review" : ""}`} key={row.bank}>
                  <span className="cell-bank">{row.bank}</span>
                  <span className="cell-ledger">{row.ledger}</span>
                  <span className="num">{row.amount}</span>
                  <span className={`pill pill-${state}`}><i /><span>{LABEL[state]}</span></span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="tiles">
          <div className="tile"><b>{phase === "waiting" ? 0 : rows.length}</b><span>lines read</span></div>
          <div className="tile"><b>{matched}</b><span>matched</span></div>
          <div className="tile is-flag"><b>{flagged}</b><span>needs you</span></div>
        </div>
      </div>
    </>
  );
}
