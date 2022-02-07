import "./contact.scss";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_su3tbor",
        "template_04kwpw8",
        e.target,
        "user_4lPfkvkGs3gsCTNY2ErT3"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="./assets/paper-plane.png" alt="" />
      </div>
      <div className="right">
        <h1>Contact me</h1>
        <form onSubmit={handleSubmit}>
          
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Your Name"
          />

          
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="Your Email"
          />

          
          <textarea id="message" name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>

          {message && <span>Thanks, I will reply as soon as I can</span>}
        </form>
      </div>
    </div>
  );
}
