import profile from '../assets/pfp.jpg';
import EducationExperience from './EducationExperience';

function About() {
  return (
    <div className="fade-up">
      <section id="about">
        <div className="container">

          <div className="row mb-5">
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
                I’m <strong>June Benedict Malabanan</strong>, a 2nd year Computer Science
                student from <strong>Asia Pacific College</strong> who aspires to
                become a successful individual in the field of technology.
              </p>

              <h5 className="mt-4">Hobbies</h5>
              <p>In my free time, I enjoy:</p>
              <ul className="list-unstyled">
                <li>🎯 Learning something new</li>
                <li>🎮 Playing video games</li>
                <li>🎬 Watching movies</li>
                <li>🏍️ Motorbiking</li>
              </ul>
            </div>
          </div>

          {/* Skills & Strengths */}
          <div className="about-extra">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="about-card h-100">
                  <h5 className="mb-3">Skills</h5>
                  <ul className="list-unstyled mb-0">
                    <li>💻 JavaScript (React, Bootstrap)</li>
                    <li>🐍 Python</li>
                    <li>🗄️ MySQL</li>
                    <li>⚙️ Git & GitHub</li>
                    <li>🖥️ Java</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div className="about-card h-100">
                  <h5 className="mb-3">Strengths</h5>
                  <ul className="list-unstyled mb-0">
                    <li>🧠 Problem Solving</li>
                    <li>🤝 Team Collaboration</li>
                    <li>📚 Willingness to Learn</li>
                    <li>🎯 Attention to Detail</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <EducationExperience />
    </div>
  );
}

export default About;
