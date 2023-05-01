import React from "react";

function NavBar() {
  return (
    <nav>
    <ul className = "sectionList">
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
    </nav>
  );
 
}
// function NavBar() {
//   return (
//     <nav>
//       <NavLinks />
//     </nav>
//   );
// }

export default NavBar;
