"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      
      {/* DOT GRID */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* FLOATING GLOW */}
      <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />

    </div>
  );
}