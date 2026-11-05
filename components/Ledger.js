"use client";

import { useEffect, useRef, useState } from "react";

const LABEL = { matched: "Matched", review: "Needs review", pending: "Checking" };

// Reconciliation demo. The server renders the finished table (so it works without
// JavaScript and for reduced-motion users); in the browser it replays once on scroll.
export default function Ledger({ rows }) {
  const ref = useRef(null);
  const [phase, setPhase] = useState("done"); // done | waiting | running
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
            }, 500 + i * 550)
          );
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [rows]);

  const matched = rows.filter((r) => r.state === "matched").length;
  const review = rows.length - matched;
  const foot =
    phase === "waiting" ? "Waiting to run"
    : phase === "running" ? "Running"
    : `${matched} matched, ${review} for you to review`;

  return (
    <div className="ledger" ref={ref}>
      <div className="ledger-head" aria-hidden="true">
        <span>Bank line</span><span>Ledger entry</span><span className="num">Amount</span><span>Status</span>
      </div>
      <ul className="ledger-rows">
        {rows.map((row, i) => {
          const state = i < resolved ? row.state : "pending";
          return (
            <li className="ledger-row" key={row.bank}>
              <span className="cell-bank">{row.bank}</span>
              <span className="cell-ledger">{row.ledger}</span>
              <span className="num">{row.amount}</span>
              <span className={`status status-${state}`}>{LABEL[state]}</span>
            </li>
          );
        })}
      </ul>
      <p className="ledger-foot" aria-live="polite">{foot}</p>
    </div>
  );
}
