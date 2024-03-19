"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { useScrollAnimation } from '@/lib/hooks'
import { motion } from 'framer-motion'

function Skills() {

    const { ref } = useSectionInView('Skills', 0.8)
    // const { animationRef, scrollYProgress } = useScrollAnimation('1 1')
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
                    className="bg-white border border-black/[0.1] py-3 px-5 rounded-xl"
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