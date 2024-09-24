import { Contact } from '@/components/layout/contact';
import { Features } from '@/components/layout/feeatures';
import { Hero } from '@/components/layout/hero';
import { RootNavbar } from '@/components/layout/navbar';
import { Promotion } from '@/components/layout/promotion';
import { Sponsors } from '@/components/layout/sponsors';
import { Testimonials } from '@/components/layout/testimonials';
import { Footer } from '@/components/footer';
import { BenefitsSection } from '@/components/layout/benefits';

export default function Home() {
  return (
    <>
      <RootNavbar />
      <Hero />
      <Sponsors />
      <BenefitsSection />
      <Features />
      <Promotion />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
