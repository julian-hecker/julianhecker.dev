import React from 'react';
import Cover from '../layouts/Cover';

import Layout from '../layouts/Layout';

function Blog() {
    return (
        <Layout>
            <Cover
                title="Blog Articles"
                desc="Read my articles about web development, software engineering, technology, and more."
            />
        </Layout>
    );
}

export default Blog;
