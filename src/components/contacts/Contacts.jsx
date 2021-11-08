import { useState } from "react";
import "./Contacts.scss";

export default function Contacts() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contactme.png" alt="" />
      </div>

      <div className="right">
        <h2>Get in Touch !!</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>

          <button type="submit">
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGKnSkdpCTRNLlCXgNMtZJTBmvwLWGXPpGlpvTCRwSxgrZGQGzmlJNrbgmSKqfCmXRKzKlb"
              target="_blank"
            >
              Send
            </a>
          </button>

          {message && <span>Thanks for the message, will get back soon </span>}
        </form>
      </div>
    </div>
  );
}
