import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, FileQuestion, Trophy } from "lucide-react";
import { PageBody, PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DifficultyBadge } from "@/components/badges";
import { mockTests } from "@/data/mock";

export const Route = createFileRoute("/mock-tests")({
  head: () => ({
    meta: [
      { title: "JEE Mock Tests — Full-Length Exam Pattern Papers | JEE Catalyst" },
      {
        name: "description",
        content:
          "Attempt full-length JEE Main and Advanced pattern mock tests with a live timer and detailed result analytics.",
      },
      { property: "og:title", content: "JEE Mock Tests | JEE Catalyst" },
      {
        property: "og:description",
        content: "Exam-pattern papers with timer, question palette and post-test analysis.",
      },
    ],
  }),
  component: MockTestsPage,
});

function MockTestsPage() {
  return (
    <>
      <PageHeader
        title="Mock Tests"
        subtitle="Sit the exam before the exam. Every paper is timed, scored and analysed section by section."
        actions={
          <Button asChild variant="gold">
            <Link to="/test/$testId/result" params={{ testId: "main-full-01" }}>
              <Trophy className="size-4" /> View last result
            </Link>
          </Button>
        }
      />
      <PageBody>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockTests.map((t) => (
            <Card key={t.id} className="card-lift flex h-full flex-col p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
                  {t.exam}
                </span>
                <DifficultyBadge level={t.difficulty} />
                {t.attempted && (
                  <span className="ml-auto flex items-center gap-1 text-xs font-semibold text-success">
                    <CheckCircle2 className="size-3.5" /> Attempted
                  </span>
                )}
              </div>
              <h2 className="mt-3 font-display text-lg font-bold leading-snug">{t.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{t.subjects}</p>
              <p className="mt-3 text-sm text-muted-foreground">{t.description}</p>

              <dl className="mt-5 grid grid-cols-3 gap-2 rounded-xl border bg-muted/30 p-3 text-center">
                <div>
                  <dd className="font-display text-base font-extrabold">{t.marks}</dd>
                  <dt className="text-[11px] text-muted-foreground">Marks</dt>
                </div>
                <div>
                  <dd className="flex items-center justify-center gap-1 font-display text-base font-extrabold">
                    <FileQuestion className="size-3.5" aria-hidden />
                    {t.questionCount}
                  </dd>
                  <dt className="text-[11px] text-muted-foreground">Questions</dt>
                </div>
                <div>
                  <dd className="flex items-center justify-center gap-1 font-display text-base font-extrabold">
                    <Clock className="size-3.5" aria-hidden />
                    {t.minutes}
                  </dd>
                  <dt className="text-[11px] text-muted-foreground">Minutes</dt>
                </div>
              </dl>

              <div className="mt-auto grid gap-2 pt-5">
                <Button asChild variant="gold">
                  <Link to="/test/$testId" params={{ testId: t.id }}>
                    Start Test
                  </Link>
                </Button>
                {t.attempted && (
                  <Button asChild variant="outline">
                    <Link to="/test/$testId/result" params={{ testId: t.id }}>
                      View result
                    </Link>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </PageBody>
    </>
  );
}
