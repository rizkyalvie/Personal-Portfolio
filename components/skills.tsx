"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

function Skills() {

    //This is responsible for the moving effect behind every button text in navbar, go to the path file to see more
    const { ref } = useSectionInView('Skills', 0.8)

    //This s a declaration to contain style properties and values for a one-time animation when the skills pop up when appearing in view
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index
            }
        })
    }

  return (
    <section 
        id='skills'
        className="mt-28 max-w-[45rem] text-center scroll-mt-28 max-sm:scroll-mt-28"
        ref={ref}
    >
        <SectionHeading>Skills</SectionHeading>
        <ul className="flex flex-wrap items-center justify-center gap-2 text-lg text-gray-500">
            {skillsData.map((skills, index) => (
                <a 
                    href={skills.url} 
                    target="_blank"
                    key={index}
                >
                    <motion.li 
                    className="bg-white borderBlack py-3 px-5 rounded-xl dark:text-gray-950"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}
                    custom={index}
                >{skills.name}</motion.li>
                </a>
            ))}
        </ul>
    </section>
  )
}

export default Skills