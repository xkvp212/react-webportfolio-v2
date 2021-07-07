import "./contact.scss";
import { useForm, ValidationError } from "@formspree/react";
import {
  FaFreeCodeCamp,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCheckCircle
} from "react-icons/fa";

export default function Contact() {
  const [state, handleSubmit] = useForm("contactMe");

  if (state.succeeded) {
    return (
      <div className="message-sent" id="contanct">
        <FaCheckCircle className="check-logo" size="70" />
        <p className="message-thanks">Thank You!</p>
        <p>Your message has been sent. I will get back to you ASAP</p>
      </div>
    );
  }
  return (
    <div className="contact" id="contact">
      <div className="container">
        <h1>Contact Me</h1>

        <form onSubmit={handleSubmit}>
          <input id="name" type="name" name="name" placeholder="Name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea id="message" name="message" placeholder="Message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
      <div className="footer" id="footer">
        <div className="cr-wrapper">
          <p>Copyright © 2021 </p>
        </div>
        <div className="icon-wrapper">
          <a href="https://www.instagram.com/xkvp212/">
            <FaInstagram className="icon" size="40" />
          </a>
          <a href="https://www.freecodecamp.org/eyb0ss">
            <FaFreeCodeCamp className="icon" size="40" />
          </a>
          <a href="https://www.linkedin.com/in/kevin-pacis/">
            <FaLinkedin className="icon" size="40" />
          </a>
          <a href="https://github.com/xkvp212">
            <FaGithub className="icon" size="40" />
          </a>
        </div>
      </div>
    </div>
  );
}
