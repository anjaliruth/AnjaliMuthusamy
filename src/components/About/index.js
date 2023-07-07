// image
import myImage from "../../photos/IMG_8232.jpg";
//name
//title
//about section
export default function About() {
  return (
    <div className="relativeContainer">
    <div id="about" className="headerOffset"></div>
      <div className="sectionHeading">About</div>
      <div className="about-total">
        <p className="aboutPara" >
        
        
        As an aspiring developer, I thrive on continuous learning and self-improvement. Coding has become my passion, allowing me to explore new horizons and push the boundaries of what I can achieve. With a strong foundation in various skill areas, I bring a unique perspective to problem-solving and enjoy tackling complex challenges head-on. From honing my motor skills to mastering multiple languages and software tools, I am equipped with a versatile skill set that empowers me to contribute meaningfully in the tech industry. 
    
        </p>
        <div className="myPhoto">
          <img className="myImage" src={myImage} alt="My Pic" />
        </div>
      </div>
    </div>
  );
}
// Hi! I'm a Chemical Engineering graduate from UCL that flirted with the idea of programming and now im 6 weeks deep into a coding bootcamp, contemplating life over React
