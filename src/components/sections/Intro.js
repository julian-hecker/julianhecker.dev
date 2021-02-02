import React from 'react';

import Container from '../../layouts/Container';
import CTA from '../CTA';

import s from './Intro.module.scss';

function Intro() {
    return (
        <section className={s.intro} id="intro">
            <Container>
                <h2>It's great to meet you!</h2>
                <p>
                    I’ve been diving deep into web technologies for
                    the past half a decade since I made my first site.
                    Since then, I have created optimized, efficient,
                    and unique websites for all kinds of folks using
                    all kinds of tools.
                </p>
                <CTA href="/about" bg="#5200ff" color="#ffffff">
                    Get to know me more!
                </CTA>
                <CTA
                    href="/resume"
                    target="_blank"
                    bg="#ffffff"
                    color="#5200ff"
                >
                    View my resume
                </CTA>
            </Container>
        </section>
    );
}

export default Intro;
