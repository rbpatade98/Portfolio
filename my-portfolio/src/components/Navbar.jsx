import React, { useState, useEffect } from 'react';

const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll spy effect to update active link based on scroll position
  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let currentSection = 'home';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          currentSection = section;
        }
      }
      setActive(currentSection);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setNavOpen(false); // Close mobile nav on click
  };

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      } transition-navbar`}
      style={{ transition: 'background-color 0.3s ease, box-shadow 0.3s ease' }}
    >
      <div className="container">
        <a
          href="#home"
          className="navbar-brand fw-bold"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          style={{ cursor: 'pointer' }}
        >
          MyPortfolio
        </a>

        {/* Hamburger toggle button */}
        <button
          className="navbar-toggler border-0"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation"
          type="button"
        >
          <div className={`hamburger ${navOpen ? 'open' : ''}`}>
            <span />
            <span />
            <span />
          </div>
        </button>

        {/* Collapsible menu */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            navOpen ? 'show slide-in' : ''
          }`}
        >
          <ul className="navbar-nav align-items-center">
            {sections.map((section) => (
              <li key={section} className="nav-item mx-2">
                <a
                  href={`#${section}`}
                  className={`nav-link ${
                    active === section ? 'active-link' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
            {/* Optional: Dark mode toggle */}
            {/* <li className="nav-item mx-2">
              <button
                className="btn btn-outline-secondary"
                onClick={() => {/* your dark mode toggle logic *\/}}
              >
                🌓
              </button>
            </li> */}
          </ul>
        </div>
      </div>

      {/* Navbar CSS */}
      <style>{`
        .nav-link {
          position: relative;
          font-weight: 500;
          color: #444;
          transition: color 0.3s ease;
          cursor: pointer;
        }
        .nav-link:hover {
          color: #0d6efd;
        }
        .active-link {
          color: #0d6efd;
          font-weight: 600;
        }
        .active-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 100%;
          height: 3px;
          background-color: #0d6efd;
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        /* Hamburger */
        .hamburger {
          width: 24px;
          height: 18px;
          position: relative;
          cursor: pointer;
          display: inline-block;
        }
        .hamburger span {
          position: absolute;
          height: 2.5px;
          width: 100%;
          background: #444;
          border-radius: 2px;
          transition: all 0.3s ease;
          left: 0;
        }
        .hamburger span:nth-child(1) {
          top: 0;
        }
        .hamburger span:nth-child(2) {
          top: 7.5px;
        }
        .hamburger span:nth-child(3) {
          top: 15px;
        }
        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg);
          top: 7.5px;
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg);
          top: 7.5px;
        }
        /* Slide-in for mobile menu */
        .collapse.slide-in {
          animation: slideInFromRight 0.3s forwards;
          display: block !important;
        }
        @keyframes slideInFromRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        /* Navbar transition */
        .transition-navbar {
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        @media (max-width: 991px) {
          .nav-link {
            font-size: 1.1rem;
          }
          .navbar-collapse {
            background-color: white;
            position: fixed;
            top: 56px;
            right: 0;
            height: calc(100vh - 56px);
            width: 220px;
            padding-top: 1rem;
            box-shadow: -2px 0 8px rgba(0,0,0,0.1);
            z-index: 9999;
          }
          .navbar-nav {
            flex-direction: column;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
