import React from "react";

import GithubIcon from "../../Media/icons/github.png";
import LinkedinIcon from "../../Media/icons/Linkedin.png";
import EmailIcon from "../../Media/icons/email-icon-50.png"
export default function HomePage() {
  return (
  
    <div className="relativeContainer">
    <div id="home" className="headerOffset"></div>
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
          <a href="mailto:ruthanjali0211@gmail.com">
            <img className="mail-icon" src={EmailIcon}
            alt="email-icon" />
          </a>
        </div>
        <div className="writing">
          <p className="name">Hi, I'm Anjali</p>
          <p className="sectionsubHeading"> A Junior Developer</p>
          <p className="home">
          I'm a UCL-trained Chemical Engineering graduate, currently transitioning into the tech industry through a 16-week bootcamp at the School of Code. Driven by my passion for development, I am an aspiring developer on a continuous journey of growth. With 15 new skills acquired since 2020, I am ready to make a meaningful impact in the tech industry. 

            <br/>
            <br/>
            Scroll <a href="#about">down</a> to expore
          </p>
        </div>
      </div>
    </div>
  );
}
