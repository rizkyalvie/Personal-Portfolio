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


function Experience() {

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
                background: '#f3f4f6',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign:'left',
                padding: '1.5rem 2rem',
              }}
              className="mx-3"
              contentArrowStyle={{
                borderRight: '0.4rem solid #9ca3af',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: 'white',
                transform: 'scale(0.8)',
                fontSize: '2rem'
              }}
              key={index}
              visible
            >
              <h3
                className="font-semibold capitalize"
              >{item.title}</h3>
              <p
                className="font-normal !mt-0"
              >{item.location}</p>
              <p
                className="!font-normal !mt-1 text-gray-700"
              >{item.description}</p>
            </VerticalTimelineElement>
        )
        )}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
