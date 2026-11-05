// A plain HTML form. Netlify finds it in the built page and handles submissions (Netlify Forms).
export default function ContactForm() {
  return (
    <form className="form" name="contact" method="POST" action="/thanks/" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <p className="trap" hidden>
        <label>Leave this empty <input name="bot-field" /></label>
      </p>

      <label htmlFor="f-name">Your name</label>
      <input id="f-name" name="name" type="text" autoComplete="name" required />

      <label htmlFor="f-email">Work email</label>
      <input id="f-email" name="email" type="email" autoComplete="email" required />

      <label htmlFor="f-company">Company</label>
      <input id="f-company" name="company" type="text" autoComplete="organization" />

      <label htmlFor="f-task">What task would you like off your team&apos;s plate?</label>
      <textarea id="f-task" name="task" rows={5} required />

      <button className="btn btn-light" type="submit">Send message</button>
    </form>
  );
}
