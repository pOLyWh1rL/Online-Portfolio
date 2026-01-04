import profile from '../assets/pfp.jpg';

function About() {
  return (
    <div className="fade-up">
      <section
        id="about"
        className="py-5 bg-light"
      >

        <div className="container">
          <h2 className="text-center mb-5">About Me</h2>

          <div className="row align-items-center">
            {/* Profile Picture + Name */}
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
              src={profile}
              alt="Profile"
              className="img-fluid rounded-circle profile-img mb-3"
              />
              <h4 className="fw-bold mb-0">JUNE</h4>
            </div>

            {/* About Text */}
            <div className="col-md-8">
              <h1 className="fw-bold mb-3">Hello 👋</h1>

              <p className="lead">
                I’m <strong>June Benedict Malabanan</strong>, a Computer Science
                student from <strong>Asia Pacific College</strong> who aspires to
                become a successful individual in the field of technology.
              </p>

              <h5 className="mt-4">Hobbies</h5>
              <ul className="list-unstyled">
                <li>🎯 Learning something new</li>
                <li>🎮 Playing video games</li>
                <li>🎬 Watching movies</li>
                <li>🏍️ Motorbiking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
