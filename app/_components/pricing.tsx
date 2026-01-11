import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Landing Page",
    price: "1,500",
    description: "Perfect for startups and marketing campaigns",
    features: [
      "Responsive design",
      "SEO optimized",
      "Contact form integration",
      "1-3 sections",
      "2 rounds of revisions",
      "7-day delivery",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "E-commerce",
    price: "5,000",
    description: "Complete online store solution",
    features: [
      "Product catalog",
      "Shopping cart & checkout",
      "Payment gateway integration",
      "Admin dashboard",
      "Inventory management",
      "Order tracking",
      "3 rounds of revisions",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Fullstack App",
    price: "Custom",
    description: "Enterprise-grade custom applications",
    features: [
      "Custom backend & database",
      "User authentication",
      "API development",
      "Admin panel",
      "Third-party integrations",
      "Cloud deployment",
      "Unlimited revisions",
      "Ongoing support available",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="container mx-auto px-4 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
          Transparent project pricing
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Clear pricing for every type of project. Custom quotes available for
          complex requirements.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl border p-8 relative ${
              plan.popular
                ? "border-primary bg-card shadow-lg scale-105"
                : "border-border bg-card"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit">
                <span className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {plan.description}
              </p>
              <div className="flex items-baseline gap-1">
                {plan.price === "Custom" ? (
                  <span className="text-4xl font-bold">{plan.price}</span>
                ) : (
                  <>
                    <span className="text-sm text-muted-foreground">
                      Starting at
                    </span>
                    <span className="text-4xl font-bold ml-2">
                      ${plan.price}
                    </span>
                  </>
                )}
              </div>
            </div>

            <Button
              className="w-full mb-6"
              variant={plan.popular ? "default" : "outline"}
            >
              {plan.cta}
            </Button>

            <ul className="space-y-3">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
