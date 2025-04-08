'use client';

import React from 'react';
import ImageGallery from '@/components/ImageGallery';

const kitchenItems = [
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

const bathroomItems = [
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
  },
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
  }
];

const customItems = [
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
  },
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
    src: '/images/Cozy Rustic Living Room.jpeg',
    width: 1920,
    height: 2560,
    title: 'Rustic Living Room'
  }
];

// Get first 6 items for each grid view
const kitchenGridItems = kitchenItems.slice(0, 6);
const bathroomGridItems = bathroomItems.slice(0, 6);
const customGridItems = customItems.slice(0, 6);

export default function GalleryPage() {
  return (
    <main>
      {/* Centered Title Section */}
      <section className="w-full pt-[140px]">
        <div className="mx-auto w-[85vw] xl:w-[1126px]">
          {/* Header Content */}
          <div className="text-center">
            <h1 className="text-[53px] font-normal tracking-[-1.82px] leading-[120%] font-black pb-6">
              Our Work
            </h1>
            <p className="text-[16px] font-inter font-normal tracking-[-0.16px] font-black pb-10 max-w-[574px] mx-auto">
              Explore our portfolio of custom carpentry projects, showcasing our craftsmanship and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Kitchen Gallery Section */}
      <section className="w-full py-[88px]">
        <div className="mx-auto w-[85vw] xl:w-[1126px]">
          <h2 className="text-[32px] md:text-[40px] font-normal tracking-[-0.8px] leading-[120%] text-center mb-4">
            Kitchen Remodeling
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-center mb-12 max-w-[574px] mx-auto">
            Transform your kitchen with our custom carpentry solutions.
          </p>
          <ImageGallery items={kitchenItems} gridItems={kitchenGridItems} />
        </div>
      </section>

      {/* Bathroom Gallery Section */}
      <section className="w-full py-[88px]">
        <div className="mx-auto w-[85vw] xl:w-[1126px]">
          <h2 className="text-[32px] md:text-[40px] font-normal tracking-[-0.8px] leading-[120%] text-center mb-4">
            Bathroom Remodeling
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-center mb-12 max-w-[574px] mx-auto">
            Create your dream bathroom with our expert craftsmanship.
          </p>
          <ImageGallery items={bathroomItems} gridItems={bathroomGridItems} />
        </div>
      </section>

      {/* Custom Work Gallery Section */}
      <section className="w-full py-[88px]">
        <div className="mx-auto w-[85vw] xl:w-[1126px]">
          <h2 className="text-[32px] md:text-[40px] font-normal tracking-[-0.8px] leading-[120%] text-center mb-4">
            Custom Projects
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-center mb-12 max-w-[574px] mx-auto">
            Discover our unique custom carpentry projects.
          </p>
          <ImageGallery items={customItems} gridItems={customGridItems} />
        </div>
      </section>
    </main>
  );
} 