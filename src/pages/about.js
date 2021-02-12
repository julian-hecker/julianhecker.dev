import React from 'react';

import { Layout, Cover, Article } from '../layouts';

function About() {
    return (
        <Layout>
            <Cover
                title="About Me"
                desc="Learn my background and interests"
            />
            <Article
                title="Who is Julian?"
                style={{ fontSize: '1.1', lineHeight: '1.7' }}
            >
                <p>
                    I’m Julian, an animal lover and tech addict from
                    New York!
                </p>
                <p>
                    I started the path towards software on a very
                    different road. In high school I decided I wanted
                    to pursue a career in business, thinking it’s the
                    best way to reach personal freedom. When I started
                    to make my own pet sitting business, I realized a
                    business without a website basically doesn’t exist
                    -- so I created my own, and I was hooked.
                </p>
                <p>
                    I spent the next few years teaching myself HTML,
                    CSS, Programming, and JavaScript in-depth, and
                    enrolled in Farmingdale State College for the
                    Computer Programming major, expecting graduation
                    at the end of Spring 2021. I regularly help teach
                    the other students web development concepts and
                    lead groups into doing hackathon projects.
                </p>
                <p>
                    At present, I’m working as a full-stack web
                    development instructor for Nucamp Coding Bootcamp
                    while finishing my final semester. There are few
                    feelings as good as helping others to understand
                    something truly helpful.
                </p>
                <p>
                    Outside of work and school, you’ll probably find
                    me snuggling with my cat Simba or my long-time
                    girlfriend Valeria.
                </p>
            </Article>
            {/* links to blog articles */}
        </Layout>
    );
}

export default About;
