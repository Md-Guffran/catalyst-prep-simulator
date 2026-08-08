import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getFaculty, liveClasses } from "@/data/mock";

export const Route = createFileRoute("/classroom/$classId")({
  head: () => ({
    meta: [
      { title: "Live Classroom (Demo) | JEE Catalyst" },
      { name: "description", content: "Demo live classroom view for a scheduled JEE Catalyst session." },
      { property: "og:title", content: "Live Classroom | JEE Catalyst" },
      { property: "og:description", content: "Demo classroom for a scheduled live session." },
    ],
  }),
  component: Classroom,
});

function Classroom() {
  const { classId } = useParams({ from: "/classroom/$classId" });
  const item = liveClasses.find((c) => c.id === classId);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Card className="grid place-items-center gap-4 p-14 text-center">
        <span className="grid size-16 place-items-center rounded-2xl bg-[image:var(--gradient-gold)]">
          <Video className="size-7 text-gold-foreground" aria-hidden />
        </span>
        <h1 className="font-display text-2xl font-extrabold">
          {item ? item.title : "Live session"}
        </h1>
        <p className="max-w-md text-sm text-muted-foreground">
          {item
            ? `${getFaculty(item.facultyId)?.name} · ${item.day} at ${item.time}. `
            : ""}
          Live streaming is not part of this demonstration build.
        </p>
        <Button asChild variant="gold">
          <Link to="/live-classes">Back to timetable</Link>
        </Button>
      </Card>
    </div>
  );
}
