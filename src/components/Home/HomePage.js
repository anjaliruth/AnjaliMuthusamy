import React from "react";

import GithubIcon from "../../Media/icons/github.png";
import LinkedinIcon from "../../Media/icons/Linkedin.png";
export default function HomePage() {
  return (
    <div id="home">
      <div className="totalHomeSection">
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/anjali-ruth-muthusamy"
            target="_blank"
          >
            <img
              className="Linkedin-icon"
              src={LinkedinIcon}
              alt="linkedin-icon"
            />
          </a>
          <a href="https://github.com/anjaliruth" target="_blank">
            <img className="Github-icon" src={GithubIcon} alt="github-icon" />
          </a>
        </div>
        <div className="writing">
          <p className="name">Hi, I'm Anjali</p>
          <p className="sectionsubHeading"> A Junior Developer</p>
          <p className="home">
            I'm a UCL-trained Chemical Engineering graduate, currently
            transitioning into tech through a 16-week bootcamp at the School of
            Code, specializing in full-stack web development. 

            <br/>
            <br/>
            Scroll <a href="#about">down</a> to expore
          </p>
        </div>
      </div>
    </div>
  );
}
