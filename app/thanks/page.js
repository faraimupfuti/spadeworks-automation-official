import Link from "next/link";

export const metadata = { title: "Booking request sent | Spadeworks Automation" };

export default function Thanks() {
  return (
    <section className="message wrap">
      <h1>Booking request sent.</h1>
      <p className="lede">Thanks, your booking request is in. We&apos;ll reply by email or phone shortly.</p>
      <Link className="btn" href="/">Back to the homepage</Link>
    </section>
  );
}
