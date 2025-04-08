"use client";

import React, { useState } from 'react';
import ContactFormModal from './ContactFormModal';
import Image from 'next/image';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px]">
        <Image
          src="/images/Modern Minimalist Interior Living Space.jpeg"
          alt="Modern Minimalist Interior Living Space"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="w-[66vw] lg:w-[574px]">
            <h1 className="text-white text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-normal tracking-[-1.82px] leading-[105%] mb-6">
              Bringing your home to life
            </h1>
            <p className="text-white text-[14px] sm:text-[15px] md:text-[16px] mb-10">
              Expert carpenters solve home problems fast—delivering quality repairs at a fair price with precision craftsmanship, reliable service, and lasting results you can trust.
            </p>
            <div className="inline-block">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex h-[48px] px-8 bg-white text-black rounded-full hover:bg-gray-100 transition-colors duration-200 items-center text-[16px] sm:text-[17px] md:text-[18px] font-['Inter']"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      <ContactFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
} 