import { useState } from 'react';
import { projects, PROJECT_TYPES } from '../data/projects';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All' ? projects : projects.filter((p) => p.type === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>

        <div className="project-filters">
          {PROJECT_TYPES.map((type) => (
            <button
              key={type}
              className={`filter-btn${activeFilter === type ? ' active' : ''}`}
              onClick={() => setActiveFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.name}</h3>
                <span className="project-type">
                  {project.language} &bull; {project.type}
                </span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>

        <div className="view-all-projects">
          <a
            href="https://github.com/gauravdahale?tab=repositories"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All 100+ Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
