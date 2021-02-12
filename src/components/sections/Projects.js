import React from 'react';

import s from './Projects.module.scss';
import Container from '../../layouts/Container';
import ProjectCard from '../ProjectCard';

import { link, github, info } from '../../assets/icons';
import { lance, covid, paxpaws, safe } from '../../images';

const projects = [
    {
        image: lance,
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
                href:
                    'https://github.com/julian-hecker/visionary-ceo',
                icon: github,
                text: 'Repo',
            },
            // {
            //     href: '/',
            //     icon: info,
            //     text: 'More',
            // },
        ],
    },
    {
        image: covid,
        title: 'Corona Times',
        desc: (
            <>
                <p>
                    A project for Stony Brook University’s CEWIT
                    Hackathon during February 2020.
                </p>
                <p>
                    I created the backend API that serves live data
                    scraped from reporting sites using PHP, and the
                    front end and map with React. The whole project
                    took about 24 hours in one sitting.
                </p>
            </>
        ),
        buttons: [
            {
                href: 'https://corona-times.netlify.app/',
                icon: link,
                text: 'Demo',
            },
            {
                href: 'https://github.com/julian-hecker/corona-times',
                icon: github,
                text: 'Repo',
            },
            // {
            //     href: '/',
            //     icon: info,
            //     text: 'More',
            // },
        ],
    },
    {
        image: paxpaws,
        title: 'Pax Paws',
        desc: (
            <>
                <p>
                    Website for a local pet sitting company. Features
                    a video of the client working with the pet she has
                    been taking care of. Continues to generate
                    qualified leads.
                </p>
                <p>
                    Site made from scratch designed with Figma and
                    coded with HTML, CSS, JavaScript and hosted on
                    Netlify.
                </p>
            </>
        ),
        buttons: [
            {
                href: 'https://paxpawspets.com',
                icon: link,
                text: 'Demo',
            },
            {
                href: 'https://github.com/julian-hecker/PaxPaws',
                icon: github,
                text: 'Repo',
            },
            // {
            //     href: '/',
            //     icon: info,
            //     text: 'More',
            // },
        ],
    },
    {
        image: safe,
        title: 'Safe Distance',
        desc: (
            <>
                <p>
                    Winning project for the Hack-HR Hackathon during
                    April 2020. Proof of concept for a system which
                    tracks the number of people in a set geofenced
                    area and helps prevent from exceeding a certain
                    amount to aid in Social Distancing.
                </p>
                <p>
                    I created the front end application frontend using
                    React.
                </p>
            </>
        ),
        buttons: [
            {
                href: 'https://hack-hr.herokuapp.com/',
                icon: link,
                text: 'Demo',
            },
            {
                href: 'https://github.com/mnai01/HackHR-Webapp',
                icon: github,
                text: 'Repo',
            },
            {
                href: 'https://devpost.com/software/safe-distance',
                icon: info,
                text: 'More',
            },
        ],
    },
];

const Projects = () => (
    <section className={s.projects} id="projects">
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
            <p>
                Check out my other projects on my{' '}
                <a
                    href="https://github.com/julian-hecker"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>{' '}
                or{' '}
                <a
                    href="https://devpost.com/julian-hecker"
                    target="_blank"
                    rel="noreferrer"
                >
                    Devpost
                </a>
                !
            </p>
        </Container>
    </section>
);

export default Projects;
