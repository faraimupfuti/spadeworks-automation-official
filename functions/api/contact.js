const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });

const clean = (value, max = 500) => String(value ?? "").trim().slice(0, max);
const escapeHtml = (value) => clean(value, 5000).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[char]));

export async function onRequestPost({ request, env }) {
  if (!env.RESEND_API_KEY || !env.CONTACT_TO || !env.CONTACT_FROM) {
    return json({ error: "The contact form is not configured yet. Please contact us directly." }, 503);
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: "Invalid form submission." }, 400);
  }

  // Honeypot: silently accept automated submissions without sending email.
  if (clean(data["bot-field"], 200)) return json({ ok: true });

  const name = clean(data.name, 120);
  const company = clean(data.company, 160);
  const email = clean(data.email, 254);
  const phone = clean(data.phone, 50);
  const industry = clean(data.industry, 120);
  const preferredDate = clean(data.preferred_date, 30);
  const task = clean(data.task, 5000);
  const services = Array.isArray(data.services)
    ? data.services.slice(0, 30).map((item) => clean(item, 120)).filter(Boolean)
    : [];

  if (!name || !company || !email || !phone || !task) {
    return json({ error: "Please complete all required fields." }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Please enter a valid email address." }, 400);
  }

  const rows = [
    ["Name", name], ["Company", company], ["Email", email], ["Phone / WhatsApp", phone],
    ["Industry", industry || "Not specified"], ["Preferred call date", preferredDate || "Not specified"],
    ["Services", services.join(", ") || "Not specified"], ["Repeated task", task],
  ];
  const textBody = rows.map(([label, value]) => `${label}:\n${value}`).join("\n\n");
  const htmlBody = `<h2>New Spadeworks website enquiry</h2><dl>${rows.map(([label, value]) =>
    `<dt style="font-weight:bold;margin-top:14px">${escapeHtml(label)}</dt><dd style="margin:4px 0 0;white-space:pre-wrap">${escapeHtml(value)}</dd>`
  ).join("")}</dl>`;

  let resendResponse;
  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM,
        to: [env.CONTACT_TO],
        reply_to: email,
        subject: `Website enquiry from ${name} — ${company}`,
        text: textBody,
        html: htmlBody,
      }),
    });
  } catch {
    return json({ error: "Email delivery is temporarily unavailable. Please try again shortly." }, 502);
  }

  if (!resendResponse.ok) {
    // Do not expose provider responses or secrets to the browser.
    return json({ error: "We couldn't deliver your request. Please try again or email us directly." }, 502);
  }
  return json({ ok: true });
}
