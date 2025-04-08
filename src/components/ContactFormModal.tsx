import React from 'react';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[32px] p-8 w-[90vw] max-w-[500px] relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <h3 className="text-[14px] font-normal tracking-[-0.18%] font-black uppercase mb-2">
            OUR SERVICES
          </h3>
          <h2 className="text-[32px] font-normal tracking-[-0.8px] leading-[120%] font-black mb-4">
            Contact Sales
          </h2>
          <p className="font-['Inter'] text-[16px] leading-[19px] font-normal tracking-[-0.16px] font-black">
            Let's get this conversation started. Tell us a bit about yourself, and we'll get in touch as soon as we can.
          </p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-[14px] font-normal font-black mb-2">First name</label>
              <input
                type="text"
                id="firstName"
                className="w-full h-[48px] px-4 rounded-[8px] border border-gray-300 focus:outline-none focus:border-[#C0B283]"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-[14px] font-normal font-black mb-2">Last name</label>
              <input
                type="text"
                id="lastName"
                className="w-full h-[48px] px-4 rounded-[8px] border border-gray-300 focus:outline-none focus:border-[#C0B283]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-[14px] font-normal font-black mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full h-[48px] px-4 rounded-[8px] border border-gray-300 focus:outline-none focus:border-[#C0B283]"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-[14px] font-normal font-black mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              className="w-full h-[48px] px-4 rounded-[8px] border border-gray-300 focus:outline-none focus:border-[#C0B283]"
            />
          </div>

          <div>
            <label htmlFor="zipCode" className="block text-[14px] font-normal font-black mb-2">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              defaultValue="United States"
              className="w-full h-[48px] px-4 rounded-[8px] border border-gray-300 focus:outline-none focus:border-[#C0B283]"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-[14px] font-normal font-black mb-2">Type of Service</label>
            <select
              id="service"
              className="w-full h-[48px] px-4 rounded-[8px] border border-gray-300 focus:outline-none focus:border-[#C0B283] appearance-none bg-white"
              defaultValue=""
            >
              <option value="" disabled>Select Which Service you would like</option>
              <option value="kitchen">Kitchen Remodeling</option>
              <option value="bathroom">Bathroom Remodeling</option>
              <option value="custom">Custom Carpentry</option>
              <option value="repair">Repair Services</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full h-[48px] bg-black text-white rounded-full hover:bg-opacity-90 transition-colors font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
} 