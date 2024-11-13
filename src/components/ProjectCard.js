import { Link } from "gatsby";
import React from "react";

import s from "./ProjectCard.module.css";

function ProjectCard({ image, title, desc, buttons }) {
  return (
    <div className={s.projectCard}>
      <div className={s.imgContainer}>
        <img src={image} alt={`${title} thumbnail`} />
      </div>
      <div className={s.content}>
        <h3>{title}</h3>
        {desc}
        {buttons
          ? buttons.map(({ href, icon, text }) => (
              <>
                {href[0] === "/" ? (
                  <Link to={href}>
                    {icon ? <img src={icon} alt={`${text} icon`} /> : null}
                    {text}
                  </Link>
                ) : (
                  <a href={href}>
                    {icon ? <img src={icon} alt={`${text} icon`} /> : null}
                    {text}
                  </a>
                )}
              </>
            ))
          : null}
      </div>
    </div>
  );
}

export default ProjectCard;
