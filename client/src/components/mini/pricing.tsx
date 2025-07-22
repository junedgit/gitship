import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

// Pricing data
type ButtonVariant =
  | "outline"
  | "default"
  | "link"
  | "destructive"
  | "secondary"
  | "ghost";

type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonVariant: ButtonVariant;
  span: number;
  highlight: boolean;
};

const plans: Plan[] = [
  {
    name: "Free",
    price: "₹0 / mo",
    description: "Free Forever",
    features: [
      "Push via Git",
      "Personal profile & basic analytics",
      "Community support",
    ],
    buttonVariant: "outline",
    span: 2,
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹150 / mo",
    description: "for Teams",
    features: [
      "Everything in Free Plan",
      "Unlimited private repos",
      "Email and Chat Support",
      "scalable infra",
      "Multi User Access",
      "Access to Basic Templates",
      "1 Custom Report Per Month",
      "Monthly Product Updates",
      "Standard Security Features",
    ],
    buttonVariant: "default",
    span: 3,
    highlight: true,
  },
];

export default function PricingThree() {
  return (
    <section className="note-prose relative w-full  pt-8 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto text-center">
          <h1
            className="text-center text-4xl font-semibold lg:text-5xl 
          bg-gradient-to-r from-stone-200 to-zinc-400 bg-clip-text text-transparent"
          >
            Sclable Pricings
          </h1>
          <p className="font-medium font-sans pt-2 text-lg flex gap-2 justify-center">
            Everything’s free to start. Teams and advanced tools when you need
            them.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-5 md:gap-0">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between space-y-8 rounded-(--radius) border p-6 lg:p-10 ${
                plan.highlight
                  ? "dark:bg-zinc-900 shadow-lg shadow-gray-950/5 md:col-span-3 dark:[--color-muted:var(--color-zinc-900)]"
                  : "md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0"
              }`}
            >
              {/* Header */}
              <div className="space-y-4">
                <div>
                  <h2 className="font-medium">{plan.name}</h2>
                  <span className="my-3 block text-2xl font-semibold">
                    {plan.price}
                  </span>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>

                <Button asChild variant={plan.buttonVariant} className="w-full">
                  <Link href="">Get Started</Link>
                </Button>
              </div>

              {/* Divider */}
              {!plan.highlight && <hr className="border-dashed" />}

              {/* Features */}
              {plan.highlight ? (
                <div>
                  <div className="text-sm font-medium">
                    Everything in free plus:
                  </div>
                  <ul className="mt-4 list-outside space-y-3 text-sm">
                    {plan.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="size-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <ul className="list-outside space-y-3 text-sm">
                  {plan.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
