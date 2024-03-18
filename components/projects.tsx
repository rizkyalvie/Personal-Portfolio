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
        className="mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
        style={{
            scale: scrollYProgress,
            opacity: scrollYProgress
        }}
    >
        <SectionHeading>Projects</SectionHeading>
        <p>Coming soon...</p>
    </motion.section>
  )
}

export default Projects