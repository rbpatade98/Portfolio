import React from 'react';

const projects = [
  {
    title: 'Flipkart – E-commerce Website',
    desc: 'I developed a full-stack e-commerce site with features like user authentication, product filtering, cart management, and checkout. The responsive frontend was built with Bootstrap, while the backend followed Django’s MVT architecture for clean and maintainable code.',
    link: '#',
  },
  {
    title: 'FilmLane – Video Streaming Platform',
    desc: 'Developed a Netflix-inspired video streaming platform featuring user authentication and categorized movie browsing using Django’s dynamic templates. Managed media content and admin controls through Django’s ORM and admin panel, following the MVT architecture.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-white">
      <div className="container py-5">
        <h2 className="mb-4 animate">Projects</h2>
        <div className="row">
          {projects.map((project, i) => (
            <div className="col-md-6 mb-4 animate delay-1" key={i}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.desc}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
