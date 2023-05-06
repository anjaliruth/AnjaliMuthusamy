// image
import myImage from "../../photos/IMG_8232.jpg";
//name
//title
//about section
export default function About() {
  return (
    <div className="totalAboutSection">
      <div className ="writing">
        <p className = "sectionHeading">Anjali Muthusamy</p>
        <p className = "sectionHeading">Junior Developer</p>
        <p className="about">Insert here
        Insert here Insert hereInsert hereInsert hereInsert hereInsert hereInsert hereInsert hereInsert hereInsert hereInsert hereInsert hereInsert hereInsert hereInsert hereInsert hereInsert hereInsert hereInsert here </p>
      </div>
      <div className="myPhoto">
        <img className="myImage" src={myImage} alt="My Photo" />
      </div>
    </div>
  );
}
// Hi! I'm a Chemical Engineering graduate from UCL that flirted with the idea of programming and now im 6 weeks deep into a coding bootcamp, contemplating life over React