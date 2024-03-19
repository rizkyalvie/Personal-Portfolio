import React from 'react'

function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
        <small className="mb-2 block text-xs">
            &copy; 2024 Rizky Alvie. All rights reserved.
        </small>
        <p className="mb-2 text-xs">
            <span className="font-semibold">
                About this website:{" "}
            </span>
            built with React & Next.js (App router & Server actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel Hosting.
        </p>
    </footer>
  )
}

export default Footer