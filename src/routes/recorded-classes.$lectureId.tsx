import { createFileRoute, Link, notFound, useNavigate, useParams } from "@tanstack/react-router";
import { CheckCircle2, ChevronLeft, ChevronRight, Download, PlayCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SubjectBadge } from "@/components/badges";
import { getFaculty, lectures, subjectImage } from "@/data/mock";
import { useAppState } from "@/lib/app-state";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/recorded-classes/$lectureId")({
  loader: ({ params }) => {
    const lecture = lectures.find((l) => l.id === params.lectureId);
    if (!lecture) throw notFound();
    return { title: lecture.title, description: lecture.description };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Lecture unavailable | JEE Catalyst" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: `${loaderData.title} | JEE Catalyst` },
        { name: "description", content: loaderData.description.slice(0, 155) },
        { property: "og:title", content: `${loaderData.title} | JEE Catalyst` },
        { property: "og:description", content: loaderData.description.slice(0, 155) },
      ],
    };
  },
  component: LecturePage,
});

function LecturePage() {
  const { lectureId } = useParams({ from: "/recorded-classes/$lectureId" });
  const lecture = lectures.find((l) => l.id === lectureId)!;
  const teacher = getFaculty(lecture.facultyId)!;
  const { getLectureProgress, setLectureProgress } = useAppState();
  const navigate = useNavigate();
  const progress = getLectureProgress(lecture.id, lecture.progress);

  const chapterLectures = lectures.filter(
    (l) => l.subject === lecture.subject && l.chapter === lecture.chapter,
  );
  const index = chapterLectures.findIndex((l) => l.id === lecture.id);
  const prev = chapterLectures[index - 1];
  const next = chapterLectures[index + 1];

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <Link to="/recorded-classes" className="text-sm font-semibold text-muted-foreground hover:text-foreground">
        ← Back to library
      </Link>

      <div className="mt-4 grid gap-6 lg:grid-cols-[1.7fr_1fr]">
        <div className="min-w-0 space-y-5">
          <div className="relative overflow-hidden rounded-2xl border">
            <img
              src={subjectImage[lecture.subject]}
              alt=""
              width={960}
              height={600}
              className="aspect-video w-full object-cover"
            />
            <div className="absolute inset-0 grid place-items-center bg-navy-deep/55">
              <div className="text-center">
                <PlayCircle className="mx-auto size-16 text-navy-foreground" aria-hidden />
                <p className="mt-3 text-sm font-semibold text-navy-foreground/85">
                  Demo player — video streaming is not part of this demonstration build
                </p>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-navy-deep/80 px-4 py-3">
              <Progress value={progress} className="h-1.5" />
            </div>
          </div>

          <Card className="p-6">
            <SubjectBadge subject={lecture.subject} />
            <h1 className="mt-3 font-display text-2xl font-extrabold">{lecture.title}</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {teacher.name} · {lecture.chapter} · {lecture.duration}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{lecture.description}</p>

            <div className="mt-5 flex items-center gap-3">
              <Progress value={progress} className="h-2" />
              <span className="shrink-0 text-sm font-bold">{progress}%</span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button
                variant={progress === 100 ? "outline" : "gold"}
                onClick={() => {
                  setLectureProgress(lecture.id, 100);
                  toast.success("Lecture marked complete — progress updated");
                }}
              >
                <CheckCircle2 className="size-4" />
                {progress === 100 ? "Completed" : "Mark Complete"}
              </Button>
              <Button
                variant="outline"
                disabled={!prev}
                onClick={() =>
                  prev && navigate({ to: "/recorded-classes/$lectureId", params: { lectureId: prev.id } })
                }
              >
                <ChevronLeft className="size-4" /> Previous Lecture
              </Button>
              <Button
                variant="outline"
                disabled={!next}
                onClick={() =>
                  next && navigate({ to: "/recorded-classes/$lectureId", params: { lectureId: next.id } })
                }
              >
                Next Lecture <ChevronRight className="size-4" />
              </Button>
            </div>
          </Card>

          <Card className="flex flex-wrap items-center justify-between gap-4 p-6">
            <div>
              <h2 className="font-display text-lg font-bold">Lecture notes</h2>
              <p className="text-sm text-muted-foreground">
                Annotated PDF covering every derivation used in this session.
              </p>
            </div>
            <Button variant="outline" onClick={() => toast.success("Preparing your notes… (demo download)")}>
              <Download className="size-4" /> Download Lecture Notes
            </Button>
          </Card>
        </div>

        <aside>
          <Card className="p-0 lg:sticky lg:top-24">
            <div className="border-b px-5 py-4">
              <h2 className="font-display text-lg font-bold">Course curriculum</h2>
              <p className="text-xs text-muted-foreground">{lecture.chapter}</p>
            </div>
            <ul className="max-h-[32rem] overflow-y-auto">
              {chapterLectures.map((l) => {
                const p = getLectureProgress(l.id, l.progress);
                const current = l.id === lecture.id;
                return (
                  <li key={l.id}>
                    <Link
                      to="/recorded-classes/$lectureId"
                      params={{ lectureId: l.id }}
                      className={cn(
                        "flex gap-3 border-b px-5 py-3.5 text-sm last:border-0 hover:bg-muted/60",
                        current && "bg-accent/12",
                      )}
                    >
                      {p === 100 ? (
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
                      ) : (
                        <PlayCircle className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
                      )}
                      <span className="min-w-0">
                        <span className={cn("block font-medium", current && "text-accent-foreground")}>
                          {l.title}
                        </span>
                        <span className="text-xs text-muted-foreground">{l.duration} · {p}%</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Card>
        </aside>
      </div>
    </div>
  );
}
