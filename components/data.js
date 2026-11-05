// Edit the copy here; the page components just render it.
export const contactEmail = "farai@spadeworks.co.zw";
export const contactPhone = "+263 77 564 3044";
export const contactPhoneRaw = "+263775643044";
export const siteUrl = "https://spadeworks.co.zw";

export const pains = [
  ["01 · Too slow", "Closing takes days", "Typing in bills, bank lines and invoices by hand keeps the books open far too long."],
  ["02 · Too costly", "You pay twice", "Skilled salaries go on copy-paste, and software subscriptions keep adding to the bill."],
  ["03 · Too risky", "Small slips, big costs", "A mistyped digit or a double payment usually surfaces late, when it hurts most."],
];

export const services = [
  ["Payables", "Bills read, coded and ready for approval."],
  ["Receivables", "Invoices sent and overdue ones chased."],
  ["Reconciliation", "Bank and payment lines matched to the ledger."],
  ["Payroll and journals", "Entries prepared, checked and posted."],
  ["Month-end close", "Accruals, variances and a draft close pack."],
  ["Tax and compliance", "Figures gathered and schedules prepared."],
  ["Reporting", "Fresh reports in leadership's inbox, on time."],
  ["Data cleanup", "Messy sheets fixed, history moved between systems."],
];

export const industries = [
  "Retail", "Manufacturing", "Banking and microfinance", "Mining",
  "Agriculture", "Healthcare", "Education", "NGOs and charities",
  "Logistics", "Hospitality", "Construction", "Telecoms",
  "Insurance", "Real estate", "Professional services", "Government",
];

export const reasons = [
  ["Speed", "Days shrink to minutes", "Bots work in seconds, on schedule, around the clock. Nothing waits for someone to find the time."],
  ["Cost", "One payment. Done.", "No licence fees, no per-seat charges, no monthly bill. Pay once and the savings keep stacking up."],
  ["Accuracy", "Right, every time", "Bots never tire or mistype. Odd items go to a person, and every run leaves a clear log."],
];

export const rental = ["A fee every month, with no end", "Prices climb when the vendor decides", "Stop paying and your bot disappears", "Stuck with one supplier"];
export const ours = ["Pay once, nothing monthly", "Full source code is yours", "Run it as long as you like", "Free to take it anywhere"];

export const steps = [
  ["We learn your process", "We work with your team to capture every step and exception."],
  ["We build your bot", "Repetitive work is automated, judgment stays with people."],
  ["We test it beside you", "It runs next to your manual process until you trust it."],
  ["You take the keys", "Code, plain-English guide and support are all yours."],
];

export const commitments = [
  ["You own the code", "Every bot we write is yours. No licence fees, and no lock-in to us."],
  ["People approve the money", "Bots prepare payments and entries. A person signs off before anything is paid or posted."],
  ["Every run leaves a log", "You can see what ran, what it changed and what it skipped, which makes audits easier."],
  ["Built around your tools", "We work with the spreadsheets, accounting software and bank exports you already use."],
];

// Sample data for the reconciliation demo.
export const demoRows = [
  { bank: "Stripe payout", ledger: "14 sales receipts", amount: "4,218.50", state: "matched" },
  { bank: "Harlow Supplies", ledger: "Bill 8841", amount: "-1,960.00", state: "matched" },
  { bank: "Payroll batch", ledger: "Payroll journal", amount: "-12,480.00", state: "matched" },
  { bank: "Office rent", ledger: "Rent accrual", amount: "-3,200.00", state: "matched" },
  { bank: "Unknown transfer", ledger: "No match found", amount: "-742.10", state: "review" },
];

export const logLines = [
  { at: -1, parts: [{ cls: "log-prompt", text: "$" }, { text: " python reconcile.py --month october" }] },
  { at: 0, parts: [{ text: "Reading bank feed: 5 lines" }] },
  { at: 0, parts: [{ text: "Matching against the ledger..." }] },
  { at: 4, parts: [{ cls: "log-ok", text: "4 matched" }] },
  { at: 5, parts: [{ cls: "log-warn", text: "1 needs a person:" }, { text: " Unknown transfer" }] },
  { at: 5, parts: [{ text: "Saved october_reconciliation.xlsx" }] },
];
