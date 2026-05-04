export function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="text-center mb-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
        {eyebrow}
      </p>
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="divider-line" />
    </div>
  );
}
