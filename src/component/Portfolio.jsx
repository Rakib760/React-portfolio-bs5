import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio.css';
import boy from './boy.jpg';

function Portfolio() {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light body-s">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">Rakib Shaikh</a>
                    <button
                        className={`navbar-toggler toggler-custom ${isToggled ? '' : 'collapsed'}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded={isToggled ? "true" : "false"}
                        aria-label="Toggle navigation"
                        onClick={handleToggle}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isToggled ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item click">
                                <a className="nav-link active text-light" href="#home">Home</a>
                            </li>
                            <li className="nav-item click">
                                <a className="nav-link text-light" href="#about">About</a>
                            </li>
                            <li className="nav-item click">
                                <a className="nav-link text-light" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item click">
                                <a className="nav-link text-light" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div id="home" className="container-fluid d-flex flex-column flex-md-row align-items-center box text-center text-md-start">
                <div className="vertical d-none d-md-block"></div>
                <p className="h2 text-light name-s mb-4 mb-md-0">
                    Hi, I am Rakib Shaikh,<br /><span className='text-light'>Web Developer beginner</span>
                </p>
                <img src={boy} alt="Rakib Shaikh" className="rounded-circle pic-s mx-auto mx-md-0 mb-4 mb-md-0" />
            </div>

            <div id="about" className="container-fluid about py-5">
                <h2 className="text-light text-center">About Me</h2>
                <div className="card-body text-center h-card mt-3">
                    <p className="text-light h3">I am a web developer with a passion for creating innovative and amazing websites.</p>
                </div>
            </div>

            <div id="projects" className="container-fluid project py-5">
                <h1 className='text-center text-light'>Projects</h1>
                <div className="row mt-4">
                    <div className="col-sm-12 col-md-4 mb-4">
                        <h3 className='text-light text-center'>Project-1</h3>
                        <div className="bg-body prr text-center">
                            <a href="https://react-webfoodapp.web.app/" className='text-danger d-block text-decoration-none'>Web-App/Restaurant</a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 mb-4">
                        <h3 className='text-light text-center'>Project-2</h3>
                        <div className="bg-body prr text-center">
                            <a href="https://rakib760.github.io/portfolio-template/#home" className='text-danger d-block text-decoration-none'>React-Portfolio</a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 mb-4">
                        <h3 className='text-light text-center'>Project-3</h3>
                        <div className="bg-body prr text-center">
                            <a href="https://rakib760.github.io/Web-Project/" className='text-success d-block text-decoration-none'>Restaurant-Website</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" className="container-fluid contact py-5">
                <h2 className="text-light text-center">Contact Me</h2>
                <form className="text-light">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        </>
    );
}

export default Portfolio;
