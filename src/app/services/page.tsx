import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="pt-24">
      <div className="mx-auto w-[85vw] xl:w-[1126px]">
        <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-normal tracking-[-1.82px] leading-[105%] mb-6">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Link href="/kitchen" className="block p-8 bg-white rounded-[32px] hover:shadow-lg transition-shadow">
            <h2 className="text-[32px] font-normal tracking-[-0.8px] leading-[120%] font-black mb-4">
              Kitchen Services
            </h2>
            <p className="font-['Inter'] text-[16px] leading-[19px] font-normal tracking-[-0.16px] font-black">
              Custom cabinetry, countertops, islands, and complete kitchen renovations.
            </p>
          </Link>
          <Link href="/bathroom" className="block p-8 bg-white rounded-[32px] hover:shadow-lg transition-shadow">
            <h2 className="text-[32px] font-normal tracking-[-0.8px] leading-[120%] font-black mb-4">
              Bathroom Services
            </h2>
            <p className="font-['Inter'] text-[16px] leading-[19px] font-normal tracking-[-0.16px] font-black">
              Custom vanities, cabinets, shelving, and complete bathroom renovations.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
} 