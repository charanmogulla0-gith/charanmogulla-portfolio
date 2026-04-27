import { ArrowRight, Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile, stats } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center pt-24 pb-20"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-border/60 bg-muted/30 text-xs font-mono">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for AI Engineering opportunities
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05]">
            <span className="block">{profile.name.split(" ")[0]}</span>
            <span className="block gradient-text">
              {profile.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-muted-foreground font-light">
            {profile.title} —{" "}
            <span className="text-foreground/80">{profile.tagline}</span>
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 h-11 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 text-white font-medium hover:shadow-xl hover:shadow-violet-500/30 transition-all"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 h-11 rounded-full border border-border bg-muted/40 hover:bg-muted/70 hover:border-accent/50 transition-colors"
            >
              <Mail size={16} /> Contact Me
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 px-5 h-11 rounded-full border border-border bg-muted/40 hover:bg-muted/70 hover:border-accent/50 transition-colors"
            >
              <FileDown size={16} /> Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-muted-foreground">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="size-10 grid place-items-center rounded-full border border-border hover:border-accent/60 hover:text-foreground transition-colors"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="size-10 grid place-items-center rounded-full border border-border hover:border-accent/60 hover:text-foreground transition-colors"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="size-10 grid place-items-center rounded-full border border-border hover:border-accent/60 hover:text-foreground transition-colors"
            >
              <Mail size={16} />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-semibold gradient-text">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
