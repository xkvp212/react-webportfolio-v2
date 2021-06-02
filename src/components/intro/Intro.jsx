import "./intro.scss";

export default function Intro() {
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
    ></div>
  );
}
