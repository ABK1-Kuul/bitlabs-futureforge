import { Link } from "@tanstack/react-router";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <Link to="/" aria-label="BitLabs Technology — home" className="group flex items-center gap-3">
              <Logo height={32} className="transition-[filter] duration-500 ease-out group-hover:brightness-110" />
              <span className="font-display font-semibold text-lg">BitLabs Technology</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
              Building Technology That Moves Organizations Forward.
            </p>
            <p className="mt-3 text-xs font-mono uppercase tracking-widest text-muted-foreground/70">
              Addis Ababa, Ethiopia
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Github, label: "GitHub", href: "https://github.com" },
                { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
                { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                { Icon: Mail, label: "Email", href: "mailto:contact@bitlabsbuild.com" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="h-9 w-9 rounded-lg glass flex items-center justify-center hover:text-primary hover:border-primary/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`BitLabs on ${label}`}
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/products" className="hover:text-foreground">Products</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/resources" className="hover:text-foreground">Blog</Link></li>
              <li><Link to="/resources" className="hover:text-foreground">Case Studies</Link></li>
              <li><Link to="/resources" className="hover:text-foreground">Documentation</Link></li>
              <li><Link to="/resources" className="hover:text-foreground">Research</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} BitLabs Technology PLC. All rights reserved.</p>
          <p className="font-mono">crafted with precision · v1.0</p>
        </div>
      </div>
    </footer>
  );
}
