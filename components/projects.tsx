"use client";

import React from "react";
import SectionHeading from "./section-heading";

import { useSectionInView, useScrollAnimation } from "@/lib/hooks";
import { motion, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";

import { BsBoxArrowInUpRight } from "react-icons/bs";

import Image from "next/image";

function Projects() {

  const { ref } = useSectionInView('Projects', 0.5)

  return (
    <motion.section
      className="mt-28 max-w-[45rem] text-center scroll-mt-36 sm:scroll-mt-28"
      id="projects"
      ref={ref}
    >
      <SectionHeading>Projects</SectionHeading>
      {projectsData.map((items, index) => (
        <React.Fragment key={index}>
          <Project {...items} />
        </React.Fragment>
      ))}
    </motion.section>
  );
}

type ProjectData = (typeof projectsData)[number];

function Project({
  title,
  description,
  tags,
  imageUrl,
  status,
  projectUrl,
}: ProjectData) {

  const { animationRef, scrollYProgress } = useScrollAnimation('0.5 1')
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.section 
              className="group relative bg-gray-100 max-w-[35rem] 
                        border border-black/5 rounded-lg overflow-hidden pr-8 
                        sm:h-[19rem] mb-3 sm:mb-8 last:mb-0 hover:bg-gray-200
                        dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
              ref={animationRef}
              style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
    >
      <div
        className=" py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col sm:mt-auto h-full group-odd:ml-[18rem]"
      >
        <a href={projectUrl} target="_blank"><h3 className="text-lg font-semibold text-left flex gap-x-2">{title} <BsBoxArrowInUpRight /></h3></a>
        <p className="mt-2 leading-relaxed text-gray-700 text-left dark:text-white/70">{description}</p>
        <p className="mt-2 leading-relaxed text-gray-700 text-left dark:text-white/70"><span className="font-semibold">Status</span>: {status}</p>
        <ul className="flex flex-wrap mt-4 gap-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt="Projects I worked on"
        quality="95"
        className="absolute top-12 -right-56 w-[32.25rem] rounded-t-lg shadow-2xl
                    transition-all
                    group-odd:right-0 
                    group-odd:-left-56

                    group-odd:group-hover:translate-x-3
                    group-odd:group-hover:translate-y-3
                    group-odd:group-hover:rotate-6
                     
                    group-hover:scale-[1.04]
                    group-hover:-translate-x-3
                    group-hover:translate-y-3
                    group-hover:-rotate-6"
      />
    </motion.section>
  );
}

export default Projects;
