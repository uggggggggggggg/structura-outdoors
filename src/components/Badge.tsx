export default function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-block rounded-full bg-brand-accent/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-dark ${className}`}
    >
      {children}
    </span>
  );
}
