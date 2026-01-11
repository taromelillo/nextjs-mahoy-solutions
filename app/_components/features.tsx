import { Globe, ShoppingCart, Code2, Database } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Landing Pages",
    description:
      "Convert visitors into customers with stunning, high-performance landing pages optimized for conversions and SEO.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Complete online stores with payment integration, inventory management, and seamless checkout experiences.",
  },
  {
    icon: Code2,
    title: "Web Applications",
    description:
      "Custom web apps built with modern frameworks. Responsive, fast, and designed to scale with your business.",
  },
  {
    icon: Database,
    title: "Fullstack Development",
    description:
      "End-to-end solutions with robust backends, databases, APIs, and authentication for enterprise-grade applications.",
  },
];

export function Features() {
  return (
    <section id="features" className="container mx-auto px-4 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
          Complete development services
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We specialize in building modern web solutions that drive business
          growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-8 hover:border-muted-foreground/50 transition-colors"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
