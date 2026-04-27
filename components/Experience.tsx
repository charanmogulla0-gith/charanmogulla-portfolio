"use client";

import { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronDown } from "lucide-react";
import { experience } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";
import { cn } from "@/lib/utils";

export function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Career Journey" title="Professional Experience" />

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-border to-transparent" />

          <div className="space-y-6">
            {experience.map((job, i) => {
              const isOpen = open === i;
              return (
                <div key={job.company} className="relative pl-12 md:pl-16">
                  <div className="absolute left-2.5 md:left-4.5 top-6 size-3 rounded-full bg-accent shadow-[0_0_0_4px_rgb(139_92_246_/_0.15)]" />

                  <div className="glass rounded-2xl overflow-hidden transition-all">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full text-left p-6 flex flex-wrap gap-4 items-start justify-between"
                    >
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold">{job.role}</h3>
                        <div className="flex items-center gap-2 text-accent mt-1.5">
                          <Briefcase size={14} />
                          <span className="font-medium text-sm">{job.company}</span>
                        </div>
                        <p className="text-sm text-muted-foreground italic mt-3">
                          {job.summary}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2 text-xs">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-muted/50 font-mono">
                          <Calendar size={12} />
                          {job.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                          <MapPin size={12} />
                          {job.location}
                        </span>
                        <ChevronDown
                          size={16}
                          className={cn(
                            "text-muted-foreground transition-transform mt-1",
                            isOpen && "rotate-180",
                          )}
                        />
                      </div>
                    </button>

                    {isOpen && (
                      <ul className="px-6 pb-6 space-y-2.5 border-t border-border/50 pt-5 animate-fade-up">
                        {job.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex gap-3 text-sm text-muted-foreground"
                          >
                            <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
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
