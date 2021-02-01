import React from 'react';

import Layout from '../layouts/Layout';
import Cover from '../layouts/Cover';
import Article from '../layouts/Article';

function About() {
    return (
        <Layout>
            <Cover
                title="About Me"
                desc="Learn my background and interests"
            />
            <Article title="Who is Julian?">
                {/* content goes in here */}
            </Article>
            {/* links to blog articles */}
        </Layout>
    );
}

export default About;
