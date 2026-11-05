// Edit the copy here; the page components just render it.

export const services = [
  ["Accounts payable", "Reads bills from email and PDFs, codes them to the right accounts, and queues them for your approval."],
  ["Bank and payment reconciliation", "Matches bank lines and Stripe or PayPal payouts to your ledger, and lists only what doesn't fit."],
  ["Invoicing and collections", "Creates invoices from your orders and chases the overdue ones with reminders that sound like you."],
  ["Month-end close", "Runs the checklist: accruals, journal entries, variance checks, and a draft close pack."],
  ["Reporting", "Pulls figures from every system into the report your leadership expects, on schedule."],
  ["Data cleanup and migration", "Cleans messy spreadsheets and moves history between systems without anyone retyping it."],
];

export const steps = [
  ["Map the workflow", "We sit with the people who do the work and write down every step, exception and workaround."],
  ["Build the script", "We write a script for the repetitive parts and leave the judgment calls to your team."],
  ["Run it side by side", "The script runs next to your manual process until the results match and you trust them."],
  ["Hand it over", "You get the code, a plain-English guide, and support when something changes."],
];

export const commitments = [
  ["You own the code", "Every script we write is yours. No licence fees, and no lock-in to us."],
  ["People approve the money", "Scripts prepare payments and entries. A person signs off before anything is paid or posted."],
  ["Every run leaves a log", "You can see what ran, what it changed and what it skipped, which makes audits easier."],
  ["Built around your tools", "We work with the spreadsheets, accounting software and bank exports you already use."],
];

export const demoRows = [
  { bank: "Stripe payout", ledger: "14 sales receipts", amount: "4,218.50", state: "matched" },
  { bank: "Harlow Supplies", ledger: "Bill 8841", amount: "-1,960.00", state: "matched" },
  { bank: "Payroll batch", ledger: "Payroll journal", amount: "-12,480.00", state: "matched" },
  { bank: "Office rent", ledger: "Rent accrual", amount: "-3,200.00", state: "matched" },
  { bank: "Unknown transfer", ledger: "No match found", amount: "-742.10", state: "review" },
];

export const contactEmail = "hello@spadeworks.example"; // replace with your real address
