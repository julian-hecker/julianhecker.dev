import React from "react";
import { Link } from "gatsby";

import s from "./Footer.module.css";
import Container from "./Container";

import { github, devpost, twitter, linkedin } from "../assets/icons";

const footerLinks = [
  {
    category: "About",
    links: [
      {
        text: "Julian Hecker",
        href: "/about",
        desc: "Hi, I'm a full-stack software engineer, self-teaching since 2017. A graduate of Farmingdale State College with a BS in Computer Systems.",
      },
    ],
  },
  {
    category: "Links",
    links: [
      {
        text: "Home",
        href: "/",
        desc: "Back to the homepage",
      },
      {
        text: "About",
        href: "/about",
        desc: "More about Julian Hecker",
      },
      {
        text: "Portfolio",
        href: "/#projects",
        desc: "View my projects",
      },
      // {
      //     text: 'Blog',
      //     href: '/blog',
      //     desc: 'My articles about web development',
      // },
      {
        text: "Contact",
        href: "/#contact",
        desc: "Send me a message",
      },
      {
        text: "Resume",
        href: "/resume",
        desc: "View my work history",
        target: "_blank",
      },
    ],
  },
  {
    category: "Socials",
    links: [
      {
        text: "Github",
        href: "https://github.com/julian-hecker",
        desc: "Check out my progress in the world of code",
        target: "_blank",
        icon: github,
      },
      {
        text: "Twitter",
        href: "https://twitter.com/Julianheckerdev",
        desc: "Follow for web dev links, articles, and opinions",
        target: "_blank",
        icon: twitter,
      },
      {
        text: "LinkedIn",
        href: "https://www.linkedin.com/in/julianheckerdev/",
        desc: "Become a part of my big growing network",
        target: "_blank",
        icon: linkedin,
      },
      {
        text: "Devpost",
        href: "https://devpost.com/julian-hecker",
        desc: "View my projects for hackathons and events",
        target: "_blank",
        icon: devpost,
      },
    ],
  },
];

const Footer = () => (
  <footer className={s.footer} id="footer">
    <Container>
      <div className={s.column}>
        {footerLinks.map(({ category, links }) => (
          <nav className={s.category} key={category}>
            <h3 className={s.categoryTitle}>{category}</h3>
            <ul>
              {links.map(({ href, text, desc, icon, target }) => (
                <li key={text}>
                  {!target ? (
                    <Link to={href} className={s.link}>
                      {text}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      className={s.link}
                      target={target}
                      rel="noreferrer"
                      noopener="true"
                    >
                      {icon ? (
                        <img
                          className={s.linkIcon}
                          src={icon}
                          alt={`${text} icon`}
                        />
                      ) : (
                        ""
                      )}
                      {text}
                    </a>
                  )}
                  <p className={s.linkDesc}>{desc}</p>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className={s.copyright}>
        Made with ♡ by Julian Hecker — Copyright 2019 -{" "}
        {new Date().getFullYear()}
      </div>
    </Container>
  </footer>
);

export default Footer;
