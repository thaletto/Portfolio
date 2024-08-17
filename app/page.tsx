'use client';

import { useEffect, useState } from 'react';
import { acornSemiBold, acornRegular } from "@/public/fonts/font";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience/Experience";
import Education from "@/components/Education/Education";
import Skills from "@/components/Skills";
import Certification from "@/components/Certification/Certification";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="h-full">
      {/* Title Section */}
      <div className="min-h-screen w-full flex flex-col items-center">
        <div className="absolute top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col justify-center items-center">
            <p
              className={
                acornSemiBold.className +
                " text-6xl font-bold md:text-7xl text-customGreen text-balance"
              }
            >
              Hi, I&apos;m Laxman.
            </p>
            <p
              className={
                acornRegular.className +
                " text-4xl md:text-4xl text-customGreen text-balance"
              }
            >
              A Software Developer.
            </p>
          </div>
          <AboutMe />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mx-8 mb-8 gap-6 mt-16">
        <Experience />
        <Education />
        <Skills />
        <Certification />
      </div>

      {/* Scroll Down Animation */}
      <div
        className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 ${isVisible ? '' : 'hidden'}`}
      >
        <div className="animate-scrollDown">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-customGreen"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}