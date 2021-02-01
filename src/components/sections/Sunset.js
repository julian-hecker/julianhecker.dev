import React from 'react';
import Container from '../../layouts/Container';

import s from './Sunset.module.scss';

const Sunset = () => (
    <section className={s.sunset}>
        <div className={s.background}>
            <div className={s.sky}>
                <div className={s.sun}></div>
            </div>
            <img
                className={s.mountain}
                src={require('../../assets/mountain-1.svg')}
                alt=""
            />
            <img
                className={s.mountain}
                src={require('../../assets/mountain-2.svg')}
                alt=""
            />
            <img
                className={s.mountain}
                src={require('../../assets/mountain-3.svg')}
                alt=""
            />
            <img
                className={s.mountain}
                src={require('../../assets/mountain-4.svg')}
                alt=""
            />
        </div>
        <Container>
            <div className={s.content}>
                <h1>
                    Full Stack Developer
                    <br />
                    and Coding Mentor,
                    <br />
                    <strong>Julian Hecker</strong>
                </h1>
            </div>
        </Container>
    </section>
);

export default Sunset;
