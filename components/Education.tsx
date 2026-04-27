import { GraduationCap, Award, MapPin, Calendar, BookOpen } from "lucide-react";
import { education, certifications } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Academic Background"
          title="Education & Certifications"
        />

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 rounded-xl bg-gradient-to-br from-violet-500/30 to-violet-500/5 grid place-items-center">
                <GraduationCap size={18} className="text-violet-300" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((e) => (
                <div
                  key={e.school}
                  className="glass rounded-2xl p-6 transition-all hover:-translate-y-0.5"
                >
                  <h4 className="font-semibold">{e.degree}</h4>
                  <p className="text-accent text-sm font-medium mt-0.5">
                    {e.field}
                  </p>
                  <p className="text-sm mt-2">{e.school}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={12} /> {e.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} /> {e.location}
                    </span>
                    <span className="text-emerald-400 font-medium">
                      GPA: {e.gpa}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 mt-3 text-xs text-muted-foreground">
                    <BookOpen size={12} className="mt-0.5 shrink-0" />
                    <span>{e.coursework.join(" · ")}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 rounded-xl bg-gradient-to-br from-sky-500/30 to-sky-500/5 grid place-items-center">
                <Award size={18} className="text-sky-300" />
              </div>
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((c) => (
                <div
                  key={c.title}
                  className="glass rounded-2xl p-5 flex items-center justify-between gap-4 transition-all hover:-translate-y-0.5"
                >
                  <div>
                    <h4 className="font-semibold">{c.title}</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {c.issuer}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md font-mono text-xs bg-sky-500/15 text-sky-300 border border-sky-500/30">
                    {c.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
