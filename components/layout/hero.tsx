import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Icons } from '../icons';
import { Badge } from '../ui/badge';

const links = [
  { name: 'Explore Our Services', href: '/services' },
  { name: 'Why Choose Us?', href: '/about' },
  { name: 'Our Commitment', href: '/about' }
];
const stats = [
  { name: 'Clients Served', value: '300+' },
  { name: 'Support Hours Weekly', value: '40' },
  { name: 'Flexibility', value: 'Unlimited ' }
];

export function Hero() {
  return (
    <section className="container w-full">
      <div className="mx-auto grid place-items-center gap-8 py-20 md:py-32 lg:max-w-screen-xl">
        <div className="space-y-8 text-center">
          <Badge variant="outline" className="py-2 text-sm">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Apexbank Crest's Latest Features! </span>
          </Badge>

          <div className="mx-auto max-w-screen-md text-center text-4xl font-bold md:text-6xl">
            <h1>
              Discover the Future of
              <span className="bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text px-2 text-transparent">
                Apexbank Crest
              </span>
              Banking
            </h1>
          </div>

          <p className="mx-auto max-w-screen-sm text-xl text-muted-foreground">
            {`Join the leading digital bank that puts you in control of your financial journey. Enjoy personalized services, advanced security, and a seamless experience.`}
          </p>

          <div className="space-y-4 md:space-x-4 md:space-y-0">
            <Button className="group/arrow w-5/6 font-bold md:w-1/4">
              <Link href={'/signup'}>Open an Account</Link>
              <Icons.arrowRight className="ml-2 size-5 transition-transform group-hover/arrow:translate-x-1" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 font-bold md:w-1/4"
            >
              <Link href="/about">Learn more</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
