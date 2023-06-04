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
        <div className="aboutPara">
        
            {/* I initially started coding to acquire new skills, but soon
            discovered a deep affection for its logical nature and limitless
            potential to challenge myself. This aligns perfectly with my core
            values of continuous learning and self-improvement. To date, I have
            honed over 20 skills, spanning from motor skills and sports to
            languages and software. Coding has become another invaluable tool in
            my ever-expanding toolkit of abilities. */}

            Driven by a desire to acquire new skills, I initially ventured into coding and quickly fell in love with its problem-solving nature and the endless opportunities it presents for personal growth. This journey aligns seamlessly with my core values of continuous learning and self-improvement. As I explore the realm of coding, I am now actively seeking a new career in the tech industry, where I can utilize my diverse skill set and embrace the challenges that lie ahead. With over 20 mastered skills spanning from motor skills to languages and software, coding has become an indispensable tool in my ever-expanding arsenal.
    
        </div>
        <div className="myPhoto">
          <img className="myImage" src={myImage} alt="My Photo" />
        </div>
      </div>
    </div>
  );
}
// Hi! I'm a Chemical Engineering graduate from UCL that flirted with the idea of programming and now im 6 weeks deep into a coding bootcamp, contemplating life over React
