import React from 'react';

import Layout from '../layouts/Layout';
import Intro from '../components/sections/Intro';
import Services from '../components/sections/Services';
import Projects from '../components/sections/Projects';

function Home() {
    return (
        <Layout>
            <Intro />
            <Services />
            <Projects />
        </Layout>
    );
}

export default Home;
