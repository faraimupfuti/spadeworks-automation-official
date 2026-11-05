import Link from "next/link";

export const metadata = { title: "Page not found | Spadeworks Automation" };

export default function NotFound() {
  return (
    <section className="message">
      <h1>That page doesn&apos;t exist.</h1>
      <p className="lede">The link may be old or mistyped.</p>
      <Link className="btn" href="/">Go to the homepage</Link>
    </section>
  );
}
