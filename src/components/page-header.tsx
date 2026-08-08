import type { ReactNode } from "react";

export function PageHeader({
  title,
  subtitle,
  actions,
  children,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="surface-navy border-b border-white/10">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:px-6 md:flex md:items-end md:justify-between">
        <div className="min-w-0">
          <h1 className="font-display text-3xl font-extrabold text-navy-foreground sm:text-4xl">{title}</h1>
          {subtitle && <p className="mt-2 max-w-2xl text-navy-foreground/70">{subtitle}</p>}
          {children}
        </div>
        {actions && <div className="flex shrink-0 flex-wrap gap-2">{actions}</div>}
      </div>
    </div>
  );
}

export function PageBody({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 py-8 sm:px-6 ${className}`}>{children}</div>;
}
