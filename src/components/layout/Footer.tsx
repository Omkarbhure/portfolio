import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/Omkarbhure", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/omkar-bhure-022045363", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:hello@developer.dev", icon: Mail, label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Copyright */}
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">//</span> © {currentYear} DevOmkar
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
