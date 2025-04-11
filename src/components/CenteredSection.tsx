import React from 'react';
import Image from 'next/image';

export default function CenteredSection() {
  return (
    <section className="w-full pt-[88px] pb-[176px]">
      <div className="mx-auto w-[85vw] xl:w-[1126px]">
        {/* Header Content */}
        <div className="mb-16 lg:text-center text-left">
          {/* Label */}
          <div className="text-[14px] font-normal tracking-[-0.18%] font-black uppercase pb-2">
            OUR SERVICES
          </div>

          {/* Heading */}
          <h2 className="text-[53px] font-normal tracking-[-1.82px] leading-[120%] font-black pb-6">
            Bringing your home to life
          </h2>

          {/* Description */}
          <p className="font-inter text-[16px] font-normal tracking-[-0.16px] font-black lg:max-w-[574px] lg:mx-auto">
            Expert carpenters solve home problems fast—delivering quality repairs at a fair price with precision craftsmanship, reliable service, and lasting results you can trust.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Grid Item 1 */}
          <div className="w-full">
            <div className="w-full aspect-[4/3] mb-6">
              <Image
                src="/images/Modern Interior Living Space.jpeg"
                alt="Modern Interior Living Space"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
            <h3 className="text-[16px] font-semibold pb-2">Transform Your Kitchen into the Heart of Your Home</h3>
            <p className="font-sm-rg">
              Whether you're dreaming of a modern culinary space or a cozy, classic kitchen, our expert remodeling team brings your vision to life. We specialize in complete kitchen makeovers that enhance both beauty and functionality.
            </p>
          </div>

          {/* Grid Item 2 */}
          <div className="w-full">
            <div className="w-full aspect-[4/3] mb-6">
              <Image
                src="/images/Modern Minimalist Interior Living Space.jpeg"
                alt="Modern Minimalist Interior Living Space"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
            <h3 className="text-[16px] font-semibold pb-2">Refresh, Renew, and Reimagine Your Bathroom</h3>
            <p className="font-sm-rg">
              Turn your bathroom into a stylish and serene retreat with our expert remodeling services. Whether you're updating a small powder room or creating a spa-like master bath, we handle every detail with precision and care.
            </p>
          </div>

          {/* Grid Item 3 */}
          <div className="w-full">
            <div className="w-full aspect-[4/3] mb-6">
              <Image
                src="/images/Modern Minimalist Kitchen Interior.jpeg"
                alt="Modern Minimalist Kitchen Interior"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
            <h3 className="text-[16px] font-semibold pb-2">Bring Your Ideas to Life with Custom Carpentry</h3>
            <p className="font-sm-rg">
              From one-of-a-kind furniture pieces to tailored built-ins and trim work, our custom carpentry services are designed to add beauty, functionality, and personality to your home. If you can dream it, we can build it—crafted with care, built to last.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 