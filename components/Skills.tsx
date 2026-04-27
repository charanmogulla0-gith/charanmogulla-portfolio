import {
  Brain,
  Code2,
  Database,
  Cloud,
  GitBranch,
  Wrench,
} from "lucide-react";
import { skillGroups } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

const ICONS = { Brain, Code2, Database, Cloud, GitBranch, Wrench } as const;

const COLOR_CLASSES: Record<string, string> = {
  violet: "from-violet-500/30 to-violet-500/5 text-violet-300",
  sky: "from-sky-500/30 to-sky-500/5 text-sky-300",
  teal: "from-teal-500/30 to-teal-500/5 text-teal-300",
  blue: "from-blue-500/30 to-blue-500/5 text-blue-300",
  orange: "from-orange-500/30 to-orange-500/5 text-orange-300",
  emerald: "from-emerald-500/30 to-emerald-500/5 text-emerald-300",
};

export function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Technical Expertise" title="Skills & Tech Stack" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((g) => {
            const Icon = ICONS[g.icon as keyof typeof ICONS];
            const colorClass = COLOR_CLASSES[g.color];
            return (
              <div
                key={g.title}
                className="glass rounded-2xl p-6 transition-all hover:-translate-y-0.5"
              >
                <div
                  className={`size-11 rounded-xl bg-gradient-to-br ${colorClass} grid place-items-center mb-5`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-lg mb-4">{g.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-border/60 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
