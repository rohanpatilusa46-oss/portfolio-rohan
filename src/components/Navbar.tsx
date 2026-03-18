"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-semibold text-lg tracking-tight">
            <a className="hover:text-white transition duration-200"></a>
          Rohan Patil
        </h1>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#experience" className="hover:text-white transition">
            Experience
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
          <a href="/system-design" className="hover:text-white transition">
            System Design
          </a>
        </div>
      </div>
    </nav>
  );
} 