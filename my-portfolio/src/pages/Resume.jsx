import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="section bg-light text-center">
      <div className="container py-5">
        <h2 className="mb-4 animate">Resume</h2>
        <p className="animate delay-1">Download my updated resume below.</p>
        <a
          href="/RamchandraPatade_Resume.pdf"
          download
          className="btn btn-success btn-lg mt-3 animate delay-2"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
