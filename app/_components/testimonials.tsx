import Image from "next/image";

const testimonials = [
  {
    quote:
      "StreamLine delivered our e-commerce site in record time. The platform is fast, secure, and our sales have increased by 40% since launch.",
    author: "Sarah Chen",
    role: "Founder at Urban Style Co.",
    avatar: "/professional-woman.png",
  },
  {
    quote:
      "They built our custom web app from scratch with a clean, intuitive interface. The team was professional and responsive throughout the entire project.",
    author: "Michael Rodriguez",
    role: "CEO at HealthTrack",
    avatar: "/professional-man.png",
  },
  {
    quote:
      "Our landing page conversion rate doubled after working with StreamLine. Their attention to detail and understanding of user experience is exceptional.",
    author: "Emily Watson",
    role: "Marketing Director at GrowthLab",
    avatar: "/professional-woman2.png",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="container mx-auto px-4 py-24 md:py-32 bg-secondary/30"
    >
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
          Trusted by businesses worldwide
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          See what our clients say about working with us.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-xl border border-border bg-card p-8"
          >
            <div className="mb-6">
              <svg
                className="h-8 w-8 text-muted-foreground/50"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-foreground mb-6 leading-relaxed">
              {testimonial.quote}
            </p>
            <div className="flex items-center gap-4">
              <Image
                width={40}
                height={40}
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.author}
                className="h-12 w-12 rounded-full"
              />
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
