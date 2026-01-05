function EducationExperience() {
  return (
    <section id="education-experience" className="py-5">
      <div className="container">

        <h2 className="text-center mb-5 section-title">
          Education & Experience
        </h2>

        <div className="row g-4">

          {/* EDUCATION */}
          <div className="col-md-6">
            <div className="about-card h-100">
              <h5 className="mb-4">Education</h5>

              <div className="timeline-item mb-4">
                <h6 className="fw-bold mb-1">
                  Asia Pacific College
                </h6>
                <span className="text-muted small">
                  2024 – Present
                </span>
                <p className="mt-2 mb-0">
                  Undergraduate, <strong>BS Computer Science</strong><br />
                  <em>SMFI Scholar</em>
                </p>
              </div>

              <div className="timeline-item mb-4">
                <h6 className="fw-bold mb-1">
                  Pasay City National Science High School
                </h6>
                <span className="text-muted small">
                  2022 – 2024
                </span>
                <p className="mt-2 mb-0">
                  Senior High School Diploma<br />
                  <em>With Honors</em>
                </p>
              </div>

              <div className="timeline-item mb-4">
                <h6 className="fw-bold mb-1">
                  Maranatha Christian Academy, Lipa
                </h6>
                <span className="text-muted small">
                  2018 – 2022
                </span>
                <p className="mt-2 mb-0">
                  Junior High School Certificate<br />
                  <em>With Honors</em>
                </p>
              </div>

              <div className="timeline-item">
                <h6 className="fw-bold mb-1">
                  Maranatha Christian Academy, Lipa
                </h6>
                <span className="text-muted small">
                  2012 – 2018
                </span>
                <p className="mt-2 mb-0">
                  Elementary Diploma<br />
                  <em>Graduated Valedictorian</em>
                </p>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="col-md-6">
            <div className="about-card h-100">
              <h5 className="mb-4">Experience</h5>

              <div className="timeline-item mb-4">
                <h6 className="fw-bold mb-1">
                  Asia Pacific College – Microsoft Community
                </h6>
                <p className="mb-1">Secretariat for Finance – <strong>Head</strong></p>
                <span className="text-muted small">
                  SY 2025 – 2026
                </span>
                <p className="mb-1">
                  Finance - <strong>Associate</strong>
                </p>
                <span className="text-muted small">
                  SY 2024 – 2025
                </span>
              </div>

              <div className="timeline-item mb-4">
                <h6 className="fw-bold mb-1">
                  Rotaract Club of Asia Pacific College
                </h6>
                <p className="mb-1">
                  Treasurer
                </p>
                <span className="text-muted small">
                  SY 2025 – 2026
                </span>
              </div>

              <div className="timeline-item mb-4">
                <h6 className="fw-bold mb-1">
                  APC BRIDGE
                </h6>
                <p className="mb-1">
                  Public Relations Head - <strong>Logistics</strong>
                </p>
                <span className="text-muted small">
                  SY 2025 – 2026
                </span>
              </div>

              <div className="timeline-item mb-4">
                <h6 className="fw-bold mb-1">
                    Peer Facilitator
                </h6>
                <p className="mb-1">
                    Logistics
                </p>
                <span className="text-muted small">
                  SY 2024 – 2025
                </span>
              </div>

              <div className="timeline-item">
                <h6 className="fw-bold mb-1">
                  Student Council – Maranatha Christian Academy, Lipa
                </h6>
                <p className="mb-1">
                  <strong>SSG President</strong>
                </p>
                <span className="text-muted small">
                  SY 2017 – 2018
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default EducationExperience;
