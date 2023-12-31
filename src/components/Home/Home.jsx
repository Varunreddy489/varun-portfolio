import React from "react";
import "./Home.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <section>
        <div className="main">
          <div className="detail">
            <h1>
              <span>Hello there! 👋</span> <br /> I am{" "}
              <span style={{ color: "#00E8F8" }}>Varunreddy</span>
            </h1>
            <p>
              I am a Front-End Web Developer,
              <br />
              Exploring the world of web development.
            </p>

            <p>
              I am currently pursuing my Under Graduatation Bachelor of Technology in 
              <br />
              Computer Science from SRM University as a 3rd year Student.
              <br />
            </p>
            <p>
            I have worked on Various Technologies of Web Development like
            React.js & Node.js
              <br />
              Interested in learning <span>Next.js </span> and{" "}
              <span> Typescript</span>
            </p>
            <div className="social">
              <a href="https://github.com/Varunreddy489?tab=repositories" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/varunreddy-sannapureddy-1157b9223/" target="_blank">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="images">
            <img src="/Varun.jpg" className="pic" alt="" width="100%" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
