import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '../icons';

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: 'Blocks',
    title: 'Advanced Security',
    description:
      'Enjoy peace of mind with our top-tier security protocols, designed to protect your data and transactions with cutting-edge encryption.'
  },
  {
    icon: 'LineChart',
    title: 'Smart Financial Insights',
    description:
      'Track your spending and savings with powerful insights and analytics, helping you make informed financial decisions at every step.'
  },
  {
    icon: 'Wallet',
    title: 'Seamless Transactions',
    description:
      'Transfer funds instantly and make payments effortlessly, all with the click of a button, anytime and anywhere.'
  },
  {
    icon: 'Sparkle',
    title: '24/7 Support',
    description:
      'Get round-the-clock support from our dedicated team, ensuring that your banking experience is smooth and stress-free.'
  }
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid place-items-center lg:grid-cols-2 lg:gap-24">
        <div>
          <h2 className="mb-2 text-lg tracking-wider text-primary">Benefits</h2>

          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Your Path to Financial Freedom
          </h2>
          <p className="mb-8 text-xl text-muted-foreground">
            Experience a banking platform that puts your needs first. With
            Apexbank Crest, you enjoy seamless, secure, and personalized banking
            services tailored to your lifestyle.
          </p>
        </div>

        <div className="grid w-full gap-4 lg:grid-cols-2">
          {benefitList.map(({ icon, title, description }, index) => {
            //@ts-ignore
            const Icon = Icons[icon || 'arrowLeft'];
            return (
              <>
                <Card
                  key={title}
                  className="group/number bg-muted/50 transition-all delay-75 hover:bg-background dark:bg-card"
                >
                  <CardHeader>
                    <div className="flex justify-between">
                      <Icon
                        name={icon}
                        size={32}
                        color="hsl(var(--primary))"
                        className="mb-6 text-primary"
                      />
                      <span className="text-5xl font-medium text-muted-foreground/15 transition-all delay-75 group-hover/number:text-muted-foreground/30">
                        0{index + 1}
                      </span>
                    </div>

                    <CardTitle>{title}</CardTitle>
                  </CardHeader>

                  <CardContent className="text-muted-foreground">
                    {description}
                  </CardContent>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};
