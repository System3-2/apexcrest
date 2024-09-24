import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '../icons';

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: 'TabletSmartphone',
    title: 'Mobile Banking',
    description:
      'Access your accounts anytime, anywhere with our intuitive mobile app. Manage transactions, check balances, and more on the go.'
  },
  {
    icon: 'BadgeCheck',
    title: 'Trusted by Thousands',
    description:
      'Join a growing community of satisfied customers who trust Apexbank Crest with their financial needs.'
  },
  {
    icon: 'Goal',
    title: 'Personalized Financial Goals',
    description:
      'Set and achieve your financial goals with tailored plans and expert guidance designed to help you succeed.'
  },
  {
    icon: 'PictureInPicture',
    title: 'User-Centric Design',
    description:
      'Navigate effortlessly through our platform, designed with a focus on user experience and accessibility.'
  },
  {
    icon: 'MousePointerClick',
    title: 'Quick & Easy Account Setup',
    description:
      "Open an account within minutes and get started with Apexbank Crest's services with minimal hassle."
  },
  {
    icon: 'Newspaper',
    title: 'Transparent Policies',
    description:
      'We provide clear, straightforward information about our services, ensuring you always know what to expect.'
  }
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="mb-2 text-center text-lg tracking-wider text-primary">
        Features
      </h2>

      <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
        What Makes Us Different
      </h2>

      <h3 className="mx-auto mb-8 text-center text-xl text-muted-foreground md:w-1/2">
        Apexbank Crest is redefining digital banking with cutting-edge features
        that put you in control of your financial future.
      </h3>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featureList.map(({ icon, title, description }) => {
          //@ts-ignore
          const Icon = Icons[icon || 'arrowLeft'];
          return (
            <div key={title}>
              <Card className="h-full border-0 bg-background shadow-none">
                <CardHeader className="flex items-center justify-center">
                  <div className="mb-4 rounded-full bg-primary/20 p-2 ring-8 ring-primary/10">
                    <Icon
                      name={icon}
                      size={24}
                      color="hsl(var(--primary))"
                      className="text-primary"
                    />
                  </div>

                  <CardTitle>{title}</CardTitle>
                </CardHeader>

                <CardContent className="text-center text-muted-foreground">
                  {description}
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};
