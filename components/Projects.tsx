import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

const ACCENT_GLOW: Record<string, string> = {
  violet: "group-hover:shadow-violet-500/20",
  sky: "group-hover:shadow-sky-500/20",
  emerald: "group-hover:shadow-emerald-500/20",
  amber: "group-hover:shadow-amber-500/20",
};

const ACCENT_BADGE: Record<string, string> = {
  violet: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  sky: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  emerald: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  amber: "bg-amber-500/15 text-amber-300 border-amber-500/30",
};

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Portfolio" title="Featured Projects" />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`group glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-2xl ${ACCENT_GLOW[p.accent] ?? ""}`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${ACCENT_BADGE[p.accent] ?? ""}`}
                >
                  {p.badge}
                </span>
                {p.liveUrl && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                )}
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {p.blurb}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] border border-border/60 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/15 hover:bg-accent/25 text-accent text-sm transition-colors"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
                {p.repoUrl && (
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border hover:border-accent/50 text-sm transition-colors"
                  >
                    <GithubIcon size={14} /> Code
                  </a>
                )}
                <span className="ml-auto text-muted-foreground group-hover:text-accent transition-colors">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
