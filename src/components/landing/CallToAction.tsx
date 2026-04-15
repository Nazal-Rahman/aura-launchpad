import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section id="contact" className="px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-16 text-center"
      >
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

        <h2 className="relative font-display text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          Ready to Upgrade Your Business?
        </h2>
        <p className="relative mt-4 text-lg text-primary-foreground/80">
          Let's create something remarkable together.
        </p>
        <div className="relative mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:nazalrahman14@gmail.com"
            className="inline-block rounded-full bg-white px-10 py-4 text-sm font-semibold text-foreground shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Email Us
          </a>
          <a
            href="https://wa.me/919207842646"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border-2 border-white/30 px-10 py-4 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-white/10"
          >
            WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
