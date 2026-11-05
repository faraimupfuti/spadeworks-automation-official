import Image from "next/image";
import Ledger from "../components/Ledger";
import ContactForm from "../components/ContactForm";
import { services, steps, commitments, demoRows, contactEmail } from "../components/data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Finance work that runs itself.</h1>
          <p className="lede">
            Spadeworks builds the software scripts that handle your accounting busywork, from
            reconciliations to invoice entry to month-end reports. Your team gets its time back for
            the work that needs a person.
          </p>
          <div className="actions">
            <a className="btn" href="#contact">Book a free workflow review</a>
            <a className="link" href="#services">See what we automate</a>
          </div>
        </div>
        <div className="hero-art">
          <Image src="/img/dome.png" width={1600} height={800} alt="" priority />
        </div>
      </section>

      <section className="demo" id="demo" aria-labelledby="demo-title">
        <div className="demo-copy">
          <h2 id="demo-title">A reconciliation, start to finish</h2>
          <p>
            This is what a script does with a bank feed. It matches what it can, and it stops and
            asks you about what it can&apos;t.
          </p>
          <p className="note">Sample data.</p>
        </div>
        <Ledger rows={demoRows} />
      </section>

      <section className="services" id="services" aria-labelledby="services-title">
        <h2 id="services-title">What we automate</h2>
        <ul className="service-list">
          {services.map(([name, text]) => (
            <li className="service" key={name}>
              <h3>{name}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="process" id="process" aria-labelledby="process-title">
        <h2 id="process-title">How we work</h2>
        <ol className="steps">
          {steps.map(([title, text], i) => (
            <li className="step" key={title}>
              <span className="step-n" aria-hidden="true">{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="commitments" aria-labelledby="commit-title">
        <h2 id="commit-title">What you can count on</h2>
        <div className="commit-grid">
          {commitments.map(([title, text]) => (
            <div className="commit" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact-copy">
          <h2 id="contact-title">Tell us what eats your team&apos;s week</h2>
          <p>
            Describe one task your team repeats. We&apos;ll tell you if a script can take it over and
            roughly what it would involve. The first review is free.
          </p>
          <p className="mail">
            Prefer email? <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
