import Link from "next/link";
import FaceDemo from "../../components/FaceDemo";
import UseCases from "../../components/UseCases";
import Icon from "../../components/Icon";
import { outcomes, contactEmail, contactPhone, contactPhoneRaw } from "../../components/data";
import { points, edges } from "../../components/facePoints";

export const metadata = {
  title: "Facial recognition for government and business | Spadeworks Automation",
  description:
    "Facial recognition systems built for government and corporations: ID checks, access control, staff attendance, onboarding and fraud prevention. Cut labour costs, speed up checks and reduce errors.",
};

const flow = [
  ["Capture", "A camera, kiosk or phone takes a clear picture of the face."],
  ["Check it is real", "The system confirms a live person is present, not a photo, screen or mask."],
  ["Match", "The face becomes a secure template that is compared with the records you choose."],
  ["Decide and log", "A clear result goes to your system or to a person. Every step is recorded."],
];

const care = [
  ["Consent and notice", "People are told when a camera is in use and why. Enrolment is by consent wherever the law or the use case calls for it."],
  ["A person makes the big decisions", "The system suggests. Trained staff confirm anything that affects a person's rights, money or freedom."],
  ["Templates, not photo libraries", "We store encrypted mathematical templates, with strict retention limits, and can deploy fully inside your own network."],
  ["Tested for fairness", "We test across ages, skin tones and lighting, and tune to your site before you go live."],
  ["Full audit trail", "Every search, match and override is logged with who did it and when, so you can answer any audit or complaint."],
  ["Built to follow the law", "We design around data protection rules such as Zimbabwe's Cyber and Data Protection Act, and help you document your obligations."],
];

const faqs = [
  ["Can the system run without the internet?", "Yes. We can install it on your own servers or on a device at the door, so it keeps working when the connection drops, and your data stays with you."],
  ["Will it work with our existing ID or HR records?", "In most cases, yes. We connect to staff lists, ID databases and payroll or accounting systems, so you do not start from scratch."],
  ["What about people who are not enrolled?", "They are simply not recognised. The system never guesses. It says there is no match and passes the case to a person."],
  ["Do you sell it or rent it?", "We agree the model with you at the start of each project, in writing, so you know what you own and what support you receive."],
  ["How long does a project take?", "A small site can be running in weeks. National programmes are phased. We begin with a pilot so you can measure results before you scale."],
];

export default function FacialRecognition() {
  return (
    <>
      <section className="fr-hero">
        <svg className="fr-hero-bg" viewBox="0 0 400 480" aria-hidden="true">
          <path className="fr-head" d="M108 240C108 130 150 62 200 62s92 68 92 178c0 100-40 185-92 185s-92-85-92-185z" />
          <g className="fr-mesh">{edges.map(([a, b], i) => <line key={i} x1={points[a][0]} y1={points[a][1]} x2={points[b][0]} y2={points[b][1]} />)}</g>
          <g className="fr-dots">{points.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3.2" style={{ animationDelay: `${(i % 40) * 80}ms` }} />)}</g>
        </svg>
        <div className="wrap fr-hero-inner">
          <p className="tag">Facial recognition</p>
          <h1>Know who you are dealing with. <span className="red">In seconds.</span></h1>
          <p className="lede">
            Facial recognition systems built for government bodies and corporations. They check identity,
            control access and record attendance, so you spend less on manual checks, work faster and make
            fewer mistakes.
          </p>
          <div className="actions">
            <Link className="btn btn-red" href="/#book">Request a demo</Link>
            <a className="link" href="#demo">Try the live demo</a>
          </div>
        </div>
      </section>

      <section className="fr-section fr-dark" id="demo" aria-labelledby="demo-t">
        <div className="wrap">
          <h2 className="section-head" id="demo-t">See it work</h2>
          <p className="sub">Choose a scenario and watch the system run. This is a simulation.</p>
          <FaceDemo />
        </div>
      </section>

      <section className="why" aria-labelledby="fr-why-t">
        <div className="wrap">
          <h2 className="section-head" id="fr-why-t">What it does for your organisation</h2>
          <div className="why-grid">
            {outcomes.map(([title, text]) => (
              <div className="why-item" key={title}>
                <h3 className="why-k">{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fr-section fr-sand" id="use-cases" aria-labelledby="uc-t">
        <div className="wrap">
          <h2 className="section-head" id="uc-t">How it helps in the real world</h2>
          <UseCases />
        </div>
      </section>

      <section className="fr-section" aria-labelledby="how-t">
        <div className="wrap">
          <h2 className="section-head" id="how-t">How it works</h2>
          <ol className="steps">
            {flow.map(([t, d], i) => (
              <li className="step" key={t}>
                <span className="step-n" aria-hidden="true">0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
          <p className="pull">It also connects to our finance bots: a face check at the gate can update attendance, payroll and reports with no one retyping.</p>
        </div>
      </section>

      <section className="fr-section fr-dark" aria-labelledby="care-t">
        <div className="wrap">
          <h2 className="section-head" id="care-t">Built to be used responsibly</h2>
          <p className="sub">Facial recognition handles personal data. Trust comes from how it is used, so we build these safeguards in.</p>
          <ul className="care-grid">
            {care.map(([t, d]) => (
              <li className="care" key={t}>
                <span className="care-icon"><Icon name="badge" size={22} /></span>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="fr-section" aria-labelledby="faq-t">
        <div className="wrap fr-faq-wrap">
          <h2 className="section-head" id="faq-t">Common questions</h2>
          <div className="faq">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="fr-cta" aria-labelledby="cta-t">
        <div className="wrap fr-cta-inner">
          <div>
            <h2 id="cta-t">Start with a pilot at one site.</h2>
            <p>Tell us where you check identity today. We will show you what a pilot would involve and what it could save.</p>
          </div>
          <div className="fr-cta-actions">
            <Link className="btn btn-red" href="/#book">Book a free consultation</Link>
            <p><a href={`mailto:${contactEmail}`}>{contactEmail}</a><br /><a href={`tel:${contactPhoneRaw}`}>{contactPhone}</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
