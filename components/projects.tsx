'use client'

import React from 'react'
import SectionHeading from './section-heading'

import { useSectionInView, useScrollAnimation } from '@/lib/hooks';
import { motion } from "framer-motion"

function Projects() {
    
    const { ref } = useSectionInView('Projects', 0.5)
    const { animationRef, scrollYProgress } = useScrollAnimation('1 1')

  return (
    <motion.section
        className="mt-28 max-w-[45rem] text-center scroll-mt-36 max-sm:scroll-mt-40"
        style={{
            scale: scrollYProgress,
            opacity: scrollYProgress
        }}
        id='projects'
        ref={animationRef}
    >
        <div
        ref={ref}></div>
        <SectionHeading>Projects</SectionHeading>
        <p>Coming soon...</p>
    </motion.section>
  )
}

export default Projects