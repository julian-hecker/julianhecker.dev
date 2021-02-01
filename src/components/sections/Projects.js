import React from 'react';

import s from './Projects.module.scss';
import Container from '../../layouts/Container';
import ProjectCard from '../ProjectCard';

import { link, github, info } from '../../assets/icons';

const projects = [
    {
        image: require('../../assets/covid.png'),
        title: 'Visionary CEO',
        desc: (
            <>
                <p>
                    This site was made for Lance Smith, CEO of
                    National Property Rescue who wished to have a site
                    to feature his expertise as a Real Estate Investor
                    and his presence on Social Media platforms.
                </p>
                <p>
                    All functionality made from scratch with HTML,
                    SCSS, JavaScript and PHP.
                </p>
            </>
        ),
        buttons: [
            {
                href: 'https://visionary-ceo.netlify.app/',
                icon: link,
                text: 'Demo',
            },
            {
                href: 'https://github.com/julian-hecker',
                icon: github,
                text: 'Repo',
            },
            {
                href: '/',
                icon: info,
                text: 'More',
            },
        ],
    },
    {
        image: require('../../assets/covid.png'),
        title: 'Corona Times',
        desc: (
            <>
                <p>
                    This site was made for Lance Smith, CEO of
                    National Property Rescue who wished to have a site
                    to feature his expertise as a Real Estate Investor
                    and his presence on Social Media platforms.
                </p>
                <p>
                    All functionality made from scratch with HTML,
                    SCSS, JavaScript and PHP.
                </p>
            </>
        ),
        buttons: [
            {
                href: 'https://visionary-ceo.netlify.app/',
                icon: link,
                text: 'Demo',
            },
            {
                href: 'https://github.com/julian-hecker',
                icon: github,
                text: 'Repo',
            },
            {
                href: '/',
                icon: info,
                text: 'More',
            },
        ],
    },
    {
        image: require('../../assets/covid.png'),
        title: 'Pax Paws',
        desc: (
            <>
                <p>
                    This site was made for Lance Smith, CEO of
                    National Property Rescue who wished to have a site
                    to feature his expertise as a Real Estate Investor
                    and his presence on Social Media platforms.
                </p>
                <p>
                    All functionality made from scratch with HTML,
                    SCSS, JavaScript and PHP.
                </p>
            </>
        ),
        buttons: [
            {
                href: 'https://visionary-ceo.netlify.app/',
                icon: link,
                text: 'Demo',
            },
            {
                href: 'https://github.com/julian-hecker',
                icon: github,
                text: 'Repo',
            },
            {
                href: '/',
                icon: info,
                text: 'More',
            },
        ],
    },
    {
        image: require('../../assets/covid.png'),
        title: 'Safe Distance',
        desc: (
            <>
                <p>
                    This site was made for Lance Smith, CEO of
                    National Property Rescue who wished to have a site
                    to feature his expertise as a Real Estate Investor
                    and his presence on Social Media platforms.
                </p>
                <p>
                    All functionality made from scratch with HTML,
                    SCSS, JavaScript and PHP.
                </p>
            </>
        ),
        buttons: [
            {
                href: 'https://visionary-ceo.netlify.app/',
                icon: link,
                text: 'Demo',
            },
            {
                href: 'https://github.com/julian-hecker',
                icon: github,
                text: 'Repo',
            },
            {
                href: '/',
                icon: info,
                text: 'More',
            },
        ],
    },
];

const Projects = () => (
    <section className={s.projects}>
        <Container>
            <h2>What projects have you worked on?</h2>
            <p>
                Glad you asked! Have a look through some of my pieces.
            </p>
            <div className={s.projectGrid}>
                {projects.map(({ image, title, desc, buttons }) => (
                    <ProjectCard
                        image={image}
                        title={title}
                        desc={desc}
                        buttons={buttons}
                        key={title}
                    />
                ))}
            </div>
        </Container>
    </section>
);

export default Projects;
