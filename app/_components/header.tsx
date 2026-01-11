// "use client";

import { Button } from "@/components/ui/button";

import { MobileNavbar } from "./navbar";

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 text-primary-foreground"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor" />
              </svg>
            </div>
            <span className="text-xl font-semibold">StreamLine</span>
          </div>

          {/* Desktop Navigation */}

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <MobileNavbar />
          {/* <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button> */}
        </div>

        {/* Mobile Navigation */}
        {/* {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <a
              href="#features"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </a>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        )} */}
      </div>
    </header>
  );
}
