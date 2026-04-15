import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Showcase from "@/components/landing/Showcase";
import Testimonials from "@/components/landing/Testimonials";
import CallToAction from "@/components/landing/CallToAction";
import Footer from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Nova — Premium Digital Solutions" },
      { name: "description", content: "We craft digital experiences that elevate your brand, captivate your audience, and drive real growth." },
      { property: "og:title", content: "Nova — Premium Digital Solutions" },
      { property: "og:description", content: "We craft digital experiences that elevate your brand, captivate your audience, and drive real growth." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
