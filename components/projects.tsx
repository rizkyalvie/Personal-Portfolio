'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion, useScroll } from "framer-motion"
import { useRef } from "react";

function Projects() {
    
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.15 1']
    })

  return (
    <motion.section
        ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 max-sm:mt-16"
        style={{
            scale: scrollYProgress,
            opacity: scrollYProgress
        }}
        id='projects'
    >
        <SectionHeading>Projects</SectionHeading>
        <p>Coming soon...</p>
    </motion.section>
  )
}

export default Projects