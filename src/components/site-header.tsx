import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Bell, Check, Menu, User } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { notifications as allNotifications } from "@/data/mock";
import { useAppState } from "@/lib/app-state";
import { cn } from "@/lib/utils";

const publicNav = [
  { label: "Courses", to: "/courses" },
  { label: "PYQs", to: "/pyqs" },
  { label: "Faculty", to: "/faculty" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
];

const appNav = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Courses", to: "/courses" },
  { label: "Question Bank", to: "/question-bank" },
  { label: "PYQs", to: "/pyqs" },
  { label: "Mock Tests", to: "/mock-tests" },
  { label: "Live Classes", to: "/live-classes" },
  { label: "Recorded", to: "/recorded-classes" },
];

const appRoutes = [
  "/dashboard",
  "/progress",
  "/live-classes",
  "/recorded-classes",
  "/question-bank",
  "/mock-tests",
  "/test",
  "/leaderboard",
  "/bookmarks",
  "/notifications",
  "/profile",
  "/classroom",
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const isApp = appRoutes.some((r) => pathname.startsWith(r));
  const nav = isApp ? appNav : publicNav;

  return (
    <header className="sticky top-0 z-50 surface-navy border-b border-white/10">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 sm:px-6">
        <Logo tone="light" />

        <nav aria-label="Main" className="hidden min-w-0 items-center justify-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium text-navy-foreground/75 transition-colors hover:bg-white/10 hover:text-navy-foreground",
              )}
              activeProps={{ className: "bg-white/12 text-navy-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {isApp ? (
            <>
              <NotificationBell />
              <ProfileMenu />
            </>
          ) : (
            <>
              <Button asChild variant="ghost" className="hidden text-navy-foreground hover:bg-white/10 hover:text-navy-foreground sm:inline-flex">
                <Link to="/dashboard">Sign in</Link>
              </Button>
              <Button asChild variant="gold" className="hidden sm:inline-flex">
                <Link to="/onboarding">Start Learning</Link>
              </Button>
            </>
          )}

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-navy-foreground hover:bg-white/10 hover:text-navy-foreground lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-2 flex flex-col gap-1 px-4 pb-6" aria-label="Mobile">
                {[...appNav, ...publicNav]
                  .filter((v, i, arr) => arr.findIndex((x) => x.to === v.to) === i)
                  .map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                      activeProps={{ className: "bg-muted text-primary" }}
                    >
                      {item.label}
                    </Link>
                  ))}
                <Link
                  to="/leaderboard"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-muted"
                >
                  Leaderboard
                </Link>
                <Link
                  to="/bookmarks"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-muted"
                >
                  Bookmarks
                </Link>
                <Button asChild variant="gold" className="mt-3">
                  <Link to="/onboarding" onClick={() => setOpen(false)}>
                    Start Learning
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function NotificationBell() {
  const { isRead, markRead, markAllRead } = useAppState();
  const unread = allNotifications.filter((n) => !isRead(n.id));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative text-navy-foreground hover:bg-white/10 hover:text-navy-foreground"
          aria-label={`Notifications, ${unread.length} unread`}
        >
          <Bell className="size-5" />
          {unread.length > 0 && (
            <span className="absolute right-1.5 top-1.5 grid size-4 place-items-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
              {unread.length}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[22rem] p-0">
        <div className="flex items-center justify-between px-3 py-2.5">
          <DropdownMenuLabel className="p-0 text-sm">Notifications</DropdownMenuLabel>
          <button
            className="text-xs font-semibold text-primary hover:underline"
            onClick={() => markAllRead(allNotifications.map((n) => n.id))}
          >
            Mark all read
          </button>
        </div>
        <DropdownMenuSeparator className="m-0" />
        <div className="max-h-80 overflow-y-auto">
          {allNotifications.slice(0, 6).map((n) => (
            <button
              key={n.id}
              onClick={() => markRead(n.id)}
              className="flex w-full gap-3 border-b border-border/60 px-3 py-3 text-left last:border-0 hover:bg-muted/60"
            >
              <span
                className={cn(
                  "mt-1.5 size-2 shrink-0 rounded-full",
                  isRead(n.id) ? "bg-transparent" : "bg-accent",
                )}
                aria-hidden
              />
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold">{n.title}</span>
                <span className="mt-0.5 block line-clamp-2 text-xs text-muted-foreground">{n.body}</span>
                <span className="mt-1 block text-[11px] text-muted-foreground">{n.time}</span>
              </span>
            </button>
          ))}
        </div>
        <DropdownMenuSeparator className="m-0" />
        <DropdownMenuItem asChild className="justify-center py-2.5 text-sm font-semibold text-primary">
          <Link to="/notifications">View all notifications</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ProfileMenu() {
  const { state } = useAppState();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-1.5 py-1.5 text-navy-foreground transition-colors hover:bg-white/12"
          aria-label="Open profile menu"
        >
          <Avatar className="size-7">
            <AvatarFallback className="bg-accent text-xs font-bold text-accent-foreground">
              {state.profile.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="hidden pr-1.5 text-sm font-semibold sm:inline">{state.profile.name}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="text-sm font-semibold">{state.profile.name}</div>
          <div className="text-xs font-normal text-muted-foreground">{state.profile.target}</div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/profile">
            <User className="size-4" /> Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/progress">
            <Check className="size-4" /> Progress
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/bookmarks">Bookmarks</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/leaderboard">Leaderboard</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/">Back to site</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
