import React from 'react';

const Home = () => {
  return (
    <section id="home" className="section text-center bg-light">
      <div className="container py-5">
        <h1 className="fw-bold display-4 animate">Hi, I'm Ramchandra Patade</h1>
        <p className="lead mt-3 animate delay-1">
          I’m a Python Full Stack Developer passionate about crafting scalable backend systems and seamless, user-friendly frontend experiences.
        </p>
        <a
          href="#projects"
          className="btn btn-primary btn-lg mt-4 animate delay-2"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Home;
