import { cn } from "@/lib/utils";

export function AuthShell({
  kicker,
  title,
  description,
  children,
}: {
  kicker: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-border bg-card px-6 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:px-10">
      <p className={cn("text-sm font-semibold text-primary")}>{kicker}</p>
      <h1 className="mt-3 font-heading text-[2rem] font-normal leading-tight text-foreground">
        {title}
      </h1>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-8">{children}</div>
    </section>
  );
}
