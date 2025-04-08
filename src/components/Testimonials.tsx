"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Expert carpenters solve home problems fast—delivering quality repairs at a fair price with precision craftsmanship, reliable service, and lasting results you can trust.",
      author: "John Doe",
      role: "Homeowner"
    },
    {
      quote: "The team's attention to detail and professional approach made all the difference. Highly recommended!",
      author: "Jane Smith",
      role: "Property Manager"
    },
    {
      quote: "Outstanding workmanship and excellent communication throughout the project.",
      author: "Mike Johnson",
      role: "Business Owner"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials w-full bg-[var(--brand-color)] h-[555px] flex items-center">
      <div className="testimonials__container relative mx-auto w-[85vw] xl:w-[1126px] h-[555px]">
        {/* Testimonial Content */}
        <div className="testimonials__content w-full lg:w-[717px] h-[448px] mx-auto flex flex-col justify-center px-4 lg:px-0">
          <div className="testimonials__quote text-[24px] lg:text-[32px] font-normal tracking-[-0.64px] leading-[120%] font-black mb-8">
            "{testimonials[currentSlide].quote}"
          </div>
          <div className="testimonials__author">
            <div className="testimonials__author-name text-[18px] lg:text-[20px] font-normal font-black mb-1">
              {testimonials[currentSlide].author}
            </div>
            <div className="testimonials__author-role font-['Inter'] text-[14px] lg:text-[16px] leading-[17px] font-normal tracking-[-0.16px] font-black">
              {testimonials[currentSlide].role}
            </div>
          </div>
        </div>

        {/* Fixed Navigation Arrows */}
        <div className="absolute left-0 right-0 bottom-24 xl:bottom-auto xl:top-1/2 xl:-translate-y-1/2 z-10 flex justify-between px-4">
          <button 
            onClick={prevSlide}
            className="testimonials__nav testimonials__nav--prev w-12 h-12 flex items-center justify-center bg-transparent border-2 border-black rounded-full hover:bg-black/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <Image 
              src="/arrow-narrow-right-svgrepo-com.svg" 
              alt="Previous" 
              width={24} 
              height={24} 
              className="rotate-180"
            />
          </button>

          <button 
            onClick={nextSlide}
            className="testimonials__nav testimonials__nav--next w-12 h-12 flex items-center justify-center bg-transparent border-2 border-black rounded-full hover:bg-black/10 transition-colors"
            aria-label="Next testimonial"
          >
            <Image 
              src="/arrow-narrow-right-svgrepo-com.svg" 
              alt="Next" 
              width={24} 
              height={24}
            />
          </button>
        </div>

        {/* Fixed Dots Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-[#33333C]' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 