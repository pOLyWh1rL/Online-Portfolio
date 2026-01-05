function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container text-center">

        <h5 className="fw-bold mb-1">June Benedict Malabanan</h5>
        <p className="mb-3 text-muted">
          Computer Science Student • Asia Pacific College
        </p>

        {/* Social Links */}
        <div className="footer-social mb-4">
          <a
            href="https://github.com/pOLyWh1rL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/june-benedict-malabanan-b246a8324"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:malabananjunebenedict@gmail.com">
            <i className="bi bi-envelope"></i>
          </a>
        </div>

        <small className="text-muted">
          © {new Date().getFullYear()} Academic Portfolio • Built with React & Bootstrap
        </small>
      </div>
    </footer>
  );
}

export default Footer;
