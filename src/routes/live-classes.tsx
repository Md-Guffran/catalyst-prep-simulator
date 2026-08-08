import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarClock, Clock, Video } from "lucide-react";
import { toast } from "sonner";
import { PageBody, PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SubjectBadge } from "@/components/badges";
import { getFaculty, liveClasses, type LiveClass } from "@/data/mock";
import { useAppState } from "@/lib/app-state";

export const Route = createFileRoute("/live-classes")({
  head: () => ({
    meta: [
      { title: "Live Classes Timetable | JEE Catalyst" },
      {
        name: "description",
        content:
          "Today's, this week's and upcoming live JEE classes with faculty, timings and one-tap reminders.",
      },
      { property: "og:title", content: "Live Classes | JEE Catalyst" },
      { property: "og:description", content: "Your weekly live class timetable with reminders." },
    ],
  }),
  component: LiveClassesPage,
});

function LiveClassesPage() {
  const [active, setActive] = useState<LiveClass | null>(null);

  const render = (bucket: LiveClass["bucket"]) => {
    const rows = liveClasses.filter((c) => c.bucket === bucket);
    if (rows.length === 0) {
      return (
        <Card className="grid place-items-center gap-2 p-12 text-center">
          <p className="font-display text-lg font-bold">No classes scheduled here</p>
          <p className="text-sm text-muted-foreground">Check the other tabs for your next session.</p>
        </Card>
      );
    }
    return (
      <div className="grid gap-4">
        {rows.map((c) => (
          <ClassRow key={c.id} item={c} onJoin={() => setActive(c)} />
        ))}
      </div>
    );
  };

  return (
    <>
      <PageHeader
        title="Live Classes"
        subtitle="Scheduled sessions with faculty. Set a reminder and join straight from your timetable."
      />
      <PageBody>
        <Tabs defaultValue="today">
          <TabsList>
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          </TabsList>
          <TabsContent value="today" className="mt-4">{render("today")}</TabsContent>
          <TabsContent value="week" className="mt-4">{render("week")}</TabsContent>
          <TabsContent value="upcoming" className="mt-4">{render("upcoming")}</TabsContent>
        </Tabs>
      </PageBody>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Video className="size-5 text-accent-foreground" /> Live Class
            </DialogTitle>
            <DialogDescription>
              Your class is scheduled to begin shortly. {active?.title} with{" "}
              {active ? getFaculty(active.facultyId)?.name : ""} at {active?.time}.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-2">
            <Button variant="outline" onClick={() => setActive(null)}>
              Close
            </Button>
            {active && (
              <Button asChild variant="gold">
                <Link to="/classroom/$classId" params={{ classId: active.id }}>
                  Enter Demo Classroom
                </Link>
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

function ClassRow({ item, onJoin }: { item: LiveClass; onJoin: () => void }) {
  const { hasReminder, toggleReminder } = useAppState();
  const teacher = getFaculty(item.facultyId)!;

  return (
    <Card className="grid gap-4 p-5 md:grid-cols-[1fr_auto] md:items-center">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <SubjectBadge subject={item.subject} />
          <span className="text-xs font-medium text-muted-foreground">{item.chapter}</span>
        </div>
        <h2 className="mt-2 font-display text-lg font-bold leading-snug">{item.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{teacher.name}</p>
        <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          <span className="flex items-center gap-1.5 font-semibold">
            <CalendarClock className="size-4 text-accent-foreground" aria-hidden /> {item.day} · {item.time}
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="size-4" aria-hidden /> {item.duration}
          </span>
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-sm font-medium">
          <Switch
            checked={hasReminder(item.id)}
            onCheckedChange={() => {
              const added = toggleReminder(item.id);
              toast[added ? "success" : "message"](added ? "Reminder set" : "Reminder removed");
            }}
            aria-label={`Reminder for ${item.title}`}
          />
          Reminder
        </label>
        <Button variant="gold" onClick={onJoin}>
          Join Class
        </Button>
      </div>
    </Card>
  );
}
