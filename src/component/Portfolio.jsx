import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio.css';
import boy from './boy.jpg';

function Portfolio() {
    const [isToggled, setIsToggled] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        alert('Thank you for your message! I will get back to you soon.');
    };

    return (
        <>
            <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
                <div className="container">
                    <a className="navbar-brand text-light fw-bold" href="#">Rakib Shaikh</a>
                    <button
                        className={`navbar-toggler ${isToggled ? '' : 'collapsed'}`}
                        type="button"
                        onClick={handleToggle}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isToggled ? 'show' : ''}`}>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active text-light" href="#home" onClick={() => setIsToggled(false)}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#about" onClick={() => setIsToggled(false)}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#projects" onClick={() => setIsToggled(false)}>Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#contact" onClick={() => setIsToggled(false)}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section id="home" className="hero-section d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="hero-content">
                                <h1 className="text-light mb-3">Hi, I'm <span className="text-primary">Rakib Shaikh</span></h1>
                                <h2 className="text-light mb-4">Web Developer</h2>
                                <p className="text-light mb-4">I create innovative and engaging web experiences with modern technologies.</p>
                                <div className="hero-buttons">
                                    <a href="#projects" className="btn btn-primary me-3">View My Work</a>
                                    <a href="#contact" className="btn btn-outline-light">Contact Me</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                            <div className="hero-image">
                                <img src={boy} alt="Rakib Shaikh" className="img-fluid rounded-circle" />
                                <div className="floating-element-1"></div>
                                <div className="floating-element-2"></div>
                                <div className="floating-element-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="about-section py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">About Me</h2>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="about-content text-center">
                                <p className="lead text-light">
                                    I am a passionate web developer with expertise in creating modern, responsive websites and applications. 
                                    My focus is on writing clean, efficient code and creating intuitive user experiences.
                                </p>
                                <div className="skills-container mt-5">
                                    <h4 className="text-light mb-4">Technologies I Work With</h4>
                                    <div className="d-flex flex-wrap justify-content-center gap-3">
                                        <span className="skill-badge">HTML/CSS</span>
                                        <span className="skill-badge">JavaScript</span>
                                        <span className="skill-badge">React</span>
                                        <span className="skill-badge">Bootstrap</span>
                                        <span className="skill-badge">Firebase</span>
                                        <span className="skill-badge">Git</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="projects-section py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">My Projects</h2>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="project-card">
                                <div className="project-image">
                                    <div className="project-placeholder">Web App Preview</div>
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">Web-App/Restaurant</h3>
                                    <p className="project-description">A responsive restaurant web application with online ordering capabilities.</p>
                                    <a href="https://react-webfoodapp.web.app/" className="btn btn-outline-light btn-sm">View Project</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="project-card">
                                <div className="project-image">
                                    <div className="project-placeholder">Portfolio Preview</div>
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">React-Portfolio</h3>
                                    <p className="project-description">A modern portfolio template built with React and Bootstrap.</p>
                                    <a href="https://rakib760.github.io/portfolio-template/#home" className="btn btn-outline-light btn-sm">View Project</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="project-card">
                                <div className="project-image">
                                    <div className="project-placeholder">Website Preview</div>
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">Restaurant-Website</h3>
                                    <p className="project-description">A complete restaurant website with menu, reservations, and location info.</p>
                                    <a href="https://rakib760.github.io/Web-Project/" className="btn btn-outline-light btn-sm">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact-section py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Get In Touch</h2>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="name" className="form-label text-light">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="email" className="form-label text-light">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label text-light">Message</label>
                                    <textarea className="form-control" id="message" rows="5" placeholder="Your Message" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer py-4 text-center">
                <div className="container">
                    <p className="text-light mb-0">&copy; {new Date().getFullYear()} Rakib Shaikh. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Portfolio;
