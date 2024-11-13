import React, { useState } from "react";
import Container from "../../layouts/Container";

import s from "./Contact.module.scss";
import { nc } from "../../images";

// Used for Netlify Form Submission
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, status: false });
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then((res) => {
        console.log(res);
        submissionFeedback({ failed: false });
      })
      .catch((err) => {
        submissionFeedback({
          failed: true,
          message: err,
        });
        console.error(err);
      });
  };

  const submissionFeedback = (status) => {
    setState({
      name: "",
      email: "",
      message: "",
      status,
    });
  };

  const FeedbackAlert = ({ status }) => (
    <div
      style={{
        backgroundColor: status.failed
          ? "rgb(255, 192, 192)"
          : "rgb(192, 255, 192)",
        padding: "0.5em 1em",
        color: "#555",
        fontSize: "0.9em",
      }}
    >
      {status.failed
        ? "Message failed to send: " + status.message
        : "Your contact request has been sent successfully!"}
    </div>
  );

  return (
    <section className={s.contact} id="contact">
      <Container>
        <h2>Want to get in touch?</h2>
        <p>
          To ask me questions or work with me, contact me with the form below!
        </p>
        <div className={s.columns}>
          <div className={s.column}>
            <h3>Contact Form</h3>
            <p>
              Halt! Any who would contact me must answer my questions three.
            </p>
            <form
              name="contact"
              method="post"
              action="/"
              data-netlify="true"
              className={s.contactForm}
              onSubmit={handleSubmit}
            >
              <label htmlFor="nameInput">What is your name?</label>
              <input
                name="name"
                id="nameInput"
                type="text"
                value={state.name}
                placeholder="Sir Lancelot of Camelot"
                required
                onChange={handleChange}
              />
              <label htmlFor="messageInput">What is your request?</label>
              <textarea
                name="message"
                id="messageInput"
                value={state.message}
                placeholder="I seek the Holy Grail!"
                required
                onChange={handleChange}
              ></textarea>
              <label htmlFor="emailInput">
                What is your electronic mail address?
              </label>
              <input
                name="email"
                id="emailInput"
                type="email"
                value={state.email}
                placeholder="sirlancelot@roundtable.co"
                required
                onChange={handleChange}
              />
              <input type="submit" value="Proceed" />
              {state.status ? <FeedbackAlert status={state.status} /> : null}
            </form>
          </div>
          <div className={s.column}>
            <h3>Location - Wake Forest, Wake County, NC</h3>
            <p>
              I'm based in Wake Forest, North Carolina -- A suburb of the
              Raleigh Research Triangle Area. I can comfortably commute within
              Wake County.
            </p>
            <img src={nc} alt="Wake Forest, NC" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
