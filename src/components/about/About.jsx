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
            <FaHtml5 size="70" />
            <FaCss3Alt size="70" />
            <FaJsSquare size="70" />
            <FaReact size="70" />
            <FaGitSquare size="70" />
            <FaSass size="70" />
            <FaPython size="70" />
            <FaAws size="70" />
          </div>
        </div>
      </div>
    </div>
  );
}
