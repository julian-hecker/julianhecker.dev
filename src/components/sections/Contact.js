import React, { useState } from 'react';
import Container from '../../layouts/Container';

import s from './Contact.module.scss';

function Contact() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: { name, message, email },
        })
            .then(() => alert('success'))
            .catch((err) => alert(err));

        e.preventDefault();
    };
    return (
        <section className={s.contact}>
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
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                            />
                            <label htmlFor="messageInput">
                                What is your request?
                            </label>
                            <textarea
                                name="message"
                                id="messageInput"
                                placeholder="I seek the Holy Grail!"
                                required
                                value={message}
                                onChange={(e) =>
                                    setMessage(e.target.value)
                                }
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
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
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
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Contact;
