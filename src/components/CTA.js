import React from 'react';

import s from './CTA.module.scss';

const CTA = ({ children, href, bg, color, target }) => (
    <a
        className={s.cta}
        style={{
            backgroundColor: bg ? bg : 'white',
            color: color ? color : 'black',
        }}
        href={href}
        target={target ? target : '_self'}
    >
        {children}
    </a>
);

export default CTA;
