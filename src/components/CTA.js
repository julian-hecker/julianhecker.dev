import React from 'react';
import { Link } from 'gatsby';

import s from './CTA.module.scss';

const CTA = ({ children, href, bg, color }) => (
    <Link
        className={s.cta}
        style={{
            backgroundColor: bg,
            color: color,
        }}
        to={href}
    >
        {children}
    </Link>
);

export default CTA;
