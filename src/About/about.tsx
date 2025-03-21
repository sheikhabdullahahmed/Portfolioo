import React, { useEffect, useState } from "react";
import about from "../aboutimage/image 2.jpg";
import { Skills } from "../Components/Skill/Skill"; 


export const About: React.FC = () => {

    const [age, setAge] = useState<number>(20); 

  useEffect(() => {
    setAge(
      Math.floor((new Date().getTime() - new Date("2004-12-5").getTime()) / 3.15576e10)
    );
  }, []);

  
  return (
    <section id="about" className="section about">
      <div className="section-title">
        <h2>
          <span>about</span> me
        </h2>
        <div className="underline"></div>
      </div>

      <div className="section-center about-center">
        {/* about-img */}
        <article>
          <div className="about-img">
            <img
              src={about}
              alt="Sheikh Abdullah"
              className="about-image"
              loading="lazy"
            />
          </div>
        </article>

        <article className="about-info">
          <p>
            {/* Text Content */}
            I'm <strong>Sheikh Abdullah</strong>, a <span>{age}</span> year old
            <strong> Mern Stack Developer</strong> with 1+ years of experience.
            I work with Javascript and its endless list of frameworks, primarily
            with <strong>React.js</strong>, <strong>Next.js</strong>, <br />
            <br />
            I enjoy turning ideas into reality through clean code and modern
            UI/UX principles. Whether it's crafting interactive web apps or
            optimizing performance, I always strive for the best user experience.
            <br />
            <br />
            When I'm not coding, I enjoy binge-watching pop culture, playing
            guitar, and sketching.
          </p>

          {/* Stack */}
          <Skills />
        </article>
      </div>
    </section>
  );
};
