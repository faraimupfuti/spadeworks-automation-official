import Image from "next/image";
import Demo from "../components/Demo";
import ContactForm from "../components/ContactForm";
import { services, steps, commitments, demoRows, logLines, contactEmail } from "../components/data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-inner">
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
        </div>
      </section>

      <section className="demo" id="demo" aria-labelledby="demo-title">
        <Image className="demo-dome" src="/img/dome-light.png" width={1600} height={800} alt="" aria-hidden="true" />
        <div className="wrap demo-inner">
          <Demo rows={demoRows} log={logLines} />
        </div>
      </section>

      <section className="services" id="services" aria-labelledby="services-title">
        <div className="wrap">
          <h2 className="section-head" id="services-title">What we automate</h2>
          <ul className="service-list">
            {services.map(([name, text]) => (
              <li className="service" key={name}>
                <a href="#contact">
                  <h3>{name}</h3>
                  <p>{text}</p>
                  <span className="arrow" aria-hidden="true">&rarr;</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="process" id="process" aria-labelledby="process-title">
        <div className="wrap">
          <h2 className="section-head" id="process-title">How we work</h2>
          <ol className="steps">
            {steps.map(([title, text], i) => (
              <li className="step" key={title}>
                <span className="step-n" aria-hidden="true">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="commitments" aria-labelledby="commit-title">
        <div className="wrap">
          <h2 className="section-head" id="commit-title">What you can count on</h2>
          <div className="commit-grid">
            {commitments.map(([title, text]) => (
              <div className="commit" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <Image className="contact-dome" src="/img/dome-light.png" width={1600} height={800} alt="" aria-hidden="true" />
        <div className="wrap contact-inner">
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
        </div>
      </section>
    </>
  );
}
