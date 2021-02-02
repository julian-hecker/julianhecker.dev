import React from 'react';
import { Link } from 'gatsby';

import s from './CTA.module.scss';

const CTA = ({ children, href, bg, color, target }) => (
    <Link
        className={s.cta}
        style={{
            backgroundColor: bg ? bg : 'white',
            color: color ? color : 'black',
        }}
        to={href}
        target={target ? target : '_self'}
    >
        {children}
    </Link>
);

export default CTA;
