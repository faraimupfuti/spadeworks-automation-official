import Link from "next/link";

export const metadata = { title: "Message sent | Spadeworks Automation" };

export default function Thanks() {
  return (
    <section className="message">
      <h1>Message sent.</h1>
      <p className="lede">Thanks for writing. We&apos;ll reply by email.</p>
      <Link className="btn" href="/">Back to the homepage</Link>
    </section>
  );
}
