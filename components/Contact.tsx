import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile, interests } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Get In Touch" title="Let's Work Together" />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m passionate about pushing the boundaries of what&apos;s
              possible with AI. Whether you&apos;re looking to build intelligent
              systems, optimize existing workflows, or explore new AI
              capabilities — I&apos;d love to connect.
            </p>

            <div className="glass rounded-2xl p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-4">
                Open to discussing
              </p>
              <ul className="space-y-2.5">
                {interests.map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <ArrowRight size={14} className="text-accent" /> {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-border/60 hover:border-accent/50 hover:bg-muted/40 transition-colors group"
              >
                <div className="size-10 rounded-lg bg-muted grid place-items-center group-hover:bg-accent/20 transition-colors">
                  <Mail size={16} className="text-accent" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>
                  <p className="text-sm">{profile.email}</p>
                </div>
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-border/60 hover:border-accent/50 hover:bg-muted/40 transition-colors group"
              >
                <div className="size-10 rounded-lg bg-muted grid place-items-center group-hover:bg-accent/20 transition-colors">
                  <Phone size={16} className="text-accent" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Phone
                  </p>
                  <p className="text-sm">{profile.phone}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border/60">
                <div className="size-10 rounded-lg bg-muted grid place-items-center">
                  <MapPin size={16} className="text-accent" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Location
                  </p>
                  <p className="text-sm">{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="size-11 grid place-items-center rounded-xl border border-border hover:border-accent/60 transition-colors"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="size-11 grid place-items-center rounded-xl border border-border hover:border-accent/60 transition-colors"
              >
                <GithubIcon size={18} />
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>

      <footer className="mt-24 border-t border-border/50 pt-8 pb-6 text-center text-xs text-muted-foreground font-mono">
        <p>
          © {new Date().getFullYear()} {profile.name} · Built with Next.js +
          Tailwind · Deployed on Vercel
        </p>
      </footer>
    </section>
  );
}
