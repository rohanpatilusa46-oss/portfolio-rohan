"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-black/50 backdrop-blur-md border-b border-white/10">
      
      {/* LEFT: NAME */}
      <div className="text-white font-semibold text-lg">
        Rohan Patil
      </div>

      {/* RIGHT: MENU */}
      <div className="flex gap-6 text-sm text-white/70">
        
        <Link href="/" className="hover:text-white transition">
          Home
        </Link>

        <Link href="/#projects" className="hover:text-white transition">
        Projects
        </Link>

        <Link href="/#experience" className="hover:text-white transition">
        Experience
        </Link>

        <Link href="/system-design" className="hover:text-white transition">
          System Design
        </Link>

        {/* <Link href="/resume" className="hover:text-white transition">
          Resume
        </Link> */}
        <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
        >
        Resume
        </a>

      </div>
    </div>
  );
}