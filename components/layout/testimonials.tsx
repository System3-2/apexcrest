import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type TestimonialProps  = {
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Zephyr Alden",
    userName: "@zephyr_a",
    comment: "Joining this bank was a game-changer for my finances. The personalized service and innovative tools make managing my accounts effortless.",
  },
  {
    name: "Calista Rowan",
    userName: "@calista_r",
    comment:
      "This bank's mobile app is the best I've used. It's intuitive, fast, and makes banking on the go incredibly convenient. Highly recommend!",
  },
  {
    name: "Orion Thorne",
    userName: "@orion_t",
    comment:
      "As a small business owner, I appreciate the tailored financial advice and support I've received here. They've been instrumental in helping my business grow.",
  },
  {
    name: "Seraphina Vale",
    userName: "@seraphina_v",
    comment:
      "The level of attention and care I've received from this bank is unparalleled. They truly understand my needs and have been a reliable partner in my financial journey.",
  },
  {
    name: "Lysander Frost",
    userName: "@lysander_f",
    comment:
      "From their easy-to-use online platform to their excellent customer service, this bank exceeds my expectations in every way. I couldn't be happier.",
  },
  {
    name: "Isolde Wren",
    userName: "@isolde_w",
    comment:
      "I've been a customer for years, and their commitment to innovation and customer satisfaction keeps me coming back. A truly exceptional banking experience.",
  },
];



export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container pt-8 md:px-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        Us
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden bg-muted"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};