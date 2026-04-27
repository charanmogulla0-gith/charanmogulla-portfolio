import { Brain, Cog, Cloud, Database, MapPin, Sparkles } from "lucide-react";
import { about, capabilities, profile } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

const ICONS = { Brain, Cog, Cloud, Database } as const;

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="About Me" title={about.heading} />

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {about.paragraph}
            </p>
            <ul className="space-y-3">
              {about.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <Sparkles
                    size={18}
                    className="shrink-0 mt-1 text-accent"
                  />
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/40 text-sm">
                <MapPin size={14} className="text-accent" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/40 text-sm">
                <Sparkles size={14} className="text-accent" />
                5+ Years in AI/ML
              </span>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            {capabilities.map((c) => {
              const Icon = ICONS[c.icon as keyof typeof ICONS];
              return (
                <div
                  key={c.title}
                  className="glass rounded-2xl p-5 transition-all hover:-translate-y-0.5"
                >
                  <div className="size-10 rounded-xl bg-accent/15 grid place-items-center mb-4">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {c.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
