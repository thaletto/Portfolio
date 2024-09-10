'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { SiBuymeacoffee, SiGithubsponsors } from "react-icons/si"
import { FaHandHoldingHeart } from "react-icons/fa";

export default function SupportWidget() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`${isExpanded ? 'rounded-lg scale-100 bg-charcoal' : 'rounded-full scale-100 bg-customGreen'} shadow-lg overflow-hidden transition-transform duration-2000 ease-in-out`}>
        <Button
          size="icon"
          className={`w-12 h-12 p-0 ${isExpanded ? 'bg-charcoal' : 'bg-customGreen'}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <FaHandHoldingHeart className={`h-6 w-6 ${isExpanded ? 'text-customGreen' : 'text-charcoal'}`} />
        </Button>
        
        <div className={`p-4 ${isExpanded ? 'block' : 'hidden'}`}>
          <h3 className="font-semibold mb-2">Support My Work</h3>
          <div className="space-y-2">
            <a
              href="https://github.com/sponsors/thaletto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#EA4AAA] hover:text-[#C93D8D] transition-colors"
            >
              <SiGithubsponsors className="h-5 w-5" />
              <span>GitHub Sponsors</span>
            </a>
            <a
              href="https://www.buymeacoffee.com/thaletto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#FFDD00] hover:text-[#E6C300] transition-colors"
            >
              <SiBuymeacoffee className="h-5 w-5" />
              <span>Buy Me a Coffee</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}