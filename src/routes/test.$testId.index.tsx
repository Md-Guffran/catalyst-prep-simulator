import { useEffect, useMemo, useState } from "react";
import { createFileRoute, useNavigate, useParams } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { mockTests, questions } from "@/data/mock";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/test/$testId/")({
  head: () => ({
    meta: [
      { title: "Mock Test in Progress | JEE Catalyst" },
      { name: "description", content: "Timed exam-pattern mock test with question palette and instant submission." },
      { property: "og:title", content: "Mock Test | JEE Catalyst" },
      { property: "og:description", content: "Timed exam-pattern mock test interface." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: TestRunner,
});

function TestRunner() {
  const { testId } = useParams({ from: "/test/$testId/" });
  const test = mockTests.find((t) => t.id === testId);
  const navigate = useNavigate();
  const paper = useMemo(() => questions.slice(0, 10), []);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [seconds, setSeconds] = useState(20 * 60);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  const q = paper[index]!;

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <h1 className="truncate font-display text-xl font-extrabold">{test?.title ?? "Mock Test"}</h1>
        <span className="flex shrink-0 items-center gap-2 rounded-xl bg-primary px-3 py-2 font-display text-lg font-bold text-primary-foreground tabular-nums">
          <Clock className="size-4" aria-hidden /> {mm}:{ss}
        </span>
      </div>
      <Progress value={((index + 1) / paper.length) * 100} className="mt-4 h-1.5" />

      <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_16rem]">
        <Card className="p-6">
          <p className="text-sm font-semibold text-muted-foreground">
            Question {index + 1} of {paper.length}
          </p>
          <p className="mt-3 text-base font-medium leading-relaxed">{q.text}</p>
          <div className="mt-5 grid gap-3">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setAnswers({ ...answers, [index]: i })}
                aria-pressed={answers[index] === i}
                className={cn(
                  "rounded-xl border p-4 text-left text-sm font-medium transition-colors",
                  answers[index] === i
                    ? "border-accent bg-accent/12"
                    : "border-border hover:border-primary/40 hover:bg-muted/50",
                )}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button variant="outline" disabled={index === 0} onClick={() => setIndex((i) => i - 1)}>
              Previous
            </Button>
            <Button
              variant="outline"
              disabled={index === paper.length - 1}
              onClick={() => setIndex((i) => i + 1)}
            >
              Next
            </Button>
            <Button
              variant="gold"
              className="ml-auto"
              onClick={() => navigate({ to: "/test/$testId/result", params: { testId } })}
            >
              Submit Test
            </Button>
          </div>
        </Card>

        <Card className="h-fit p-5">
          <h2 className="font-display text-base font-bold">Question palette</h2>
          <div className="mt-4 grid grid-cols-5 gap-2">
            {paper.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={cn(
                  "grid size-9 place-items-center rounded-lg border text-sm font-bold",
                  i === index && "ring-2 ring-accent",
                  answers[i] !== undefined
                    ? "border-success bg-success/15 text-success"
                    : "border-border text-muted-foreground",
                )}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
