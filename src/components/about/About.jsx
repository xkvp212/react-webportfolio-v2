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
              As a lifelong learner and tech enthusiast, I am constantly seeking
              out new and exciting challenges. Whether it's coding, working in
              the cloud, or tinkering with computers, I am always looking for
              ways to expand my knowledge and skills.
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
