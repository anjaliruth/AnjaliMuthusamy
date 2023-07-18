import React from "react";

function NavBar() {
  return (
    <div className="NavBar">
      <ul className="sectionList">
        <li className="nameTab">Anjali Ruth Muthusamy</li>
      </ul>
      <nav>
        <ul className="sectionList">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
