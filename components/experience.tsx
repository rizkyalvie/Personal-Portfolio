"use client"

import React from "react";

import SectionHeading from "./section-heading";

import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useTheme } from "@/context/theme-context";


function Experience() {
    
  //Go to the designated file path to see more about these functions
  const { theme, toggleTheme } = useTheme();
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section 
      id="experience"
      className="mt-28 text-center scroll-mt-32 max-sm:scroll-mt-32"
      ref={ref}
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
            <VerticalTimelineElement
              contentStyle={{
                background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.5)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign:'left',
                padding: '1.5rem 2rem',
              }}
              className="mx-3"
              contentArrowStyle={{
                borderRight: theme === 'light' ? '0.4rem solid #9ca3af' : '0.4rem solid rgba(255, 255, 255, 0.15)',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.5)',
                transform: 'scale(0.8)',
                fontSize: '2rem'
              }}
              key={index}
              visible
            >
              <h3
                className="font-semibold capitalize dark:text-white/75"
              >{item.title}</h3>
              <p
                className="font-normal !mt-0 text-gray-950 dark:text-white/75"
              >{item.location}</p>
              <p
                className="!font-normal !mt-1 text-gray-700 dark:text-white/75"
              >{item.description}</p>
            </VerticalTimelineElement>
        )
        )}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
