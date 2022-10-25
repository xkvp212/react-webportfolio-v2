import "./works.scss";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "2x AWS Certified",
      desc:
        "AWS SAA✔️,AWS CCP✔️, and currently preparing for the AWS Developer Associate Exam",
      img: "assets/aws-badges1.png",
      link: "https://www.credly.com/users/kevin-pacis"
    },
    {
      id: "2",
      title: "Serverless Messaging App",
      desc:
        "A serverless application for sending email or SMS. S3, CloudFront, Route53, Lambda, StepFunctions, SES, SNS, Api Gateway",
      img: "assets/serverless-sending-app1.png",
      link: "https://cloudprojects.site",
      codeurl: "https://github.com/xkvp212/aws-messaging-app"
    },
    {
      id: "3",
      title: "Portfolio WebApp",
      desc:
        "No Bootstrap! This mobile-responsive webapp is done completely from scratch with ReactJS framework!",
      img: "assets/portfolio-webapp1.png",
      codeurl: "https://github.com/xkvp212/react-webportfolio-v2"
    }
  ];

  const handleClick = way => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map(d => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <div className="projectUrls">
                    <a href={d.link}>Link</a>
                    <a href={d.codeurl}>Code</a>
                  </div>
                </div>
              </div>
              <div className="right">
                {" "}
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <MdKeyboardArrowLeft
        className="arrow left"
        size="100"
        color="white"
        onClick={() => handleClick("left")}
      ></MdKeyboardArrowLeft>
      <MdKeyboardArrowRight
        className="arrow right"
        size="100"
        color="white"
        onClick={() => handleClick()}
      ></MdKeyboardArrowRight>
    </div>
  );
}
