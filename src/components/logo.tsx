import { Link } from "@tanstack/react-router";
import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className, tone = "navy" }: { className?: string; tone?: "navy" | "light" }) {
  return (
    <Link to="/" className={cn("group flex items-center gap-2.5", className)} aria-label="JEE Catalyst home">
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-gold)] shadow-[var(--shadow-gold)]">
        <Flame className="size-5 text-gold-foreground" aria-hidden />
      </span>
      <span
        className={cn(
          "font-display text-lg font-extrabold tracking-tight",
          tone === "light" ? "text-navy-foreground" : "text-foreground",
        )}
      >
        JEE <span className="text-gradient-gold">Catalyst</span>
      </span>
    </Link>
  );
}
