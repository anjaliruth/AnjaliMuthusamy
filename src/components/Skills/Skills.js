import htmlImage from "../../Media/icons/HTML.png";
import jestImage from "../../Media/icons/jest.png";
import JSImage from "../../Media/icons/JS.png";
import nodeImage from "../../Media/icons/node.png";
import postgresImage from "../../Media/icons/postgres.png";
import pythonImage from "../../Media/icons/python.png";
import githubImage from "../../Media/icons/github.png";
import reactImage from "../../Media/icons/ReactIcon.png";
import TSImage from "../../Media/icons/typescript.png";
function Skills() {
  const lists = [
    { skill: "HTML", image: htmlImage },
    { skill: "JavaScript", image: JSImage },
    { skill: "React", image: reactImage },
    {skill: "TypeScript", image: TSImage },
    { skill: "Jest", image: jestImage },
    { skill: "Python", image: pythonImage },
    { skill: "Node.js", image: nodeImage },
    { skill: "PostgreSQL", image: postgresImage },
    { skill: "Github", image: githubImage }
  ];

  // let skills = [{skill: "HTML"}, {skill: "CSS"}]

  return (
  
    <div className="relativeContainer">
    <div id="skills" className="headerOffset"></div>
      <h1 className="sectionHeading">Skills</h1>
      <div className="skillsGrid">
      {lists.map((list,i) => (
        <div key={i} className="individualSkills">
        
          <img src={list.image} alt={list.skill}/>
          <h2 className="skill">{list.skill}</h2>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Skills;
