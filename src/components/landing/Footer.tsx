import { Instagram, Mail, Phone } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://instagram.com/nazzalll___", label: "Instagram" },
  { icon: Mail, href: "mailto:nazalrahman14@gmail.com", label: "Email" },
  { icon: Phone, href: "https://wa.me/919207842646", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-foreground font-display">
            Nova<span className="text-primary">.</span>
          </span>
        </div>
        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nova. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
