import React, { useState } from 'react';
import Container from '../../layouts/Container';

import s from './Contact.module.scss';
import { ny } from '../../images';


const encode = (data) => {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) +
                '=' +
                encodeURIComponent(data[key]),
        )
        .join('&');
};

function Contact() {
    const [state, setState] = useState({});

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <section className={s.contact} id="contact">
            <Container>
                <h2>Want to get in touch?</h2>
                <p>
                    To ask me questions or work with me, contact me
                    with the form below!
                </p>
                <div className={s.columns}>
                    <div className={s.column}>
                        <h3>Contact Form</h3>
                        <p>
                            Halt! Any who would contact me must answer
                            my questions three.
                        </p>
                        <form
                            name="contact"
                            method="post"
                            // action="/"
                            data-netlify="true"
                            className={s.contactForm}
                            onSubmit={handleSubmit}
                        >
                            <label htmlFor="nameInput">
                                What is your name?
                            </label>
                            <input
                                name="name"
                                id="nameInput"
                                type="text"
                                placeholder="Sir Lancelot of Camelot"
                                required
                                onChange={handleChange}
                            />
                            <label htmlFor="messageInput">
                                What is your request?
                            </label>
                            <textarea
                                name="message"
                                id="messageInput"
                                placeholder="I seek the Holy Grail!"
                                required
                                onChange={handleChange}
                            ></textarea>
                            <label htmlFor="emailInput">
                                What is your electronic mail address?
                            </label>
                            <input
                                name="email"
                                id="emailInput"
                                type="email"
                                placeholder="sirlancelot@roundtable.co"
                                required
                                onChange={handleChange}
                            />
                            <input type="submit" value="Proceed" />
                        </form>
                    </div>
                    <div className={s.column}>
                        <h3>Location - Nassau County, NY</h3>
                        <p>
                            I'm currently based on Long Island in the
                            great New York State. I wouldn't mind
                            leaving though.
                        </p>
                        <img src={ny} alt="New York State"/>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Contact;
