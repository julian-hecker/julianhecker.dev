import React from 'react';

import s from './Article.module.scss';
import Container from './Container';

function Article({ title, children }) {
    return (
        <article className={s.article}>
            <Container>
                <h2 className={s.title}>{title}</h2>
                {children}
            </Container>
        </article>
    );
}

export default Article;
