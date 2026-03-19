"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleScroll = (id: string) => {
    router.push("/");

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-black/50 backdrop-blur-md border-b border-white/10">

      {/* LOGO / NAME */}
      <button
        onClick={() => {
          if (window.location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            router.push("/");
          }
        }}
        className="text-white font-semibold text-lg hover:opacity-80 transition"
      >
        Rohan Patil
      </button>

      {/* NAV LINKS */}
      <div className="flex gap-6 text-sm text-white/70 items-center">

        {/* HOME */}
        <button
          onClick={() => {
            if (window.location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              router.push("/");
            }
          }}
          className="hover:text-white transition"
        >
          Home
        </button>

        {/* PROJECTS */}
        <button
          onClick={() => handleScroll("projects")}
          className="hover:text-white transition"
        >
          Projects
        </button>

        {/* EXPERIENCE */}
        <button
          onClick={() => handleScroll("experience")}
          className="hover:text-white transition"
        >
          Experience
        </button>

        {/* 🔥 SYSTEM DESIGN (TEMP HIDDEN) */}
        {/*
        <button
          onClick={() => router.push("/system-design")}
          className="hover:text-white transition"
        >
          System Design
        </button>
        */}
        <button
          onClick={() => handleScroll("education")}
          className="hover:text-white transition"
        >
          Education
        </button>

        {/* CONTACT */}
        <button
          onClick={() => handleScroll("contact")}
          className="hover:text-white transition"
        >
          Contact
        </button>

          {/* RESUME */}
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