import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="container mx-auto px-4 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center rounded-2xl border border-border bg-card p-12 md:p-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
          Ready to streamline your workflow?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Join thousands of teams already using StreamLine to build better
          products faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base bg-transparent"
          >
            Schedule Demo
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-6">
          No credit card required · 14-day free trial · Cancel anytime
        </p>
      </div>
    </section>
  );
}
