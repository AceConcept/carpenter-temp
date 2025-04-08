'use client';

import { useState } from 'react';

export default function CollapsibleSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pb-10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border-b border-black pb-4 flex justify-between items-center"
      >
        <span className="text-[16px] font-inter">Learn More</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          viewBox="0 0 24 24" 
          fill="none"
        >
          <path 
            d="M6 9l6 6 6-6" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-4">
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Our expert team brings your dream kitchen to life with precision and care. We specialize in custom kitchen designs that combine functionality with aesthetic appeal. From initial consultation to final installation, we ensure every detail meets your expectations.
          </p>
        </div>
      )}
    </div>
  );
} 