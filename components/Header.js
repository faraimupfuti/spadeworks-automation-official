import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" href="/" aria-label="Spadeworks Automation, home">
          <Image className="brand-logo" src="/img/logo.png" width={339} height={117} alt="Spadeworks Automation" priority />
        </Link>
        <nav className="site-nav" aria-label="Main">
          <Link href="/#services">Services</Link>
          <Link href="/#why">Why us</Link>
          <Link href="/#process">How we work</Link>
          <Link className="btn btn-small" href="/#book">Book a service</Link>
        </nav>
      </div>
    </header>
  );
}
