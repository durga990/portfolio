import "./App.css";
import durgaImage from "./assets/durga.png";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaJava,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { SiMysql } from "react-icons/si";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Durga Gundabathula</h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">

        <div className="hero-text">

          <p className="hello">Hello 👋</p>

          <h1>I'm Durga</h1>

          <h2>Frontend React Developer</h2>

          <p className="description">
            Passionate React Developer who creates modern,
            responsive and user-friendly websites using
            HTML, CSS, JavaScript and React.
          </p>

          <div className="buttons">

            <a href="/resume.pdf" download>
              <button className="resume-btn">
                Download CV
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/durga-gundabattula"
              target="_blank"
              rel="noreferrer"
            >
              <button className="resume-btn">
                <FaLinkedin />
                LinkedIn
              </button>
            </a>

            <a
              href="https://github.com/durga990"
              target="_blank"
              rel="noreferrer"
            >
              <button className="resume-btn">
                <FaGithub />
                GitHub
              </button>
            </a>

          </div>

        </div>

        <div className="hero-image">

          <div className="circle">

            <img
              src={durgaImage}
              alt="Durga"
            />

          </div>

        </div>

      </section>

      {/* About */}

      <section className="section" id="about">

        <h2>About Me</h2>

        <p>
          I am Durga Gundabathula, a passionate Frontend React Developer
          with knowledge of HTML, CSS, JavaScript and React.

          <br /><br />

          I enjoy building beautiful websites with clean UI,
          responsive layouts and smooth user experiences.

          <br /><br />

          I am also interested in Java, MySQL and Data Structures &
          Algorithms to strengthen my programming skills.

        </p>

      </section>

      {/* Skills */}

      <section className="section" id="skills">

        <h2>My Skills</h2>

        <div className="cards">

          <div className="card">
            <FaHtml5 className="skill-icon html" />
            <h3>HTML5</h3>
          </div>

          <div className="card">
            <FaCss3Alt className="skill-icon css" />
            <h3>CSS3</h3>
          </div>

          <div className="card">
            <FaJsSquare className="skill-icon js" />
            <h3>JavaScript</h3>
          </div>

          <div className="card">
            <FaReact className="skill-icon react" />
            <h3>React</h3>
          </div>

          <div className="card">
            <FaJava className="skill-icon java" />
            <h3>Java</h3>
          </div>

          <div className="card">
            <SiMysql className="skill-icon mysql" />
            <h3>MySQL</h3>
          </div>

          <div className="card">
            <FaGithub className="skill-icon github" />
            <h3>GitHub</h3>
          </div>

        </div>

      </section>

      {/* Projects */}

      <section className="section" id="projects">

        <h2>Projects</h2>

        <div className="project-container">

          <div className="project">
            <h3>Portfolio Website</h3>

            <p>
              Responsive React Portfolio with modern UI,
              animations and contact section.
            </p>

          </div>

          <div className="project">

            <h3>Calculator</h3>

            <p>
              A simple calculator using HTML,
              CSS and JavaScript.
            </p>

          </div>

          <div className="project">

            <h3>Restaurant Website</h3>

            <p>
              Beautiful restaurant landing page with responsive layout.
            </p>

          </div>

        </div>

      </section>

      {/* Contact */}

      <section className="section contact" id="contact">

        <h2>Contact Me</h2>

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
        ></textarea>

        <button className="send-btn">
          Send Message
        </button>

      </section>

      {/* Footer */}

      <footer>

        © 2026 Durga Gundabathula | All Rights Reserved

      </footer>

    </div>
  );
}

export default App;