import React from 'react';

import { Layout, Cover } from '../layouts';

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
