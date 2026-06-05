export function SectionNumber({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center gap-4 text-[10px] uppercase tracking-[0.35em] text-muted-foreground ${className ?? ""}`}
    >
      <span className="h-px w-8 bg-primary/40" />
      <span>{label}</span>
    </div>
  );
}
