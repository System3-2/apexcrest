import { Contact } from '@/components/layout/contact';
import { Features } from '@/components/layout/feeatures';
import { Hero } from '@/components/layout/hero';
import { RootNavbar } from '@/components/layout/navbar';
import { Promotion } from '@/components/layout/promotion';
import { Sponsors } from '@/components/layout/sponsors';
import { Testimonials } from '@/components/layout/testimonials';

export default function Home() {

  return (
    <>
      <RootNavbar />
      <Promotion />
      <Hero />
      <Features />
      <Testimonials />
      <Sponsors />
      <Contact />
    </>
  )
}