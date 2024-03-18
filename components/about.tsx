'use client'

import React from "react";
import SectionHeading from "./section-heading";

import { motion, useScroll } from "framer-motion"
import { useRef } from "react";

function About() {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.31 1']
    })
  return (
    <motion.section 
        ref={ref} 
        className="mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
        style={{
            scale: scrollYProgress,
            opacity: scrollYProgress
        }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a web programming enthusiast; I graduated vocational high school with a <span className="font-medium">Multimedia School Major</span>. The first
        time I <span className="italic">dip my toes</span> programming world was
        back when I was 13 years old, I got introduced to HTML and PHP by my
        friend. I decided to pursue my passion for web programming 2 years ago,
        I enrolled in a coding bootcamp provided by{" "}
        <a href="https://dumbways.id" target="_blank" className="font-bold">
          Dumbways.id
        </a>{" "}
        and learned <span className="font-bold">Fullstack web development</span>
        . My favorite part of programming is the problem-solving part, I love
        the feeling of <span className="italic">diving</span> and figuring out a
        solution to solve a problem. My core stack is{" "}
        <span className="font-bold">
          React, Next.js, Node.js and PostgreSQL
        </span>
        , I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies and I am currently looking for a{" "}
        <span className="font-bold">full-time position</span> as a Frontend
        Developer.
      </p>
      <p>
        My activities other than coding are playing video games, watching
        movies, reading books, playing guitar and venture out to enjoy nature
        (mostly hiking). I also enjoy{" "}
        <span className="font-bold">learning new things</span>, I am currently{" "}
        <span className="font-bold">learning psychology and philosophy</span>.
      </p>
    </motion.section>
  );
}

export default About;
