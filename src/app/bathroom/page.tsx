'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BathroomPage() {
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const [openSections, setOpenSections] = React.useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const services = [
    { title: 'Material Selection', content: 'We help you choose the perfect materials for your bathroom, from tiles to fixtures.' },
    { title: 'Custom Cabinet Crafting', content: 'Expert craftsmanship for custom vanities and storage solutions that maximize your bathroom space.' },
    { title: 'Custom Shelving', content: 'Personalized shelving solutions that combine style with functionality.' },
    { title: 'Custom Storage', content: 'Built-in storage solutions that seamlessly integrate with your bathroom design.' },
    { title: 'Vanity Installation', content: 'Professional installation of vanities with precise measurements and perfect fits.' },
    { title: 'Crown Molding & Trim Work', content: 'Elegant finishing touches with expert crown molding and trim installation.' },
    { title: 'Tile Installation', content: 'Quality tile installation to complete your bathroom renovation.' }
  ];

  const workSteps = [
    { title: 'Step 1', description: 'Expert carpenters solve home problems fast—delivering quality repairs at a fair price with precision craftsmanship, reliable service, and lasting results you can trust.' },
    { title: 'Step 2', description: 'Expert carpenters solve home problems fast—delivering quality repairs at a fair price with precision craftsmanship, reliable service, and lasting results you can trust.' },
    { title: 'Step 3', description: 'Expert carpenters solve home problems fast—delivering quality repairs at a fair price with precision craftsmanship, reliable service, and lasting results you can trust.' }
  ];

  const HeroSection = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (value: boolean) => void }) => (
    <section className="w-full pt-[140px] pb-[88px]">
      <div className="mx-auto w-[85vw] xl:w-[1126px]">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          {/* Image Section */}
          <div className="w-full lg:w-[540px] aspect-[540/436] mb-8 lg:mb-0 order-1">
            <Image
              src="/images/Modern Living Room with Abstract Art.jpeg"
              alt="Modern Living Space"
              width={540}
              height={436}
              className="w-full h-full object-cover rounded-[16px]"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-[500px] order-2">
            {/* Heading */}
            <h1 className="text-[53px] font-normal tracking-[-1.82px] leading-[120%] font-black pb-6">
              Bathroom<br />Remodeling
            </h1>

            {/* Description */}
            <p className="font-inter text-[16px] font-normal tracking-[-0.16px] font-black pb-10">
              Expert carpenters transform your bathroom with precision craftsmanship—delivering quality renovations 
              that combine style and functionality for lasting results you can trust.
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
                    Our expert team brings your dream bathroom to life with precision and care. We specialize in custom bathroom designs that combine functionality with aesthetic appeal. From initial consultation to final installation, we ensure every detail meets your expectations.
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
        </div>
      </div>
    </section>
  );

  const SecondHeroSection = () => (
    <section className="w-full py-[88px]">
      <div className="mx-auto w-[85vw] xl:w-[1126px]">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full lg:w-[500px] order-2 lg:order-1">
            <h2 className="text-[53px] font-normal tracking-[-0.8px] leading-[120%] mb-6">
              Custom Carpentry for Bathroom Remodeling
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] mb-8">
              Our skilled craftsmen specialize in creating custom bathroom solutions that perfectly match your style and needs.
            </p>
            <ul className="space-y-4 text-[14px] sm:text-[15px] md:text-[16px]">
              <li>• Custom Vanities</li>
              <li>• Shower Enclosures</li>
              <li>• Storage Solutions</li>
              <li>• Finish Carpentry</li>
              <li>• Built-in Features</li>
              <li>• Custom Shelving</li>
            </ul>
          </div>
          <div className="w-full lg:w-[540px] aspect-[540/436] mb-8 lg:mb-0 order-1 lg:order-2">
            <Image
              src="/images/Cozy Rustic Living Room.jpeg"
              alt="Cozy Living Space"
              width={540}
              height={436}
              className="w-full h-full object-cover rounded-[16px]"
            />
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <main>
      {/* First Section */}
      <section className="w-full pt-[140px] pb-[88px]">
        <div className="mx-auto w-[85vw] xl:w-[1126px]">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            {/* Content Section */}
            <div className="w-full lg:w-[500px] order-2 lg:order-1">
              {/* Heading */}
              <h1 className="text-[53px] font-normal tracking-[-1.82px] leading-[120%] font-black pb-6">
                Bathroom<br />Remodeling
              </h1>

              {/* Description */}
              <p className="font-inter text-[16px] font-normal tracking-[-0.16px] font-black pb-10">
                Expert carpenters transform your bathroom with precision craftsmanship—delivering quality renovations 
                that combine style and functionality for lasting results you can trust.
              </p>

              {/* Learn More Dropdown */}
              <div className="pb-10">
                <button 
                  onClick={() => setIsOpen1(!isOpen1)}
                  className="w-full border-b border-black pb-4 flex justify-between items-center"
                >
                  <span className="text-[16px] font-inter">Learn More</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen1 ? 'rotate-180' : ''}`} 
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
                {isOpen1 && (
                  <div className="mt-4">
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                      Our expert team brings your dream bathroom to life with precision and care. We specialize in custom bathroom designs that combine functionality with aesthetic appeal. From initial consultation to final installation, we ensure every detail meets your expectations.
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
                src="/images/Modern Living Room with Abstract Art.jpeg"
                alt="Modern Living Space"
                width={540}
                height={436}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New York City Section */}
      <section className="w-full py-[88px]">
        <div className="mx-auto w-[85vw] xl:w-[1126px]">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            {/* Image Section */}
            <div className="w-full lg:w-[540px] aspect-[540/436] mb-8 lg:mb-0 order-1">
              <Image
                src="/images/Modern and Minimalist Kitchen Design.jpeg"
                alt="Modern Kitchen Design"
                width={540}
                height={436}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-[500px] order-2">
              {/* Heading */}
              <h2 className="text-[53px] font-normal tracking-[-0.8px] leading-[120%] font-black pb-6">
                Bathroom Remodeling<br />in New York City
              </h2>

              {/* Description */}
              <p className="font-inter text-[16px] font-normal tracking-[-0.16px] font-black pb-10">
                Expert carpenters create home solutions fast—delivering quality repairs at a fair price with precision craftsmanship, reliable service, and lasting results you can trust.
              </p>

              {/* Learn More Dropdown */}
              <div className="pb-10">
                <button 
                  onClick={() => setIsOpen2(!isOpen2)}
                  className="w-full border-b border-black pb-4 flex justify-between items-center"
                >
                  <span className="text-[16px] font-inter">Learn More</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen2 ? 'rotate-180' : ''}`} 
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
                {isOpen2 && (
                  <div className="mt-4">
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                      Transform your New York City bathroom with our expert remodeling services. We understand the unique challenges of NYC renovations and deliver exceptional results that maximize your space while maintaining the character of your home.
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
          </div>
        </div>
      </section>

      <SecondHeroSection />

      {/* Services Section with Collapsible Content */}
      <section className="w-full py-24">
        <div className="mx-auto w-[85vw] xl:w-[1126px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-[53px] font-normal tracking-[-0.8px] leading-[120%] mb-6">
                Custom Carpentry for Bathroom Remodeling
              </h2>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] mb-8">
                Our skilled craftsmen specialize in creating custom bathroom solutions that perfectly match your style and needs.
              </p>
              <ul className="space-y-4 text-[14px] sm:text-[15px] md:text-[16px] mb-12">
                <li>• Custom Vanities</li>
                <li>• Storage Solutions</li>
                <li>• Tile Installation</li>
                <li>• Shower Enclosures</li>
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

      {/* Fifth Section */}
      <section className="w-full py-[88px]">
        <div className="mx-auto w-[85vw] xl:w-[1126px]">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            {/* Image Section */}
            <div className="w-full lg:w-[540px] aspect-[540/436] mb-8 lg:mb-0 order-1">
              <Image
                src="/images/Modern Kitchen Interior.jpeg"
                alt="Modern Bathroom Interior"
                width={540}
                height={436}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-[500px] order-2">
              {/* Heading */}
              <h2 className="text-[53px] font-normal tracking-[-0.8px] leading-[120%] font-black pb-6">
                Bathroom Remodeling<br />in New York City
              </h2>

              {/* Description */}
              <p className="font-inter text-[16px] font-normal tracking-[-0.16px] font-black pb-10">
                Expert carpenters create home solutions fast—delivering quality repairs at a fair price with precision craftsmanship, reliable service, and lasting results you can trust.
              </p>

              {/* Learn More Dropdown */}
              <div className="pb-10">
                <button 
                  onClick={() => setIsOpen3(!isOpen3)}
                  className="w-full border-b border-black pb-4 flex justify-between items-center"
                >
                  <span className="text-[16px] font-inter">Learn More</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen3 ? 'rotate-180' : ''}`} 
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
                {isOpen3 && (
                  <div className="mt-4">
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                      Transform your New York City bathroom with our expert remodeling services. We understand the unique challenges of NYC renovations and deliver exceptional results that maximize your space while maintaining the character of your home.
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
          </div>
        </div>
      </section>

      {/* How we Work Section */}
      <section className="w-full py-24">
        <div className="mx-auto w-[85vw] xl:w-[1126px]">
          <h2 className="text-[53px] font-normal tracking-[-0.8px] leading-[120%] mb-6">How we Work</h2>
          <p className="font-sm-rg mb-16">
            Expert carpenters solve home problems fast—delivering quality repairs at a fair price with precision craftsmanship, reliable service, and lasting results you can trust.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workSteps.map((step, index) => (
              <div key={index}>
                <div className="w-[120px] h-[120px] mb-6">
                  <Image
                    src={[
                      "/images/Serene Coastal Vista Modern Living Room.jpeg",
                      "/images/Modern Beach House Living Room.jpeg",
                      "/images/Sophisticated Urban Chic Interior.jpeg"
                    ][index]}
                    alt={`Work Step ${index + 1}`}
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-sm-sb mb-4">{step.title}</h3>
                <p className="font-sm-rg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seventh Section */}
      <section className="w-full pt-[88px] pb-[88px]">
        <div className="mx-auto w-[85vw] xl:w-[1126px]">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            {/* Content Section */}
            <div className="w-full lg:w-[500px] order-2 lg:order-1">
              {/* Label */}
              <div className="text-[14px] font-normal tracking-[-0.18%] font-black uppercase pb-2">
                Excellent Craftsmanship
              </div>

              {/* Heading */}
              <h2 className="text-[53px] font-normal tracking-[-0.8px] leading-[120%] font-black pb-6">
                Renovate Your Bathroom in<br />Any Style
              </h2>

              {/* Description */}
              <p className="font-inter text-[16px] font-normal tracking-[-0.16px] font-black pb-6">
                Expert carpenters solve home problems fast—delivering quality repairs at a fair price with precision craftsmanship, reliable service, and lasting results you can trust.
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-10 font-inter text-[16px]">
                <li>• Licensed & Certified Carpenters</li>
                <li>• Premium Quality Materials</li>
                <li>• Insured Services</li>
                <li>• 24/7 Fast & Open Communication</li>
                <li>• Make the Job Site Clean & Tidy at All Times</li>
                <li>• Professional Craftsmanship With Labor Warranty</li>
                <li>• Competitive Pricing in the Industry</li>
              </ul>

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
                src="/images/Modern Minimalist Interior Living Space.jpeg"
                alt="Modern Interior"
                width={540}
                height={436}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Eighth Section */}
      <section className="w-full pt-[88px] pb-[88px]">
        <div className="mx-auto w-[85vw] xl:w-[1126px]">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            {/* Image Section */}
            <div className="w-full lg:w-[540px] aspect-[540/436] mb-8 lg:mb-0 order-1">
              <Image
                src="/images/Cozy Modern Living Room.jpeg"
                alt="Cozy Modern Interior"
                width={540}
                height={436}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-[500px] order-2">
              {/* Heading */}
              <h2 className="text-[53px] font-normal tracking-[-0.8px] leading-[120%] font-black pb-6">
                Transform Your Space<br />With Expert Care
              </h2>

              {/* Description */}
              <p className="font-inter text-[16px] font-normal tracking-[-0.16px] font-black pb-10">
                Our experienced team brings your vision to life with meticulous attention to detail. From concept to completion, we ensure every aspect of your bathroom renovation exceeds expectations.
              </p>

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
          </div>
        </div>
      </section>
    </main>
  );
} 