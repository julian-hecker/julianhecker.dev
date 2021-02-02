import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import s from './Sunset.module.scss';
import { Container } from '../../layouts';
import CTA from '../CTA';

import {
    mountain1,
    mountain2,
    mountain3,
    mountain4
} from '../../images'

const Sunset = () => (
    <section className={s.sunset} id="sunset">
        <ParallaxProvider>
            <div className={s.background}>
                <div className={s.sky}>
                    <div className={s.sun}></div>
                </div>
                <Parallax className={s.mountain} y={[-25, -75]}>
                    <img
                        src={mountain1}
                        alt=""
                    />
                </Parallax>
                <Parallax className={s.mountain} y={[75, -150]}>
                    <img
                        src={mountain2}
                        alt=""
                    />
                </Parallax>
                <Parallax className={s.mountain} y={[150, -300]}>
                    <img
                        src={mountain3}
                        alt=""
                    />
                </Parallax>
                <Parallax
                    className={s.mountain}
                    style={{ position: 'relative' }}
                    y={[300, -1000]}
                >
                    <img
                        src={mountain4}
                        alt=""
                    />
                    <div
                        style={{
                            backgroundColor: '#112233',
                            height: '100vh',
                            position: 'absolute',
                            top: '99%',
                            width: '100%',
                        }}
                    ></div>
                </Parallax>
            </div>
        </ParallaxProvider>
        <div className={s.content}>
            <Container>
                <h1>
                    Full Stack Developer
                    <br />
                    and Coding Mentor,
                    <br />
                    <strong>Julian Hecker</strong>
                </h1>
                <CTA bg="#fff" color="#5200ff" href="/#projects">
                    View Projects
                </CTA>
            </Container>
        </div>
    </section>
);

export default Sunset;
