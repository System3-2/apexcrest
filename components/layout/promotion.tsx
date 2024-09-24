import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

enum ProService {
  YES = 1,
  NO = 0
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: 'Personalized Account Management',
    description:
      'Manage your accounts effortlessly with customized settings, transaction tracking, and financial insights at your fingertips.',
    pro: 0
  },
  {
    title: 'Seamless Payment Gateways',
    description:
      'Make and receive payments with ease through multiple payment options integrated into your Apexbank Crest account.',
    pro: 0
  },
  {
    title: 'Automated Savings Plans',
    description:
      'Set up and manage automated savings plans to help you meet your financial goals faster and more efficiently.',
    pro: 0
  },
  {
    title: 'Advanced Security & Fraud Detection',
    description:
      'Benefit from cutting-edge security measures, including encryption and real-time fraud detection, keeping your transactions safe.',
    pro: 1
  }
];

export const Promotion = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="mb-2 text-center text-lg tracking-wider text-primary">
        Services
      </h2>

      <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
        Empower Your Financial Journey
      </h2>

      <h3 className="mx-auto mb-8 text-center text-xl text-muted-foreground md:w-1/2">
        Whether it's saving, spending, or securing your funds, Apexbank Crest
        offers innovative services tailored to help you reach your financial
        goals.
      </h3>

      <div className="mx-auto grid w-full gap-4 sm:grid-cols-2 lg:w-[60%] lg:grid-cols-2">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="relative h-full bg-muted/60 dark:bg-card"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -right-3 -top-2 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
