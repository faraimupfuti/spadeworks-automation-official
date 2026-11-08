"use client";

import { useEffect, useRef, useState } from "react";
import { points, edges } from "./facePoints";

// Each scenario shows the steps the system runs, then a result a person would see.
const MODES = [
  {
    id: "verify",
    label: "Verify a person",
    blurb: "Is this person who they say they are? Compares one face to one record.",
    steps: ["Find the face", "Check a live person is present", "Compare with the ID photo", "Give a clear yes or no"],
    result: { chip: "Match confirmed", tone: "ok", lines: [["Record", "National ID, photo on file"], ["Similarity", "High (demo value)"], ["Next step", "Door opens, entry logged"]] },
  },
  {
    id: "identify",
    label: "Find in a database",
    blurb: "Who is this? Searches many records and returns a short list for a person to review.",
    steps: ["Find the face", "Turn it into a secure template", "Search the records", "Send best matches to an operator"],
    result: { chip: "2 possible matches", tone: "warn", lines: [["Best match", "Record 4821, review needed"], ["Decision", "Made by a trained operator"], ["Next step", "Operator confirms or rejects"]] },
  },
  {
    id: "live",
    label: "Spot a fake",
    blurb: "Stops photos, phone screens and masks being used to trick the system.",
    steps: ["Find the face", "Look for depth and natural movement", "Test for screen glare and print texture", "Accept or reject the attempt"],
    result: { chip: "Live person confirmed", tone: "ok", lines: [["Photo or screen replay", "Not detected"], ["Natural movement", "Detected"], ["Next step", "Continue to matching"]] },
  },
  {
    id: "clock",
    label: "Clock in for work",
    blurb: "Staff look at the camera to start their shift. No cards to lose or share.",
    steps: ["Find the face", "Check a live person is present", "Match to the staff list", "Record the time and update payroll"],
    result: { chip: "Clocked in 07:58", tone: "ok", lines: [["Staff member", "Employee 0372 (demo)"], ["Shift", "Day shift, on time"], ["Payroll", "Hours updated automatically"]] },
  },
];

export default function FaceDemo() {
  const [modeId, setModeId] = useState("verify");
  const [status, setStatus] = useState("idle"); // idle | running | done
  const [step, setStep] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const timers = useRef([]);
  const mode = MODES.find((m) => m.id === modeId);

  const clear = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  useEffect(() => clear, []);

  const run = (id) => {
    clear();
    const m = MODES.find((x) => x.id === id);
    setModeId(id);
    setStep(0);
    const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setStep(m.steps.length); setStatus("done"); return; }
    setStatus("running");
    m.steps.forEach((_, i) => timers.current.push(setTimeout(() => setStep(i + 1), 500 + i * 750)));
    timers.current.push(setTimeout(() => setStatus("done"), 500 + m.steps.length * 750));
  };

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({ x: ((e.clientX - r.left) / r.width - 0.5) * 2, y: ((e.clientY - r.top) / r.height - 0.5) * 2 });
  };

  return (
    <div className="fr-demo">
      <div className="fr-modes" role="tablist" aria-label="Choose a scenario">
        {MODES.map((m) => (
          <button key={m.id} role="tab" aria-selected={m.id === modeId} className={"fr-mode" + (m.id === modeId ? " is-on" : "")} onClick={() => run(m.id)}>
            {m.label}
          </button>
        ))}
      </div>

      <div className="fr-stage">
        <div className="fr-view" onPointerMove={onMove} onPointerLeave={() => setTilt({ x: 0, y: 0 })}>
          <div className="fr-face-wrap" style={{ transform: `perspective(900px) rotateY(${tilt.x * 9}deg) rotateX(${-tilt.y * 7}deg)` }}>
            <svg className={"fr-face is-" + status} viewBox="0 0 400 480" role="img" aria-label="Vector face with detection points and a scan line. Demonstration only.">
              <defs>
                <clipPath id="faceclip"><path d="M108 240C108 130 150 62 200 62s92 68 92 178c0 100-40 185-92 185s-92-85-92-185z" /></clipPath>
                <linearGradient id="scan" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#ff4a50" stopOpacity="0" />
                  <stop offset="1" stopColor="#ff4a50" stopOpacity=".55" />
                </linearGradient>
              </defs>
              <path className="fr-head" d="M108 240C108 130 150 62 200 62s92 68 92 178c0 100-40 185-92 185s-92-85-92-185z" />
              <g className="fr-mesh">
                {edges.map(([a, b], i) => (
                  <line key={i} x1={points[a][0]} y1={points[a][1]} x2={points[b][0]} y2={points[b][1]} />
                ))}
              </g>
              <g className="fr-dots">
                {points.map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="3.2" style={{ animationDelay: `${(i % 40) * 40}ms` }} />
                ))}
              </g>
              <g clipPath="url(#faceclip)">
                <rect className="fr-scan" x="90" y="40" width="220" height="60" fill="url(#scan)" />
              </g>
              <g className="fr-brackets">
                <path d="M78 110V70h40M322 110V70h-40M78 400v40h40M322 400v40h-40" />
              </g>
            </svg>
          </div>
          <p className="fr-hint">Move your mouse over the face</p>
        </div>

        <div className="fr-panel">
          <p className="fr-blurb">{mode.blurb}</p>
          <ol className="fr-steps">
            {mode.steps.map((s, i) => (
              <li key={s} className={i < step ? "is-done" : i === step && status === "running" ? "is-active" : ""}>
                <span className="fr-tick" aria-hidden="true" />{s}
              </li>
            ))}
          </ol>

          <div className={"fr-result" + (status === "done" ? " is-shown tone-" + mode.result.tone : "")} aria-live="polite">
            {status === "done" ? (
              <>
                <p className="fr-chip">{mode.result.chip}</p>
                <dl>
                  {mode.result.lines.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
                </dl>
              </>
            ) : (
              <p className="fr-wait">{status === "running" ? "Scanning..." : "Pick a scenario above, or press the button, to see the system work."}</p>
            )}
          </div>

          <button className="btn btn-red" onClick={() => run(modeId)} disabled={status === "running"}>
            {status === "done" ? "Run it again" : "Run the scan"}
          </button>
          <p className="fr-note">Demonstration with simulated data. No real person is scanned and no image leaves your device.</p>
        </div>
      </div>
    </div>
  );
}
