'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageGallery from '@/components/ImageGallery';
import CollapsibleSection from '@/components/CollapsibleSection';

const galleryItems = [
  {
    src: '/images/Modern Beach House Living Room.jpeg',
    width: 1920,
    height: 1440,
    title: 'Modern Beach House Design'
  },
  {
    src: '/images/Indoor Luxury Meets Natural Charm.jpeg',
    width: 1920,
    height: 2560,
    title: 'Luxury Natural Design'
  },
  {
    src: '/images/Serene Minimalist Interior.jpeg',
    width: 1920,
    height: 1440,
    title: 'Serene Minimalist Space'
  },
  {
    src: '/images/Cozy Rustic Living Space.jpeg',
    width: 1920,
    height: 2560,
    title: 'Cozy Rustic Interior'
  },
  {
    src: '/images/Modern Living Room with Abstract Art.jpeg',
    width: 1920,
    height: 1440,
    title: 'Modern Art Interior'
  },
  {
    src: '/images/Cozy Rustic Living Room.jpeg',
    width: 1920,
    height: 2560,
    title: 'Rustic Living Room'
  },
  {
    src: '/images/Serene Coastal Vista Modern Living Room.jpeg',
    width: 1920,
    height: 1440,
    title: 'Coastal Modern Design'
  },
  {
    src: '/images/Sophisticated Urban Chic Interior.jpeg',
    width: 1920,
    height: 2560,
    title: 'Urban Chic Interior'
  }
];

// Get first 6 items for the grid view
const gridItems = galleryItems.slice(0, 6);

