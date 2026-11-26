"use client";

import { useState } from "react";
import { services, industries } from "./data";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.services = formData.getAll("services");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Your request could not be sent. Please try again.");
      window.location.assign("/thanks/");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <form className="form" name="booking" onSubmit={handleSubmit}>
      <p className="trap" hidden aria-hidden="true">
        <label>Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>

      <div className="row">
        <div>
          <label htmlFor="f-name">Your name</label>
          <input id="f-name" name="name" type="text" autoComplete="name" maxLength={120} required />
        </div>
        <div>
          <label htmlFor="f-company">Company</label>
          <input id="f-company" name="company" type="text" autoComplete="organization" maxLength={160} required />
        </div>
      </div>

      <div className="row">
        <div>
          <label htmlFor="f-email">Work email</label>
          <input id="f-email" name="email" type="email" autoComplete="email" maxLength={254} required />
        </div>
        <div>
          <label htmlFor="f-phone">Phone / WhatsApp</label>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" maxLength={50} required />
        </div>
      </div>

      <div className="row">
        <div>
          <label htmlFor="f-industry">Industry</label>
          <select id="f-industry" name="industry" defaultValue="">
            <option value="" disabled>Select your industry</option>
            {industries.map((i) => <option key={i} value={i}>{i}</option>)}
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="f-date">Preferred date for a call</label>
          <input id="f-date" name="preferred_date" type="date" />
        </div>
      </div>

      <fieldset>
        <legend>Which services do you need?</legend>
        <div className="checks">
          {services.map(([name]) => (
            <label className="check" key={name}>
              <input type="checkbox" name="services" value={name} /> <span>{name}</span>
            </label>
          ))}
          <label className="check"><input type="checkbox" name="services" value="Facial recognition system" /> <span>Facial recognition</span></label>
          <label className="check"><input type="checkbox" name="services" value="Something else" /> <span>Something else</span></label>
        </div>
      </fieldset>

      <label htmlFor="f-task">Tell us one task your team repeats</label>
      <textarea id="f-task" name="task" rows={4} maxLength={5000} required />

      {error ? <p role="alert" className="form-error">{error}</p> : null}
      <button className="btn btn-red" type="submit" disabled={submitting}>
        {submitting ? "Sending request…" : "Book a free workflow review"}
      </button>
    </form>
  );
}
