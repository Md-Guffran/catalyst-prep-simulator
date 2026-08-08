import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, PlayCircle, Search } from "lucide-react";
import { PageBody, PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { getFaculty, lectures, subjectImage, SUBJECTS, type Subject } from "@/data/mock";
import { useAppState } from "@/lib/app-state";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/recorded-classes/")({
  head: () => ({
    meta: [
      { title: "Recorded Classes — Subject & Chapter Library | JEE Catalyst" },
      {
        name: "description",
        content:
          "A structured video library organised by subject, chapter and lecture with progress and completion tracking.",
      },
      { property: "og:title", content: "Recorded Classes | JEE Catalyst" },
      { property: "og:description", content: "Chapter-wise lecture library with progress tracking." },
    ],
  }),
  component: RecordedClasses,
});

function RecordedClasses() {
  const [subject, setSubject] = useState<Subject | "All">("All");
  const [query, setQuery] = useState("");
  const { getLectureProgress } = useAppState();

  const grouped = useMemo(() => {
    const filtered = lectures.filter(
      (l) =>
        (subject === "All" || l.subject === subject) &&
        (query.trim() === "" || l.title.toLowerCase().includes(query.toLowerCase()) || l.chapter.toLowerCase().includes(query.toLowerCase())),
    );
    const map = new Map<string, typeof lectures>();
    filtered.forEach((l) => {
      const key = `${l.subject} · ${l.chapter}`;
      map.set(key, [...(map.get(key) ?? []), l]);
    });
    return Array.from(map.entries());
  }, [subject, query]);

  return (
    <>
      <PageHeader
        title="Recorded Classes"
        subtitle="Subject → chapter → lecture. Pick up exactly where you stopped."
      />
      <PageBody className="space-y-6">
        <Card className="flex flex-wrap items-center gap-3 p-4">
          <div className="relative min-w-[14rem] flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search lectures or chapters…"
              aria-label="Search lectures"
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {(["All", ...SUBJECTS] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSubject(s as Subject | "All")}
                aria-pressed={subject === s}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                  subject === s
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </Card>

        {grouped.length === 0 ? (
          <Card className="grid place-items-center gap-3 p-14 text-center">
            <p className="font-display text-lg font-bold">No lectures found</p>
            <p className="text-sm text-muted-foreground">Try a different search or subject.</p>
            <Button variant="outline" onClick={() => { setQuery(""); setSubject("All"); }}>
              Clear filters
            </Button>
          </Card>
        ) : (
          grouped.map(([group, items]) => (
            <section key={group}>
              <h2 className="font-display text-xl font-bold">{group}</h2>
              <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((l) => {
                  const progress = getLectureProgress(l.id, l.progress);
                  return (
                    <Link key={l.id} to="/recorded-classes/$lectureId" params={{ lectureId: l.id }}>
                      <Card className="card-lift h-full overflow-hidden p-0">
                        <div className="relative">
                          <img
                            src={subjectImage[l.subject]}
                            alt=""
                            loading="lazy"
                            width={960}
                            height={600}
                            className="aspect-video w-full object-cover"
                          />
                          <span className="absolute inset-0 grid place-items-center bg-navy-deep/35">
                            <PlayCircle className="size-10 text-navy-foreground" aria-hidden />
                          </span>
                          <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-navy-deep/85 px-1.5 py-0.5 text-[11px] font-semibold text-navy-foreground">
                            <Clock className="size-3" aria-hidden /> {l.duration}
                          </span>
                          {progress === 100 && (
                            <span className="absolute left-2 top-2 flex items-center gap-1 rounded-md bg-success px-1.5 py-0.5 text-[11px] font-bold text-success-foreground">
                              <CheckCircle2 className="size-3" aria-hidden /> Completed
                            </span>
                          )}
                        </div>
                        <div className="p-4">
                          <p className="line-clamp-2 text-sm font-bold leading-snug">{l.title}</p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {getFaculty(l.facultyId)?.name}
                          </p>
                          <Progress value={progress} className="mt-3 h-1.5" />
                        </div>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))
        )}
      </PageBody>
    </>
  );
}
