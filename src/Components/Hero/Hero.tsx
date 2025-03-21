import React from "react";
import heroImg from "../../Images/hero/hero-img.svg";
import { FaCode, FaEnvelope } from "react-icons/fa";
import { useAppContext } from "../../Context";

export const Hero = () => {
  const { smoothScroll } = useAppContext();

  return (
    <header id="home">
      <div className="banner">
        <div className="banner-container section-center">
          {/* hero-info */}
          <article className="hero-info">
            <h1 id="my-name">
              hey,<span> i'm Abdullah </span>
            </h1>
            <p>
              I am a skilled Frontend Developer proficient in HTML, CSS,
              JavaScript, and React, focused on creating responsive and visually
              appealing websites. I strive to deliver seamless user experiences
              with clean,
            </p>
            <div className="hero-btn-container">
              <a
                href="#projects"
                className="btn hero-btn"
                onClick={(e) => smoothScroll(e)}
                title="My Latest Works"
              >
                projects <FaCode className="fa" />
              </a>
              <a
                href="mailto:abdullahsheikh456677@gmail.com"
                className="btn hero-btn"
                title="Email Me Now"
              >
                contact <FaEnvelope className="fa" />
              </a>
            </div>
          </article>

          {/* hero-image */}
          <article className="hero-img">
            <img src={heroImg} alt="Hero" className="hero-image" />
          </article>
        </div>
      </div>
    </header>
  );
};
