import { Link } from 'gatsby';
import React from 'react';

import s from './ProjectCard.module.scss';

function ProjectCard({ image, title, desc, buttons }) {
    return (
        <div className={s.projectCard}>
            <div className={s.imgContainer}>
                <img src={image} alt={`${title} thumbnail`} />
            </div>
            <div className={s.content}>
                <h3>{title}</h3>
                <p>{desc}</p>
                {buttons
                    ? buttons.map((button) => (
                          <>
                              {button.href[0] === '/' ? (
                                  <Link to={button.href}>
                                      {button.icon ? (
                                          <img
                                              src={button.icon}
                                              alt={`${button.text} icon`}
                                          />
                                      ) : null}
                                      {button.text}
                                  </Link>
                              ) : (
                                  <a href={button.href}>
                                      {button.icon ? (
                                          <img
                                              src={button.icon}
                                              alt={`${button.text} icon`}
                                          />
                                      ) : null}
                                      {button.text}
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
