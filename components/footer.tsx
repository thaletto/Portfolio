'use client';

import { MdCopyright } from "react-icons/md";
import { SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";
import { tnw, acornLight, gtPlanarRegular } from "@/public/fonts/font";
import { useState } from "react";

export default function Footer() {
    const [ishovered, setIsHovered] = useState(false);
    return (
        <footer className={tnw.className + ' w-full flex flex-row md:mb-48 sm:mb-8 relative'}>
          <p className='ml-8 flex flex-row items-center'>
            <MdCopyright className='mb-1 mr-1' /> {new Date().getFullYear()} Laxman K R
          </p>
          <p 
            className='cursor-pointer ml-auto mr-8 hidden md:block' // Hidden on small screens, visible on md and up
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Colophon
            {ishovered && (
              <div className='absolute right-0 bg-charcoal-light p-4 flex flex-col w-auto mt-2 mr-8 rounded-lg shadow-lg'>
                <p className='flex items-center'>
                  Made using <SiNextdotjs className='mx-2 mb-2'/> and <SiTailwindcss className='ml-2 mr-1 mb-2'/>. Hosted using <SiVercel className='ml-2 mr-1 mb-2'/>.
                </p>
                <p className={acornLight.className}>Title Font: Acorn Semi Bold.</p>
                <p className={gtPlanarRegular.className}>Body Font: GT Planar Regular.</p>
              </div>
            )}
          </p>
        </footer>
    );
}