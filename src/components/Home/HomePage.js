import React from 'react'
import myImage from "../../photos/IMG_8232.jpg";
import GithubIcon from "../../Media/icons/github.png"
import LinkedinIcon from "../../Media/icons/Linkedin.png"
export default function HomePage() {
  return (
    <div id="home">
    <div className="totalHomeSection">
    <div className="icons">
    <a href="https://www.linkedin.com/in/anjali-ruth-muthusamy" target="_blank">
      <img className="Linkedin-icon" src={LinkedinIcon} alt="linkedin-icon"/>
      </a>
      <a href="https://github.com/anjaliruth" target="_blank">
      <img className="Github-icon" src={GithubIcon} alt="github-icon"/>
      </a>
    </div>
      <div className ="writing">
        <p className = "name">Anjali Muthusamy</p>
        <p className = "sectionsubHeading">Junior Developer</p>
        <p className="home">
        I am a UCL-trained Chemical Engineering graduate currently transitioning into the world of tech through the School of Code's 16-week intensive bootcamp, focusing on full-stack web development.
        Scroll <a href="#about">down</a> to expore</p>
      </div>
      <div className="myPhoto">
        <img className="myImage" src={myImage} alt="My Photo" />
      </div>
    </div>
    </div>
  )
}
