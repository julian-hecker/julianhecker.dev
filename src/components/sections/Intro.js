import React from "react";

import Container from "../../layouts/Container";
import CTA from "../CTA";

import s from "./Intro.module.css";

function Intro() {
  return (
    <section className={s.intro} id="intro">
      <Container>
        <h2>It's great to meet you!</h2>
        <p>
          I've been working in tech for the past half decade, but teaching
          myself a lot longer than that. I have used all kinds of tools to make
          websites and applications and have won several hackathons.
        </p>
        <CTA href="/about" bg="#5200ff" color="#ffffff">
          Get to know me more!
        </CTA>
        <CTA href="/resume" target="_blank" bg="#ffffff" color="#5200ff">
          View my resume
        </CTA>
      </Container>
    </section>
  );
}

export default Intro;
