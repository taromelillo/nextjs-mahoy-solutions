import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6">
          <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm text-secondary-foreground">
            Software Development Excellence
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
          We build exceptional web and fullstack applications
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          From landing pages to complex e-commerce platforms, we deliver modern,
          scalable solutions tailored to your business needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="text-base">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base bg-transparent"
          >
            Watch Demo
          </Button>
        </div>

        {/* Hero Image Placeholder */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <Image
            loading="eager"
            width={800}
            height={800}
            src="/dark-dashboard.png"
            alt="Mahoy Solutions Dashboard"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
