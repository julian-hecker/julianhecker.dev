import React from 'react';
import { Link } from 'gatsby';

import s from './BlogCard.module.scss';

function BlogCard({ href, image, title, author, date, desc }) {
    return (
        <div className={s.blogCard}>
            <div className={s.imgContainer}>
                <img src={image} alt={`${title} thumbnail`} />
            </div>
            <div className={s.content}>
                <h3>{title}</h3>
                <p>
                    <em>
                        by {author}, {date}
                    </em>
                </p>
                <p>{desc}</p>
                <Link to={href}>Read More</Link>
            </div>
        </div>
    );
}

export default BlogCard;
