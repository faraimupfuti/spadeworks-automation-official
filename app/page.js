import Image from "next/image";
import Demo from "../components/Demo";
import ContactForm from "../components/ContactForm";
import { pains, services, industries, reasons, rental, ours, steps, commitments, demoRows, logLines, contactEmail, contactPhone, contactPhoneRaw } from "../components/data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-inner">
          <div className="hero-text">
            <h1>Every finance task. <span className="red">Automated.</span></h1>
            <p className="lede">
              Custom software bots for the finance and accounting team of any business, in any industry.
            </p>
            <p className="tagline">Faster. Cheaper. Sharper. Yours.</p>
            <div className="actions">
              <a className="btn btn-red" href="#book">Book a free workflow review</a>
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

      <section className="pains" aria-labelledby="pains-title">
        <div className="wrap">
          <h2 className="section-head" id="pains-title">Finance teams are buried in repetition</h2>
          <p className="sub">Sound familiar?</p>
          <div className="pain-grid">
            {pains.map(([tag, title, text]) => (
              <div className="pain" key={tag}>
                <span className="tag">{tag}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <p className="pull">Every hour spent keying data is an hour not spent <span className="red">advising the business.</span></p>
        </div>
      </section>

      <section className="services" id="services" aria-labelledby="services-title">
        <div className="wrap">
          <h2 className="section-head" id="services-title">If your finance team repeats it, a bot can run it</h2>
          <ul className="service-grid">
            {services.map(([name, text], i) => (
              <li className="service-card" key={name}>
                <a href="#book">
                  <span className="tag">0{i + 1}</span>
                  <h3>{name}</h3>
                  <p>{text}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="industries" aria-labelledby="ind-title">
        <div className="wrap">
          <h2 className="section-head" id="ind-title">Built for every industry with a finance department</h2>
          <p className="sub">Books are books. Wherever money moves, we automate how it is recorded.</p>
          <ul className="chips">
            {industries.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
      </section>

      <section className="why" id="why" aria-labelledby="why-title">
        <div className="wrap">
          <h2 className="section-head" id="why-title">Why teams switch</h2>
          <div className="why-grid">
            {reasons.map(([k, title, text]) => (
              <div className="why-item" key={k}>
                <p className="why-k">{k}</p>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="owner" aria-labelledby="owner-title">
        <div className="wrap">
          <h2 className="section-head" id="owner-title">Pay once. Own it forever.</h2>
          <p className="sub">Most vendors rent you software. We sell you the finished machine.</p>
          <div className="compare">
            <div className="card">
              <span className="tag tag-mute">The rental model</span>
              <h3>Monthly subscription</h3>
              <ul>{rental.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
            <div className="card card-dark">
              <span className="tag">The Spadeworks way</span>
              <h3>One fee. You own the source code.</h3>
              <ul>{ours.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="process" id="process" aria-labelledby="process-title">
        <div className="wrap">
          <h2 className="section-head" id="process-title">Simple to start, safe to trust</h2>
          <ol className="steps">
            {steps.map(([title, text], i) => (
              <li className="step" key={title}>
                <span className="step-n" aria-hidden="true">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <p className="pull">A person approves every payment and posting. Every run is logged. It fits the tools you already use.</p>
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

      <section className="contact" id="book" aria-labelledby="contact-title">
        <Image className="contact-dome" src="/img/dome-light.png" width={1600} height={800} alt="" aria-hidden="true" />
        <div className="wrap contact-inner">
          <div className="contact-copy">
            <h2 id="contact-title">Let&apos;s take the busywork off your team.</h2>
            <p>
              Tell us one task your team repeats. We&apos;ll tell you how a bot can take it over.
              The first workflow review is free.
            </p>
            <ul className="contact-list">
              <li><span>Email</span><a href={`mailto:${contactEmail}`}>{contactEmail}</a></li>
              <li><span>Phone</span><a href={`tel:${contactPhoneRaw}`}>{contactPhone}</a></li>
              <li><span>WhatsApp</span><a href={`https://wa.me/${contactPhoneRaw.replace("+", "")}`}>Message us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="form-title">Book a service</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
