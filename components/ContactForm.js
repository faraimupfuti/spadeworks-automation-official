import { services, industries } from "./data";

// A plain HTML form. Netlify finds it in the built page and handles submissions (Netlify Forms).
export default function ContactForm() {
  return (
    <form className="form" name="booking" method="POST" action="/thanks/" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="booking" />
      <p className="trap" hidden>
        <label>Leave this empty <input name="bot-field" /></label>
      </p>

      <div className="row">
        <div>
          <label htmlFor="f-name">Your name</label>
          <input id="f-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div>
          <label htmlFor="f-company">Company</label>
          <input id="f-company" name="company" type="text" autoComplete="organization" required />
        </div>
      </div>

      <div className="row">
        <div>
          <label htmlFor="f-email">Work email</label>
          <input id="f-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div>
          <label htmlFor="f-phone">Phone / WhatsApp</label>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
      </div>

      <div className="row">
        <div>
          <label htmlFor="f-industry">Industry</label>
          <select id="f-industry" name="industry" defaultValue="">
            <option value="" disabled>Select your industry</option>
            {industries.map((i) => <option key={i}>{i}</option>)}
            <option>Other</option>
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
          <label className="check"><input type="checkbox" name="services" value="Something else" /> <span>Something else</span></label>
        </div>
      </fieldset>

      <label htmlFor="f-task">Tell us one task your team repeats</label>
      <textarea id="f-task" name="task" rows={4} required />

      <button className="btn btn-red" type="submit">Book a free workflow review</button>
    </form>
  );
}
