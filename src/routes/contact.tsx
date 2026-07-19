import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check, Github, Twitter, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — BitLabs Technology" },
      { name: "description", content: "Get in touch with BitLabs Technology PLC. Request a product demo, consult on digital transformation, or start a new software project with our team." },
      { name: "keywords", content: "contact BitLabs, request product demo, software consulting, hire developers, office Addis Ababa" },
      { property: "og:url", content: "https://bitlabsbuild.com/contact" },
      { property: "og:title", content: "Contact Us — BitLabs Technology" },
      { property: "og:description", content: "Get in touch with BitLabs Technology PLC. Request a product demo, consult on digital transformation, or start a new software project with our team." },
    ],
    links: [
      { rel: "canonical", href: "https://bitlabsbuild.com/contact" },
    ],
  }),
  component: Contact,
});

function Field({
  label, name, type = "text", required, value, onChange, textarea,
}: {
  label: string; name: string; type?: string; required?: boolean;
  value: string; onChange: (v: string) => void; textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const Comp: any = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <label className={`absolute left-4 transition-all pointer-events-none font-mono text-xs ${focused || value ? "-top-2 px-1 bg-background text-primary" : "top-3.5 text-muted-foreground"
        }`}>
        {label}{required && " *"}
      </label>
      <Comp
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={textarea ? 5 : undefined}
        className="w-full px-4 py-3.5 rounded-xl bg-input/40 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all resize-none"
      />
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <section className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block text-xs font-mono uppercase tracking-widest text-primary mb-4">Contact</div>
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
          Let's build something <span className="text-gradient">extraordinary</span>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Tell us about your project. We'll reply within one business day.
        </p>
      </section>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Form */}
        <section className="lg:col-span-3">
          <h2 className="sr-only">Contact Form</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 md:p-10 rounded-3xl glass relative overflow-hidden"
          >
            <form onSubmit={submit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" name="name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                <Field label="Email" name="email" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              </div>
              <Field label="Company" name="company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
              <Field label="How can we help?" name="message" textarea required value={form.message} onChange={(v) => setForm({ ...form, message: v })} />

              <button
                type="submit"
                disabled={sent}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-medium animate-pulse-glow disabled:opacity-70"
              >
                {sent ? <><Check className="h-4 w-4" /> Sent — we'll be in touch</> : <>Send message <Send className="h-4 w-4" /></>}
              </button>
            </form>

            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-x-0 bottom-0 h-1 bg-gradient-primary"
                />
              )}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Info */}
        <section className="lg:col-span-2 space-y-4">
          <h2 className="sr-only">Contact Information & Links</h2>
          {[
            { icon: Mail, label: "Email", value: "contact@bitlabsbuild.com" },
            { icon: Phone, label: "Phone", value: "+251 926 306 048\n+251 934 455 338" },
            { icon: MapPin, label: "Office", value: "Siraj Bldg, Girar, Addis Ababa" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-2xl glass flex items-center gap-4"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <item.icon className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{item.label}</div>
                <div className="font-medium whitespace-pre-line">{item.value}</div>
              </div>
            </motion.div>
          ))}

          {/* Google Map */}
          <div className="rounded-2xl glass overflow-hidden aspect-[4/3] border border-border/50">
            <iframe
              title="BitLabs Location Map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                "XMMM+275, Unnamed Road, Addis Ababa (Siraj Bldg | Girar | ሲራጅ ህንፃ | ሲራጅ ህንጻ | ግራር)"
              )}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full border-0 dark:invert-[90%] dark:hue-rotate-180 dark:brightness-[85%] dark:contrast-[90%]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex gap-3">
            {[
              { Icon: Github, label: "GitHub", href: "https://github.com" },
              { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
              { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit BitLabs on ${label}`}
                className="flex-1 h-12 rounded-xl glass flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
