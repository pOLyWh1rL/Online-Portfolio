function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="./">pOLy</a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto align-items-center">

            {/* Navigation Links */}
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

            {/* Social Icons */}
            <li className="nav-item ms-3">
              <a
                href="https://www.facebook.com/pOLyWh1rL"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </li>

            <li className="nav-item">
              <a
                href="https://www.instagram.com/poly_wh1rl/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </li>

            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/june-benedict-malabanan-b246a8324"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
