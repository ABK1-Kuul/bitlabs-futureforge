import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${
            scrolled ? "glass shadow-[0_8px_30px_rgba(0,0,0,0.4)]" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary glow flex items-center justify-center font-mono text-sm font-bold text-primary-foreground">
                B
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-primary blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
            </div>
            <span className="font-display font-semibold tracking-tight text-lg">
              BitLabs<span className="text-muted-foreground font-normal"> Technology</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
              >
                {({ isActive }) => (
                  <>
                    <span>{l.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-white/5 -z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity glow"
            >
              Get in touch
            </Link>
          </nav>

          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1"
            >
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm hover:bg-white/5"
                >
                  {l.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
