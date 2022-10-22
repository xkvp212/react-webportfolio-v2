import "./about.scss";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitSquare,
  FaSass,
  FaPython,
  FaAws
} from "react-icons/fa";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="left">
          <div className="img-container">
            <img src="assets/kevinp.jpg" alt="KevinPacis Selfie" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h1>About Me</h1>
            <p>
              When I'm not coding or working in the cloud, I am an avid learner
              of all things novel and interesting. I like to tinker around
              computers. I enjoy all sorts of sports like cycling, pool, skate,
              etc. I play the guitar, piano, clarinet, etc. I dabble in hobbies
              like modern Yo-yos, wakeboarding, mushroom growing, etc.
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="title">
            <h1>Professional Skills</h1>
          </div>
          <div className="sm-wrapper">
            <FaHtml5 className="icons" />
            <FaCss3Alt className="icons" />
            <FaJsSquare className="icons" />
            <FaReact className="icons" />
            <FaGitSquare className="icons" />
            <FaSass className="icons" />
            <FaPython className="icons" />
            <FaAws className="icons" />
          </div>
        </div>
      </div>
    </div>
  );
}
