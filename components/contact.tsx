"use client"

import React from 'react'

import SectionHeading from './section-heading'

import { useSectionInView } from '@/lib/hooks'
import { useScrollAnimation } from '@/lib/hooks'
import { sendEmail } from '@/actions/send-email'

import SubmitBtn from './submit-btn'

import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

function Contact() {

    const { ref } = useSectionInView('Contact', 0.5)
    const { animationRef, scrollYProgress } = useScrollAnimation('0.5 1')

  return (
    <motion.section 
        id="contact"
        ref={ref}
    >
        <motion.div
        ref={animationRef}
        className="text-center mt-28 mb-28 max-sm:mb-20 w-[min-(100%, 38rem)]"
            style={{
                scale: scrollYProgress,
                opacity: scrollYProgress
            }}
        >
        <SectionHeading>Contact Me</SectionHeading>
        <p
            className="text-gray-700 -mt-6 dark:text-gray-200"
        >Please contact me directly at <a className="underline" href="mailto:alvienuryahya@gmail.com">alvienuryahya@gmail.com</a> or down below</p>
        
        <form 
            action={async (formData) => {
                const { data, error } = await sendEmail(formData)

                if (error) {
                    toast.error(error)
                    return
                }

                toast.success("Email sent successfully")
            }}
            className="mt-10 flex flex-col"
        >
            <input 
                type='email'
                className="h-14 px-4 rounded-lg borderBlack"
                placeholder="Your E-mail"
                maxLength={500}
                name="email"
                required
            />
            <textarea
                className="h-52 p-4 my-3 rounded-lg borderBlack"
                placeholder="Your message"
                maxLength={5000}
                name="message"
                required
            />
            <SubmitBtn />
        </form>
        </motion.div>
        </motion.section>
  )
}

export default Contact