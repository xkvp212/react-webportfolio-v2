import "./contact.scss";

export default function Contact() {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="contact" id="contact">
      <div className="wrapper">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit"> Send</button>
        </form>
      </div>
    </div>
  );
}
