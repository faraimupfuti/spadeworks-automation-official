export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p className="footer-name">Spadeworks Automation</p>
        <p>Automation for finance and accounting teams.</p>
        <p className="footer-small">&copy; {new Date().getFullYear()} Spadeworks Automation</p>
      </div>
    </footer>
  );
}
