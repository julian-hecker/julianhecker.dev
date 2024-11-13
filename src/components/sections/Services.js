import React from "react";

import Container from "../../layouts/Container";
import s from "./Services.module.css";

import {
  css,
  code,
  design,
  figma,
  html,
  js,
  node,
  php,
  react,
  shopify,
  teach,
  wp,
} from "../../assets/icons";

const serviceContent = [
  {
    icon: design,
    heading: "Design + Prototyping",
    text: (
      <>
        <p>
          Design + Prototyping Before writing a single line of code, it’s
          imperative to have plans set in place to know what to do. For
          websites, these plans consist of sitemaps, wiremaps, mockups, and
          prototypes.
        </p>
        <p>
          Copywriting is a part of the process too, since websites need to
          inform visitors.
        </p>
        <p>
          For design, I often sketch layouts on a page, mock them up in Figma,
          and send them to the client for feedback.
        </p>
      </>
    ),
  },
  {
    icon: code,
    heading: "Coding + Development",
    text: (
      <>
        <p>
          Once all the design work has been completed, coding can be an easy
          task. It’s also important to code websites in a way that is efficient,
          mobile-friendly, and fast.
        </p>
        <p>
          For coding, I first markup the layout and content for each page using
          HTML. Pages are styled using CSS, and interactivity is made possible
          using JavaScript.
        </p>
        <p>I use HTML, CSS, JS, React, NodeJS, PHP, Wordpress, etc.</p>
      </>
    ),
  },
  {
    icon: teach,
    heading: "Mentoring + Teaching",
    text: (
      <>
        <p>
          <strong>
            <em>"Docendo discimus"</em>
          </strong>{" "}
          — The best way to learn is to teach. I find great pleasure in helping
          others find answers to their questions, especially with code. It’s
          what most motivates me to learn.
        </p>
        <p>
          I currently teach students at{" "}
          <a href="https://nucamp.co/">Nucamp Web Development Bootcamp</a>,
          where I enjoy over a 4.9/5 rating and do my best to inspire my pupils,
          and learn things from them.
        </p>
        <p>
          <a href="https://twitter.com/Julianheckerdev">
            Ask me questions on Twitter
          </a>{" "}
          about web development!
        </p>
      </>
    ),
  },
];

const icons = [
  {
    text: "Figma",
    icon: figma,
  },
  {
    text: "HTML",
    icon: html,
  },
  {
    text: "CSS",
    icon: css,
  },
  {
    text: "JS",
    icon: js,
  },
  {
    text: "Node JS",
    icon: node,
  },
  {
    text: "React JS",
    icon: react,
  },
  {
    text: "PHP",
    icon: php,
  },
  {
    text: "WordPress",
    icon: wp,
  },
  {
    text: "Shopify",
    icon: shopify,
  },
];

const Services = () => (
  <section className={s.services} id="services">
    <Container>
      <h2 className={s.heading}>But what do you even do, Julian?</h2>
      <div className={s.columns}>
        {serviceContent.map(({ heading, text, icon }) => (
          <div className={s.service} key={heading}>
            <img src={icon} alt={`${heading} icon`} />
            <h3>{heading}</h3>
            {text}
          </div>
        ))}
      </div>
      <div className={s.icons}>
        {icons.map(({ icon, text }) => (
          <img className={s.icon} src={icon} alt={`${text}`} key={text} />
        ))}
      </div>
    </Container>
  </section>
);

export default Services;
