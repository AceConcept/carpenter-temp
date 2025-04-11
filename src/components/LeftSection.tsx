"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import ContactFormModal from './ContactFormModal';

export default function LeftSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="w-full pt-[104px] pb-[88px]">
        <div className="mx-auto w-[85vw] xl:w-[1126px]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            {/* Image Section */}
            <div className="w-full lg:w-[540px] aspect-[540/436] mb-8 lg:mb-0">
              <Image
                src="/images/Modern Interior Living Space.jpeg"
                alt="Modern Interior Living Space"
                width={540}
                height={436}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-[500px]">
              {/* Label */}
              <div className="text-[14px] font-normal tracking-[-0.18%] font-black uppercase pb-2">
                BENEFITS
              </div>

              {/* Heading */}
              <h2 className="text-[53px] font-normal tracking-[-1.82px] leading-[120%] font-black pb-6">
                Fixing your home
              </h2>

              {/* Description */}
              <p className="font-inter text-[16px] font-normal tracking-[-0.16px] font-black pb-10">
                Expert carpenters solve home problems fast—delivering quality repairs at a fair price with precision craftsmanship, reliable service, and lasting results you can trust.
              </p>

              {/* CTA Button */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center px-6 py-3 bg-[#C2B280] text-white rounded-full hover:bg-opacity-90 transition-colors duration-200"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
} 