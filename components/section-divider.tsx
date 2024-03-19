'use client'

import React from 'react'

import { motion } from 'framer-motion'

//Currenty a useless component because I don't really like it but I will keep it incase I need it later
function SectionDivider() {
  return (
    <motion.div 
        className="bg-gray-300 my-14 h-16 w-1 rounded-full hidden sm:block"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay:0.12 }}
    >
    </motion.div>
  )
}

export default SectionDivider