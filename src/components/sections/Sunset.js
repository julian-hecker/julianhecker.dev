import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import s from "./Sunset.module.css";
import CTA from "../CTA";

import { mountain1, mountain2, mountain3, mountain4 } from "../../images";

const Sunset = () => (
  <section className={s.sunset} id="sunset">
    <ParallaxProvider>
      <div className={s.background}>
        <div className={s.sky}>
          <div className={s.sun}></div>
        </div>
        <Parallax className={s.mountain} y={[-25, -75]}>
          <img src={mountain1} alt="" />
          <div
            style={{
              backgroundColor: "#445566",
              height: "100vh",
              position: "absolute",
              top: "99%",
              width: "100%",
            }}
          ></div>
        </Parallax>
        <Parallax className={s.mountain} y={[75, -150]}>
          <img src={mountain2} alt="" />
          <div
            style={{
              backgroundColor: "#334455",
              height: "100vh",
              position: "absolute",
              top: "99%",
              width: "100%",
            }}
          ></div>
        </Parallax>
        <Parallax className={s.mountain} y={[150, -300]}>
          <img src={mountain3} alt="" />
          <div
            style={{
              backgroundColor: "#223344",
              height: "100vh",
              position: "absolute",
              top: "99%",
              width: "100%",
            }}
          ></div>
        </Parallax>
        <Parallax
          className={s.mountain}
          style={{ position: "relative" }}
          y={[300, -1000]}
        >
          <img src={mountain4} alt="" />
          <div
            style={{
              backgroundColor: "#112233",
              height: "100vh",
              position: "absolute",
              top: "99%",
              width: "100%",
            }}
          ></div>
        </Parallax>
      </div>
    </ParallaxProvider>
    <div className={s.content}>
      <h1>
        Full Stack Developer
        <br />
        and Coding Mentor,
        <br />
        <strong>Julian Hecker</strong>
      </h1>
      <CTA bg="#fff" color="#5200ff" href="/#projects">
        View Projects
      </CTA>
      <CTA bg="#5200ff" color="#fff" href="/about">
        About me
      </CTA>
    </div>
  </section>
);

export default Sunset;
