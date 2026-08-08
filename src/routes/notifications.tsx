import { createFileRoute } from "@tanstack/react-router";
import { Bell, CheckCheck } from "lucide-react";
import { PageBody, PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { notifications } from "@/data/mock";
import { useAppState } from "@/lib/app-state";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/notifications")({
  head: () => ({
    meta: [
      { title: "Notifications — Classes, Tests & Announcements | JEE Catalyst" },
      { name: "description", content: "Class reminders, test results and announcements from your faculty." },
      { property: "og:title", content: "Notifications | JEE Catalyst" },
      { property: "og:description", content: "All your class and test updates in one place." },
    ],
  }),
  component: NotificationsPage,
});

function NotificationsPage() {
  const { isRead, markRead, markAllRead } = useAppState();

  return (
    <>
      <PageHeader
        title="Notifications"
        subtitle="Class reminders, results and announcements."
        actions={
          <Button variant="outline" onClick={() => markAllRead(notifications.map((n) => n.id))}>
            <CheckCheck className="size-4" /> Mark all as read
          </Button>
        }
      />
      <PageBody>
        <div className="space-y-3">
          {notifications.map((n) => {
            const read = isRead(n.id);
            return (
              <Card
                key={n.id}
                onClick={() => markRead(n.id)}
                className={cn(
                  "flex cursor-pointer gap-4 p-5 transition-colors hover:bg-muted/40",
                  !read && "border-accent/40 bg-accent/8",
                )}
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10">
                  <Bell className="size-4.5 text-primary" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold leading-snug">{n.title}</p>
                    <span className="shrink-0 text-xs text-muted-foreground">{n.time}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{n.body}</p>
                </div>
                {!read && <span className="mt-2 size-2 shrink-0 rounded-full bg-accent" aria-label="Unread" />}
              </Card>
            );
          })}
        </div>
      </PageBody>
    </>
  );
}
