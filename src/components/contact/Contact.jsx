import "./contact.scss";
import {
  FaFreeCodeCamp,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

export default function Contact() {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="contact" id="contact">
      <div className="container">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit"> Send</button>
        </form>
      </div>
      <div className="footer" id="footer">
        <div className="sm-container">
          <FaInstagram className="icon" size="40" />
          <FaFreeCodeCamp className="icon" size="40" />
          <FaLinkedin className="icon" size="40" />
          <FaGithub className="icon" size="40" />
        </div>
      </div>
    </div>
  );
}
