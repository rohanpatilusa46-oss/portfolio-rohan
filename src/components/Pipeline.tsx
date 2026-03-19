"use client";

import { useEffect, useState } from "react";

const steps = ["Research", "Build", "Deploy", "Scale"];

export default function Pipeline() {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const fullText = steps[currentStep];

    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 60);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
        setDisplayText("");
        setCharIndex(0);
      }, 800);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentStep]);

  return (
    <div className="mt-8">
      {/* Heading */}
      <p className="text-gray-500 text-sm mb-2">
        How I build systems
      </p>

      {/* Streaming Text */}
      <div className="text-lg md:text-xl font-semibold flex items-center gap-2">
        {steps.slice(0, currentStep).map((step, i) => (
          <span key={i} className="text-gray-400">
            {step} →
          </span>
        ))}

        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {displayText}
        </span>

        <span className="animate-pulse text-gray-400">|</span>
      </div>
    </div>
  );
}