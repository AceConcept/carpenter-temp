import Image from "next/image";
import Hero from '@/components/Hero';
import LeftSection from '@/components/LeftSection';
import CenteredSection from '@/components/CenteredSection';
import Testimonials from '@/components/Testimonials';
import SalesBanner from '@/components/SalesBanner';

export default function Home() {
  return (
    <main>
      <Hero />
      <LeftSection />
      <CenteredSection />
      <Testimonials />
      <div className="section-padding-sm pt-0 section-padding-lg pb-[120px]">
        <SalesBanner />
      </div>
    </main>
  );
}
