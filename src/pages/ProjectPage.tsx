import React from 'react';  

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A fully responsive online store built with React and Node.js.',
    image: '/images/project1.jpg',
    link: 'https://example.com/project1',
    category: 'Web Development',
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my skills and projects.',
    image: '/images/project2.jpg',
    link: 'https://example.com/project2',
    category: 'Frontend',
    isFeatured: false,
  },
];

const Projects: React.FC = () => {
  return (
    <section  className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.isFeatured ? 'featured' : ''}`}
              data-index={index}
            >
              <div className="image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
                {project.isFeatured && (
                  <span className="featured-badge">Featured</span>
                )}
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;