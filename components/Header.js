import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Spadeworks Automation, home">
        <svg className="brand-mark" viewBox="0 0 64 34" aria-hidden="true">
          <path d="M2 34a30 30 0 0 1 60 0z" fill="currentColor" />
        </svg>
        <span className="brand-name">Spadeworks Automation</span>
      </Link>
      <nav className="site-nav" aria-label="Main">
        <Link href="/#services">Services</Link>
        <Link href="/#process">How we work</Link>
        <Link className="btn btn-small" href="/#contact">Get in touch</Link>
      </nav>
    </header>
  );
}
