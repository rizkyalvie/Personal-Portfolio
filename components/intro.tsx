"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin, BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";

function Intro() {
  return (
    <section 
      className="mb-28 max-w-[45rem] text-center sm:mb-0 scroll-mt-28"
      id='home'
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://media.licdn.com/dms/image/D5603AQF1uvvXnzmv-Q/profile-displayphoto-shrink_200_200/0/1710505187646?e=1715817600&v=beta&t=3UTsqvRLbrQULAXZXK9SN_oxF_fgKZ1eooWsvC896YY"
              alt="Test Image"
              width="192"
              height="193"
              quality="95"
              priority={true}
              className="h-36 w-36 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-7 px-4 text-2xl font-medium !Leading-[1.5] sm:text-4xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span className="font-bold">Hello! I am Rizky Alvie</span>.{" I am a "}
        <span className="font-bold">Frontend Developer</span>.
        {" I enjoy building "}
        <span className="italic">sites & apps</span>.
        {" I also enjoy tinkering with Front End "}
        <span className="italic">frameworks & libraries</span>.{" My focus is "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div 
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
            delay: 0.1
        }}
      >
        <Link
          href="#contact"
          className="group bg-slate-800 py-3 px-7 rounded-full flex justify-center items-center gap-2 text-white focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition"
        >
          Contact me here <BsArrowRight className="opacity-60 group-hover:translate-x-1"/>
        </Link>
        <a 
            href="/CV_Ananda_Rizky_Alvie_Nuryahya.pdf"
            className="group bg-white py-3 px-7 rounded-full flex justify-center items-center gap-2 border border-black/10 focus:scale-105 hover:scale-105 hover:bg-zinc-100 active:scale-100 transition"
            download
        >
            Download CV <HiDownload className="opacity-60 group-hover:animate-bounce"/>
        </a>
        <div className="flex justify-center items-center gap-2">
          <a
            href="https://www.linkedin.com/in/rizkyalvie"
            target="_blank"
            className="bg-white p-4 rounded-full border border-black/10 text-gray-700 focus:scale-105 hover:scale-105 active:scale-100 hover:text-gray-950"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/rizkyalvie"
            target="_blank"
            className="bg-white p-3.5 rounded-full border border-black/10 text-gray-700 text-[1.35rem] focus:scale-105 hover:scale-105 active:scale-100 hover:text-gray-950"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Intro;
