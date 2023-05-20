import htmlImage from "../../Media/icons/HTML.png";
import jestImage from "../../Media/icons/jest.png";
import JSImage from "../../Media/icons/JS.png";
import nodeImage from "../../Media/icons/node.png";
import postgresImage from "../../Media/icons/postgres.png";
import pythonImage from "../../Media/icons/python.png";
import githubImage from "../../Media/icons/github.png";
import reactImage from "../../Media/icons/ReactIcon.png";
function Skills() {
  const lists = [
    { skill: "HTML", image: htmlImage },
    { skill: "JavaScript", image: JSImage },
    { skill: "React", image: reactImage },
    { skill: "Jest", image: jestImage },
    { skill: "Python", image: pythonImage },
    { skill: "Node.js", image: nodeImage },
    { skill: "PostgreSQL", image: postgresImage },
    { skill: "Github", image: githubImage },
  ];

  // let skills = [{skill: "HTML"}, {skill: "CSS"}]

  return (
    <div id="skills">
      <h1 className="sectionHeading">Skills</h1>
      {lists.map((list,i) => (
        <div key={i}>
        
          <img src={list.image} alt={list.skill}/>
          <h2>{list.skill}</h2>
        </div>
      ))}
    </div>
  );
}

export default Skills;
