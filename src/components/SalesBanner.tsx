"use client";

import React, { useState } from 'react';
import ContactFormModal from './ContactFormModal';

export default function SalesBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="w-full">
        <div className="mx-auto w-[85vw] xl:w-[1126px]">
          <div className="bg-[#C0B283] rounded-[32px] px-24 py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <h2 className="text-[32px] font-normal text-white text-center md:text-left">Get a quote today!</h2>
              <div className="w-full md:w-auto">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="button-md bg-white text-black hover:bg-gray-50 w-full md:w-auto"
                >
                  Contact Sales
                </button>
              </div>
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