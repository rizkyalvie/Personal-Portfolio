import React from "react";

import { LuGraduationCap } from "react-icons/lu"
import { CgWorkAlt } from "react-icons/cg"

export const links = [
    {
        name: "Home",
        hash: "#home"
    },
    {
        name: "About",
        hash: "#about"
    },
    {
        name: "Projects",
        hash: "#projects"
    },
    {
        name: "Skills",
        hash: "#skills"
    },
    {
        name: "Experience",
        hash: "#experience"
    },
    {
        name: "Contact",
        hash: "#contact"
    },
] as const;

export const skillsData = [
    {
        name: "HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
        name: "CSS",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        name: "TypeScript",
        url: "hhttps://www.typescriptlang.org/docs/"
    },
    {
        name: "React",
        url: "https://react.dev"
    },
    {
        name: "Next.js",
        url: "https://nextjs.org/docs"
    },
    {
        name: "Node.js",
        url: "https://nodejs.org/en/about"
    },
    {
        name: "Git",
        url: "https://git-scm.com"
    },
    {
        name: "Tailwind",
        url: "https://tailwindcss.com"
    },
    {
        name: "Prisma",
        url: "https://www.prisma.io"
    },
    {
        name: "PostgreSQL",
        url: "https://www.postgresql.org"
    },
    {
        name: "TanStack",
        url: "https://tanstack.com/query/v3/"
    },
    {
        name: "Storybook",
        url: "https://storybook.js.org"
    },
    {
        name: "Framer Motion",
        url: "https://www.framer.com/motion/"
    },
    {
        name: "Adobe Photoshop",
        url: "https://www.adobe.com/id_en/products/photoshop.html"
    },
    {
        name: "Adobe Illustrator",
        url: "https://www.adobe.com/products/illustrator.html"
    },
] as const;

export const experiencesData = [
    {
        title: "Front End Developer",
        location: "Jakarta, Indonesia",
        description: "I worked as a front-end developer for 1 year at PT Zahir Internasional",
        icon: React.createElement(CgWorkAlt),
        date: "2022 - 2023"
    },
    {
        title: "Graduated Bootcamp",
        location: "Tangerang, Indonesia",
        description: "I graduated after 3 months of studying. I immediately found a job as a front-end developer",
        icon: React.createElement(LuGraduationCap),
        date: "2022"
    },
] as const;