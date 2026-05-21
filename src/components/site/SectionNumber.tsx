type Props = {
  n: string;
  label: string;
  className?: string;
};

export function SectionNumber({ n, label, className }: Props) {
  return (
    <div className={`flex items-center gap-4 text-[10px] uppercase tracking-[0.35em] text-muted-foreground ${className ?? ""}`}>
      <span className="text-primary">{n}</span>
      <span className="h-px w-8 bg-border" />
      <span>{label}</span>
    </div>
  );
}
