import { Link } from "@tanstack/react-router";
import { BookOpen, Home, LineChart, PencilRuler, User } from "lucide-react";

const items = [
  { label: "Home", to: "/", icon: Home },
  { label: "Learn", to: "/recorded-classes", icon: BookOpen },
  { label: "Practice", to: "/question-bank", icon: PencilRuler },
  { label: "Progress", to: "/progress", icon: LineChart },
  { label: "Profile", to: "/profile", icon: User },
];

export function BottomNav() {
  return (
    <nav
      aria-label="Primary mobile"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
    >
      <ul className="grid grid-cols-5">
        {items.map(({ label, to, icon: Icon }) => (
          <li key={to}>
            <Link
              to={to}
              className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium text-muted-foreground transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              <Icon className="size-5" aria-hidden />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
