import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    text: "Working with Nova transformed our entire digital presence. The results exceeded every expectation.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Founder, GrowthLab",
    text: "The attention to detail is incredible. Our conversion rates jumped 40% within the first month.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CMO, BrightPath",
    text: "A truly premium experience from start to finish. They understood our vision perfectly.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by Our Clients
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass rounded-2xl p-8"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: r.rating }).map((_, si) => (
                  <Star key={si} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
