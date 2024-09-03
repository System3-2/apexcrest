import { HamburgerMenuIcon } from "@radix-ui/react-icons"

const features = [
  {
    name: 'Small business checking',
    description:
      'Our Small Business Checking account is tailored to help you manage your business finances with ease. ',
    icon: HamburgerMenuIcon,
  },
  {
    name: 'Find business credit card',
    description:
      "Whether you're looking for rewards, low interest rates, or cash back, we have options that will help you manage expenses and build credit.",
    icon: HamburgerMenuIcon,
  },
  {
    name: 'Merchant services',
    description: "We provide secure and reliable payment processing solutions, whether you're online, in-store, or on the go.",
    icon: HamburgerMenuIcon,
  },
  {
    name: 'Apply for loan',
    description: "Whether you're expanding your business or need working capital, we're here to support your growth.",
    icon: HamburgerMenuIcon,
  },
]

export function Features() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to Manage Your Finances
          </p>
          <p className="mt-6 text-lg leading-8 ">
            Whether you're a small business owner or an individual, we offer a comprehensive suite of financial tools and services designed to meet your needs. From checking accounts to credit cards, we have you covered.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl p-6 ">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 p-6">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 bg-secondary p-3 rounded-lg">
                <dt className="text-base font-semibold leading-7 ">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ">
                    <feature.icon aria-hidden="true" className="h-6 w-6 " />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
