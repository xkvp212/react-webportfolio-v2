import "./about.scss";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitSquare,
  FaSass,
  FaPython,
  FaStackOverflow
} from "react-icons/fa";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="left">
          <div className="img-container">
            <img src="assets/cowmoo.jpg" alt="KevinPacis Selfie" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              scelerisque volutpat mauris efficitur sagittis. Aliquam posuere
              odio nec risus feugiat, eget tempus urna tincidunt. Aliquam dictum
              ex ac pretium euismod. Donec cursus lorem ut gravida pharetra.
              Maecenas gravida, erat a iaculis mattis, nisi lacus lacinia urna,
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
            <FaStackOverflow size="70" />
          </div>
        </div>
      </div>
    </div>
  );
}
