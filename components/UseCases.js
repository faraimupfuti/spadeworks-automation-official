"use client";

import { useState } from "react";
import Icon from "./Icon";

// tag = which promise the use case supports: cost, speed or accuracy
const SETS = {
  Government: [
    ["card", "National ID and voter register clean-up", "The same person registered twice, or under two names, is hard to spot by eye.", "The system compares every photo against the rest and lists likely duplicates for officers to review.", "Fewer mistakes"],
    ["plane", "Borders and airports", "Officers check passport photos one by one, and queues grow.", "A camera compares the traveller to the passport photo in seconds. Officers step in only when something does not match.", "Faster"],
    ["coins", "Pensions and social grants", "Payments can go to people who do not exist or who are no longer alive.", "Recipients confirm their face before payment, so money reaches the right person and ghost recipients are removed.", "Lower cost"],
    ["users", "Civil service payroll", "Ghost workers drain the wage bill without anyone noticing.", "Staff verify their face at a monthly check. Names with no real person behind them show up straight away.", "Lower cost"],
    ["badge", "Driver's licences and exams", "Someone else sits the test, or a licence is issued twice.", "The face at the desk is matched to the person on the application, and repeat applications are flagged.", "Fewer mistakes"],
    ["search", "Investigation support", "Searching photos and video by hand takes officers days.", "The system gives a short list of possible matches in minutes. A trained officer makes every decision, and every search is logged.", "Faster"],
  ],
  Corporate: [
    ["clock", "Staff attendance and payroll", "Paper registers and shared cards allow clocking in for a friend, and payroll clerks retype the hours.", "Staff look at a camera to clock in. Hours flow straight to payroll, so there is no buddy clocking and no retyping.", "Lower cost"],
    ["door", "Office, factory and mine access", "Keys and cards get lost, lent or copied.", "Doors open for the face of an approved person. Every entry is recorded, and access can be removed in one click.", "Fewer mistakes"],
    ["bank", "Bank and microfinance onboarding", "New customers must visit a branch so staff can check their ID.", "Customers verify their face against their ID from a phone. Staff review only the unclear cases.", "Faster"],
    ["phone", "Telecoms and mobile money", "SIM registration and cash-out fraud use stolen or borrowed IDs.", "A live face check ties each SIM and each large cash-out to a real person, and blocks repeat registrations.", "Fewer mistakes"],
    ["ticket", "Events, schools and visitors", "Reception staff write names in a book and check IDs by hand.", "Pre-registered visitors walk in after a face check. The front desk deals only with exceptions.", "Lower cost"],
    ["flag", "Retail and hospitality, with consent", "Staff cannot recognise every member or loyalty customer.", "Customers who opt in are greeted by name and served faster. Those who do not opt in are never enrolled.", "Faster"],
  ],
};

export default function UseCases() {
  const [tab, setTab] = useState("Government");
  return (
    <div>
      <div className="fr-modes" role="tablist" aria-label="Who is it for">
        {Object.keys(SETS).map((k) => (
          <button key={k} role="tab" aria-selected={k === tab} className={"fr-mode" + (k === tab ? " is-on" : "")} onClick={() => setTab(k)}>
            {k}
          </button>
        ))}
      </div>
      <ul className="uc-grid">
        {SETS[tab].map(([icon, title, problem, how, tag]) => (
          <li className="uc" key={title}>
            <span className="uc-icon"><Icon name={icon} /></span>
            <h3>{title}</h3>
            <p className="uc-problem"><b>Today:</b> {problem}</p>
            <p className="uc-how"><b>With Spadeworks:</b> {how}</p>
            <span className="uc-tag">{tag}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
