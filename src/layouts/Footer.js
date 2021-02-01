import React from 'react';
import { Link } from 'gatsby';

import s from './Footer.module.scss';
import Container from './Container';

import githubIcon from '../assets/icons/github.svg';
import devpostIcon from '../assets/icons/devpost.svg';
import twitterIcon from '../assets/icons/twitter.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';

const footerLinks = [
    {
        category: 'About',
        links: [
            {
                text: 'Julian Hecker',
                href: '/about',
                desc:
                    'Hi, I’m a full-stack web developer, self-teaching since 2017. I’m a recent graduate of Farmingdale State College with a BS in Computer Systems, and love to create optimized and attractive sites',
            },
        ],
    },
    {
        category: 'Links',
        links: [
            {
                text: 'Home',
                href: '/',
                desc: 'Back to the homepage',
            },
            {
                text: 'About',
                href: '/about',
                desc: 'More about Julian Hecker',
            },
            {
                text: 'Portfolio',
                href: '/projects',
                desc: 'View my projects',
            },
            {
                text: 'Blog',
                href: '/blog',
                desc: 'My articles about web development',
            },
            {
                text: 'Contact',
                href: '/contact',
                desc: 'Send me a message',
            },
            {
                text: 'Resume',
                href: '/resume',
                desc: 'View my work history',
                target: '_blank',
            },
        ],
    },
    {
        category: 'Socials',
        links: [
            {
                text: 'Github',
                href: 'https://github.com/julian-hecker',
                desc: 'Check out my progress in the world of code',
                target: '_blank',
                icon: githubIcon,
            },
            {
                text: 'Twitter',
                href: 'https://twitter.com/Julianheckerdev',
                desc:
                    'Follow for web dev links, articles, and opinions',
                target: '_blank',
                icon: twitterIcon,
            },
            {
                text: 'LinkedIn',
                href: 'https://www.linkedin.com/in/julianheckerdev/',
                desc: 'Become a part of my big growing network',
                target: '_blank',
                icon: linkedinIcon,
            },
            {
                text: 'Devpost',
                href: 'https://devpost.com/julian-hecker',
                desc: 'View my projects for hackathons and events',
                target: '_blank',
                icon: devpostIcon,
            },
        ],
    },
];

const Footer = () => (
    <footer className={s.footer}>
        <Container>
            <div className={s.column}>
                {footerLinks.map((category) => (
                    <nav className={s.category}>
                        <h3 className={s.categoryTitle}>
                            {category.category}
                        </h3>
                        <ul>
                            {category.links.map((link) => (
                                <li>
                                    {!link.target ? (
                                        <Link
                                            to={link.href}
                                            className={s.link}
                                        >
                                            {link.text}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className={s.link}
                                            target={link.target}
                                            rel="noreferrer"
                                            noopener
                                        >
                                            {link.icon ? (
                                                <img
                                                    className={
                                                        s.linkIcon
                                                    }
                                                    src={link.icon}
                                                    alt={`${link.text} icon`}
                                                />
                                            ) : (
                                                ''
                                            )}
                                            {link.text}
                                        </a>
                                    )}
                                    <p className={s.linkDesc}>
                                        {link.desc}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </nav>
                ))}
            </div>
            <div className={s.copyright}>
                Made with ♡ by Julian Hecker — Copyright 2019 - {new Date().getFullYear()}</div>
        </Container>
    </footer>
);

export default Footer;
