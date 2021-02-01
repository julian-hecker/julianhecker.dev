import React from 'react';

import {Layout} from '../layouts/';
import {
    Sunset,
    Intro,
    Services,
    Projects,
    Contact,
} from '../components/sections';

function Home() {
    return (
        <Layout>
            <Sunset />
            <Intro />
            <Services />
            <Projects />
            <Contact />
        </Layout>
    );
}

export default Home;
