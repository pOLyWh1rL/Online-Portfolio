import dotaImg from '../assets/projects/dota.png';
import pharmasearch from '../assets/projects/PharmaSearch.png';
import game from '../assets/projects/Game.png';

const projects = [
  {
    title: 'DOTA 2 Wiki',
    shortDesc: 'Bootstrap-based website showcasing DOTA 2 heroes and items.',
    details:
      'Inspired by DOTA 2 Fandom, this project is a responsive DOTA 2 wiki built using Bootstrap 5. It includes hero listings, item details, and a clean UI inspired by the game.',
    image: dotaImg,
    github: 'https://github.com/yourusername/dota-wiki',
  },
  {
    title: 'PharmaSearch',
    shortDesc: 'Python-based search engine using PyQt.',
    details:
      'My general contribution in this project was implementing the Prefix Tree (Trie) data structure to optimize search functionality for pharmaceutical products. This enhancement significantly improved the efficiency and speed of search queries within the PharmaSearch application.',
    image: pharmasearch,
    github: 'https://github.com/gabbrealz/Pharma-Search/tree/main/app/prefix_tree',
  },
  {
    title: '2048',
    shortDesc: 'Single-player sliding tile puzzle game.',
    details:
      'A Python-based implementation of the classic 2048 game featuring keyboard controls, score tracking, and smooth animations.',
    image: game,
    github: 'https://github.com/pOLyWh1rL/2048',
  },
];

function Projects() {
  return (
      <div className="fade-up">
      <section id="projects" className="py-5 bg-dark text-light">
        <div className="container-fluid px-0">
          <h2 className="text-center mb-4">My Projects</h2>

          <div
            id="projectsCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="5000"
            data-bs-pause="hover"
          >
            {/* Indicators */}
            <div className="carousel-indicators">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  data-bs-target="#projectsCarousel"
                  data-bs-slide-to={idx}
                  className={idx === 0 ? 'active' : ''}
                />
              ))}
            </div>

            {/* Slides */}
            <div className="carousel-inner">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className={`carousel-item ${idx === 0 ? 'active' : ''}`}
                >
                  <div className="project-slide position-relative">
                    <img
                      src={project.image}
                      className="project-img w-100"
                      alt={project.title}
                    />

                    {/* Overlay */}
                    <div className="project-overlay">
                      <h3>{project.title}</h3>
                      <p>{project.shortDesc}</p>

                      {/* Buttons */}
                      <div className="mb-3">
                        <button
                          className="btn btn-outline-light me-2"
                          data-bs-toggle="collapse"
                          data-bs-target={`#details-${idx}`}
                        >
                          More Details
                        </button>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          GitHub
                        </a>
                      </div>

                      {/* Collapse content */}
                      <div
                        id={`details-${idx}`}
                        className="collapse text-start"
                      >
                        <div className="card card-body bg-dark border-light text-light">
                          {project.details}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev custom-control"
              type="button"
              data-bs-target="#projectsCarousel"
              data-bs-slide="prev"
            >
              <i className="bi bi-chevron-left"></i>
            </button>

            <button
              className="carousel-control-next custom-control"
              type="button"
              data-bs-target="#projectsCarousel"
              data-bs-slide="next"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
