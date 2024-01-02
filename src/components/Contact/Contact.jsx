import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f9iv51l",
        "template_3jo5c7s",
        form.current,
        "_0IL8Bhpl3Lf3bOHE"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            toast.success("Mail Sent Successfully");
          }
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contact" id="contact">
        <h1>Contact Me</h1>
        <div className="inputs">
          <form ref={form} onSubmit={sendEmail}>
            <input
              className="msg"
              type="text"
              placeholder="Enter Your Name..."
              required
            />
            <input
              className="msg"
              type="email"
              placeholder="Enter Your Email..."
              required
            />
            <textarea
              type="text"
              className="msg"
              placeholder="Enter Your Message..."
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div>
          <ToastContainer position="bottom-center" />
        </div>
      </div>
    </>
  );
};

export default Contact;
