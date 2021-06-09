import "./intro.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      backspeed: 55,
      strings: ["Full-stack Dev", "Designer", "Lifelong Learner"]
    });
  }, []);
  return (
    <div
      className="intro"
      id="intro"
      style={{
        backgroundImage: "url(assets/nz-fern-leaves.jpg)",
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover"
      }}
    >
      <div className="container-intro">
        <div className="wrapper">
          <h1>Kia Ora! My name is Kevin.</h1>
          <h1>
            {" "}
            <span ref={textRef}></span>
          </h1>
        </div>
        <a href="#about">
          <ExpandMoreIcon className="arrow-icon" />
        </a>
      </div>
    </div>
  );
}
