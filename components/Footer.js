import Image from "next/image";
import { contactEmail, contactPhone, contactPhoneRaw } from "./data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <Image className="footer-logo" src="/img/logo-light.png" width={339} height={117} alt="Spadeworks Automation" />
          <p>Custom software bots for the finance and accounting team of any business, in any industry.</p>
        </div>
        <div className="footer-contact">
          <p><a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
          <p><a href={`tel:${contactPhoneRaw}`}>{contactPhone}</a></p>
          <p><a href="https://spadeworks.co.zw">spadeworks.co.zw</a></p>
        </div>
      </div>
      <div className="wrap"><p className="footer-small">&copy; {new Date().getFullYear()} Spadeworks Automation</p></div>
    </footer>
  );
}
