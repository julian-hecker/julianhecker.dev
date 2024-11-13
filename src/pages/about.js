import React from "react";

import { Layout, Cover, Article } from "../layouts";

function About() {
  return (
    <Layout>
      <Cover title="About Me" desc="Learn my background and interests" />
      <Article
        title="Who is Julian?"
        style={{ fontSize: "1.1", lineHeight: "1.7" }}
      >
        <p>
          I'm Julian! I enjoy technology, solving problems, the outdoors and big
          adventures.
        </p>
        <p>
          I started the path towards software on a very different road. In high
          school I decided I wanted to pursue a career in business, thinking
          it's the best way to reach personal freedom. When I started to make my
          own pet sitting business, I realized a business without a website
          basically doesn't exist -- so I created my own, and I was hooked.
        </p>
        <p>
          I spent the next few years teaching myself HTML, CSS, Programming, and
          JavaScript in-depth, and enrolled in Farmingdale State College for the
          Computer Programming major, expecting graduation at the end of Spring
          2021. I regularly helped teach my colleagues web development concepts
          and lead groups into doing hackathon projects. We'd even won some
          prizes!
        </p>
        <p>
          In the past, I've worked as an instructor for Nucamp Coding Bootcamp
          where I would teach full stack development to students of all ages,
          Suffolk County Web Masters where I made updates to 30+ client websites
          using diverse tech stacks, Railinc where I developed a new application
          for companies to track their railroad shipments.
        </p>
        <p>
          My latest experience at LexisNexis had me migrating legacy
          technologies into a new tech stack. I helped bring forth Lexis+AI, the
          "hallucination-proof" legal chat assistant.
        </p>
        <p>
          Outside of code, you'll probably find me hiking in nature with my wife
          or snuggling with my two cats, Simba and Oliver.
        </p>
      </Article>
      {/* links to blog articles */}
    </Layout>
  );
}

export default About;
