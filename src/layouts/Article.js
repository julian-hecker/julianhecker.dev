import React from "react";

import s from "./Article.module.css";
import Container from "./Container";

function Article({ title, children, style }) {
  return (
    <article className={s.article} style={style}>
      <Container>
        <h2 className={s.title}>{title}</h2>
        {children}
      </Container>
    </article>
  );
}

export default Article;
