"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  MdHome,
  MdConstruction,
  MdArticle,
  MdContacts,
  MdFileDownload,
  MdChromeReaderMode
} from "react-icons/md";

export default function Navbar() {
  const currentPath = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const linkClass = "flex items-center p-2 text-xl sm:text-xl md:text-lg";
  const activeLinkClass = "bg-customGreen text-charcoal rounded-full";
  const inactiveLinkClass = "text-white";

  const url = "https://drive.google.com/file/d/1WhWB6_xdAiincAEi0xVXTQvrQ7R5yOln/view?usp=sharing";

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center w-full">
      <nav className="fixed top-2 bg-charcoal-light rounded-full shadow-custom backdrop-blur-3.4 z-50 flex flex-row justify-center space-x-8 md:space-x-8 p-4 mt-8">
        {/* Home */}
        <Link href="/" className={`${linkClass} ${currentPath === "/" ? activeLinkClass : inactiveLinkClass}`}>
          <MdHome className="md:mr-1" /> <span className="hidden md:inline">Home</span>
        </Link>

        {/* Projects */}
        <Link href="/projects" className={`${linkClass} ${currentPath === "/projects" ? activeLinkClass : inactiveLinkClass}`}>
          <MdConstruction className="md:mr-1" /> <span className="hidden md:inline">Projects</span>
        </Link>

        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`${linkClass} ${currentPath.startsWith("/resume") ? activeLinkClass : inactiveLinkClass}`}>
            <MdArticle className="md:mr-1" /> <span className="hidden md:inline">Resume</span>
          </button>
          {isDropdownOpen && (
            <div className="absolute left-1/2 top-full transform -translate-x-1/2 mt-2 bg-customGreen text-charcoal shadow-custom rounded-lg p-2">
              <Link href="https://read.cv/thaletto" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-charcoal-light hover:text-customGreen rounded-lg flex items-center">
                <MdChromeReaderMode className="mr-2"/> Resume
              </Link>
              <Link href={url} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-charcoal-light hover:text-customGreen rounded-lg flex items-center">
                <MdFileDownload className="mr-2"/> Resume
              </Link>
            </div>
          )}
        </div>

        {/* Contact */}
        <Link href="/contact" className={`${linkClass} ${currentPath === "/contact" ? activeLinkClass : inactiveLinkClass}`}>
          <MdContacts className="md:mr-1" /> <span className="hidden md:inline">Contact</span>
        </Link>
      </nav>
    </div>
  );
}
