'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactFormModal from '@/components/ContactFormModal';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const features = [
    { 
      title: 'Expert Craftsmanship', 
      description: 'Our team of skilled carpenters brings years of experience and precision to every project.',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 1.33334L14.6667 4.00001V12L8 14.6667L1.33333 12V4.00001L8 1.33334Z" stroke="#C2B280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 8L14.6667 4.00001" stroke="#C2B280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 8L1.33333 4.00001" stroke="#C2B280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 8V14.6667" stroke="#C2B280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      title: 'Quality Materials', 
      description: 'We use only the finest materials to ensure durability and beauty in every project.',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8 1.33334C4.3181 1.33334 1.33333 4.31811 1.33333 8.00001C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="#C2B280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 5.33334V8.00001" stroke="#C2B280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 10.6667H8.00667" stroke="#C2B280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      title: 'Custom Solutions', 
      description: 'Every project is tailored to meet your specific needs and preferences.',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3333 2.66667L5.33333 10.6667L2.66667 8" stroke="#C2B280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      title: 'Timely Delivery', 
      description: 'We respect deadlines and ensure your project is completed on schedule.',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 5.33334V8.00001L10 9.33334" stroke="#C2B280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8 1.33334C4.3181 1.33334 1.33333 4.31811 1.33333 8.00001C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="#C2B280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      title: 'Attention to Detail', 
      description: 'We pay meticulous attention to every detail to ensure perfection in our work.',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8 1.33334C4.3181 1.33334 1.33333 4.31811 1.33333 8.00001C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="#C2B280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.33333 8.00001L7.33333 10.0001L10.6667 6.00001" stroke="#C2B280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      title: 'Customer Satisfaction', 
      description: 'Your satisfaction is our top priority, and we go above and beyond to exceed expectations.',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8 1.33334C4.3181 1.33334 1.33333 4.31811 1.33333 8.00001C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="#C2B280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.33333 8.00001L7.33333 10.0001L10.6667 6.00001" stroke="#C2B280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="w-full pt-[140px] pb-[88px]">
          <div className="mx-auto w-[85vw] xl:w-[1126px]">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              {/* Image Section */}
              <div className="w-full lg:w-[540px] aspect-[540/436] mb-8 lg:mb-0 order-1">
                <Image
                  src="/images/Serene Minimalist Interior.jpeg"
                  alt="Serene Minimalist Interior"
                  width={540}
                  height={436}
                  className="w-full h-full object-cover rounded-[16px]"
                />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-[500px] order-2 flex flex-col justify-center">
                {/* Heading */}
                <h1 className="text-[53px] font-normal tracking-[-1.82px] leading-[120%] font-black pb-6">
                  About<br />Us
                </h1>

                {/* Description */}
                <p className="font-inter text-[16px] font-normal tracking-[-0.16px] font-black pb-10">
                  Expert carpenters transform your home with precision craftsmanship—delivering quality renovations 
                  that combine style and functionality for lasting results you can trust.
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center px-6 py-3 bg-[#C2B280] text-white rounded-full hover:bg-opacity-90 transition-colors duration-200 font-['Inter']"
                  >
                    Request a Quote
                  </button>
                  <Link 
                    href="tel:989-700-0000" 
                    className="inline-flex items-center px-6 py-3 bg-[#C2B280] text-white rounded-full hover:bg-opacity-90 transition-colors duration-200 font-['Inter']"
                  >
                    Call 989-700-0000
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full pt-[88px] pb-[176px]">
          <div className="mx-auto w-[85vw] xl:w-[1126px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-sm-sb mb-2">{feature.title}</h3>
                    <p className="font-sm-rg">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ContactFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
} 