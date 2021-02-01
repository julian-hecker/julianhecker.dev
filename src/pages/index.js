import React from 'react';

import Layout from '../layouts/Layout';
import Sunset from '../components/sections/Sunset';
import Intro from '../components/sections/Intro';
import Services from '../components/sections/Services';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

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
