import React from 'react';
import { Link } from 'gatsby';

import s from './Header.module.scss';
import Container from './Container';

const branding = {
    text: (
        <>
            ://julian
            <br />
            hecker.dev
        </>
    ),
    href: '/',
};

const headerLinks = [
    {
        text: 'About',
        href: '/about',
    },
    {
        text: 'Projects',
        href: '/projects',
    },
    {
        text: 'Blog',
        href: '/blog',
    },
    {
        text: 'Contact',
        href: '/#contact',
    },
    {
        text: 'Resume',
        href: '/resume',
        target: '_blank',
    },
];

const toggleMenu = (e) => {

}

const Header = () => (
    <header className={s.header} id="header">
        <Container>
            <Link
                to={branding.href}
                className={s.title}
                activeClassName={s.active}
            >
                {branding.text}
            </Link>
            <nav className={s.navLinks}>
                {headerLinks.map(({ href, text, target }) => (
                    <>
                        {!target ? (
                            <Link
                                to={href}
                                className={s.navLink}
                                activeClassName={s.active}
                            >
                                {text}
                            </Link>
                        ) : (
                            <a
                                href={href}
                                className={s.navLink}
                                target={target}
                            >
                                {text}
                            </a>
                        )}
                    </>
                ))}
            </nav>
            <div className={s.button} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Container>
    </header>
);

export default Header;