export default function KitchenPage() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openSections, setOpenSections] = React.useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const services = [
    { title: 'Material Selection', content: 'We help you choose the perfect materials for your kitchen, from countertops to cabinet finishes.' },
    { title: 'Custom Cabinet Crafting', content: 'Expert craftsmanship for custom cabinets that maximize your kitchen space.' },
    { title: 'Custom Shelving', content: 'Personalized shelving solutions that combine style with functionality.' },
    { title: 'Custom Bookcases', content: 'Built-in bookcases that seamlessly integrate with your kitchen design.' },
    { title: 'Counter Installation', content: 'Professional installation of countertops with precise measurements and perfect fits.' },
    { title: 'Crown Molding & Trim Work', content: 'Elegant finishing touches with expert crown molding and trim installation.' },
    { title: 'Wooden Flooring Installation', content: 'Quality wooden flooring installation to complete your kitchen renovation.' }
  ];

  return (
    <main>
      <section className="w-full pt-[140px] pb-[88px]">
        <div className="mx-auto w-[85vw] xl:w-[1126px]">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            {/* Content Section */}
            <div className="w-full lg:w-[500px] order-2 lg:order-1">
              {/* Heading */}
              <h1 className="text-[53px] font-normal tracking-[-1.82px] leading-[120%] font-black pb-6">
                Kitchen<br />Remodeling
              </h1>

              {/* Description */}
              <p className="font-inter text-[16px] font-normal tracking-[-0.16px] font-black pb-10">
                Expert carpenters solve home problems fast—delivering quality repairs at a fair price with precision 
                craftsmanship, reliable service, and lasting results you can trust.
              </p>

              {/* Learn More Dropdown */}
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

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Link 
                  href="/quote" 
                  className="inline-flex items-center px-6 py-3 bg-[#C2B280] text-white rounded-full hover:bg-opacity-90 transition-colors duration-200 font-['Inter']"
                >
                  Request a Quote
                </Link>
                <Link 
                  href="tel:989-700-0000" 
                  className="inline-flex items-center px-6 py-3 bg-[#C2B280] text-white rounded-full hover:bg-opacity-90 transition-colors duration-200 font-['Inter']"
                >
                  Call 989-700-0000
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-[540px] aspect-[540/436] mb-8 lg:mb-0 order-1 lg:order-2">
              <Image
                src="/images/Modern Beach House Living Room.jpeg"
                alt="Modern Beach House Design"
                width={540}
                height={436}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-[88px]">
        <div className="mx-auto w-[85vw] xl:w-[1126px]">
          <h2 className="text-[32px] md:text-[40px] font-normal tracking-[-0.8px] leading-[120%] text-center mb-4">
            Kitchen Remodeling by Expert Carpenters
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-center mb-12 max-w-[574px] mx-auto">
            Our expert team brings your dream kitchen to life with precision and care.
          </p>
          <ImageGallery items={galleryItems} gridItems={gridItems} />
        </div>
      </section>

      {/* Kitchen 3rd Section */}
      <section className="w-full py-[88px]">
        <div className="mx-auto w-[85vw] xl:w-[1126px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] md:text-[40px] font-normal tracking-[-0.8px] leading-[120%] mb-6">
                Custom Carpentry for Kitchen Remodeling
              </h2>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] mb-8">
                Our skilled craftsmen specialize in creating custom kitchen solutions that perfectly match your style and needs.
              </p>
              <ul className="space-y-4 text-[14px] sm:text-[15px] md:text-[16px]">
                <li>• Custom Cabinetry</li>
                <li>• Kitchen Islands</li>
                <li>• Countertop Installation</li>
                <li>• Storage Solutions</li>
                <li>• Finish Carpentry</li>
                <li>• Built-in Features</li>
              </ul>
            </div>
            <div className="aspect-[4/3] w-full">
              <Image
                src="/images/Indoor Luxury Meets Natural Charm.jpeg"
                alt="Luxury Natural Design"
                width={540}
                height={405}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Collapsible Content */}
      <section className="w-full py-[88px]">
        <div className="mx-auto w-[85vw] xl:w-[1126px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-[32px] md:text-[40px] font-normal tracking-[-0.8px] leading-[120%] mb-6">
                Custom Carpentry for Kitchen Remodeling
              </h2>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] mb-8">
                Our skilled craftsmen specialize in creating custom kitchen solutions that perfectly match your style and needs.
              </p>
              <ul className="space-y-4 text-[14px] sm:text-[15px] md:text-[16px] mb-12">
                <li>• Custom Cabinetry</li>
                <li>• Kitchen Islands</li>
                <li>• Countertop Installation</li>
                <li>• Storage Solutions</li>
                <li>• Finish Carpentry</li>
                <li>• Built-in Features</li>
              </ul>
            </div>
            <div>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="pb-4">
                    <button 
                      onClick={() => toggleSection(index)}
                      className="w-full border-b border-black pb-4 flex justify-between items-center"
                    >
                      <span className="text-[16px] font-inter">{service.title}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${openSections.includes(index) ? 'rotate-180' : ''}`} 
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
                    {openSections.includes(index) && (
                      <div className="mt-4">
                        <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                          {service.content}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - Duplicate of Third Section */}
      <section className="w-full pt-[88px] pb-[176px]">
        <div className="mx-auto w-[85vw] xl:w-[1126px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] md:text-[40px] font-normal tracking-[-0.8px] leading-[120%] mb-6">
                Custom Carpentry for Kitchen Remodeling
              </h2>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] mb-8">
                Our skilled craftsmen specialize in creating custom kitchen solutions that perfectly match your style and needs.
              </p>
              <ul className="space-y-4 text-[14px] sm:text-[15px] md:text-[16px]">
                <li>• Custom Cabinetry</li>
                <li>• Kitchen Islands</li>
                <li>• Countertop Installation</li>
                <li>• Storage Solutions</li>
                <li>• Finish Carpentry</li>
                <li>• Built-in Features</li>
              </ul>
            </div>
            <div className="aspect-[4/3] w-full">
              <Image
                src="/images/Serene Minimalist Interior.jpeg"
                alt="Serene Minimalist Space"
                width={540}
                height={405}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 