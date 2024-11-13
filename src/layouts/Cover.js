import React from "react";
import Container from "./Container";

import s from "./Cover.module.css";

function Cover({ title, desc }) {
  return (
    <section className={s.cover}>
      <Container>
        <h1>{title}</h1>
        <p>{desc}</p>
      </Container>
    </section>
  );
}

export default Cover;
