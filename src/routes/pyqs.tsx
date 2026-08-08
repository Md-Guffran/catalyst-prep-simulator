import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageBody, PageHeader } from "@/components/page-header";
import { QuestionPractice } from "@/components/question-practice";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DIFFICULTIES,
  EXAMS,
  PYQ_YEARS,
  pyqs,
  SUBJECTS,
  type Difficulty,
  type Exam,
  type Subject,
} from "@/data/mock";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pyqs")({
  head: () => ({
    meta: [
      { title: "Previous Year Questions — JEE Main & Advanced | JEE Catalyst" },
      {
        name: "description",
        content:
          "Practice JEE previous year questions from 2020 to 2026, filtered by year, exam, subject, chapter and difficulty.",
      },
      { property: "og:title", content: "JEE Previous Year Questions | JEE Catalyst" },
      {
        property: "og:description",
        content: "Practice the questions that shaped the JEE, mapped chapter by chapter.",
      },
    ],
  }),
  component: PyqPage,
});

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-accent bg-accent text-accent-foreground"
          : "border-border bg-card text-muted-foreground hover:border-accent/50 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

function PyqPage() {
  const [year, setYear] = useState<number | "All">("All");
  const [exam, setExam] = useState<Exam | "All">("All");
  const [subject, setSubject] = useState<Subject | "All">("All");
  const [chapter, setChapter] = useState("All");
  const [difficulty, setDifficulty] = useState<Difficulty | "All">("All");

  const chapters = useMemo(() => {
    const list = pyqs.filter((q) => subject === "All" || q.subject === subject).map((q) => q.chapter);
    return ["All", ...Array.from(new Set(list))];
  }, [subject]);

  const filtered = useMemo(
    () =>
      pyqs.filter(
        (q) =>
          (year === "All" || q.year === year) &&
          (exam === "All" || q.exam === exam) &&
          (subject === "All" || q.subject === subject) &&
          (chapter === "All" || q.chapter === chapter) &&
          (difficulty === "All" || q.difficulty === difficulty),
      ),
    [year, exam, subject, chapter, difficulty],
  );

  return (
    <>
      <PageHeader
        title="Previous Year Questions"
        subtitle="Practice the questions that shaped the JEE. Demo questions written in the JEE style and mapped chapter-wise across seven years."
      />
      <PageBody className="grid gap-6 lg:grid-cols-[18rem_1fr] lg:items-start">
        <Card className="space-y-5 p-5 lg:sticky lg:top-24">
          <Group label="Year">
            <Chip active={year === "All"} onClick={() => setYear("All")}>
              All
            </Chip>
            {PYQ_YEARS.map((y) => (
              <Chip key={y} active={year === y} onClick={() => setYear(y)}>
                {y}
              </Chip>
            ))}
          </Group>
          <Group label="Exam">
            <Chip active={exam === "All"} onClick={() => setExam("All")}>
              All
            </Chip>
            {EXAMS.map((e) => (
              <Chip key={e} active={exam === e} onClick={() => setExam(e)}>
                {e}
              </Chip>
            ))}
          </Group>
          <Group label="Subject">
            <Chip active={subject === "All"} onClick={() => { setSubject("All"); setChapter("All"); }}>
              All
            </Chip>
            {SUBJECTS.map((s) => (
              <Chip key={s} active={subject === s} onClick={() => { setSubject(s); setChapter("All"); }}>
                {s}
              </Chip>
            ))}
          </Group>
          <Group label="Chapter">
            {chapters.map((c) => (
              <Chip key={c} active={chapter === c} onClick={() => setChapter(c)}>
                {c}
              </Chip>
            ))}
          </Group>
          <Group label="Difficulty">
            <Chip active={difficulty === "All"} onClick={() => setDifficulty("All")}>
              All
            </Chip>
            {DIFFICULTIES.map((d) => (
              <Chip key={d} active={difficulty === d} onClick={() => setDifficulty(d)}>
                {d}
              </Chip>
            ))}
          </Group>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              setYear("All");
              setExam("All");
              setSubject("All");
              setChapter("All");
              setDifficulty("All");
            }}
          >
            Clear filters
          </Button>
        </Card>

        <div className="min-w-0">
          <p className="mb-3 text-sm text-muted-foreground">
            <strong className="text-foreground">{filtered.length}</strong> previous year questions match your
            filters
          </p>
          <QuestionPractice
            key={`${year}-${exam}-${subject}-${chapter}-${difficulty}`}
            questions={filtered}
            source="pyq"
            emptyHint="No PYQs for this combination yet — try a different year or clear the chapter filter."
          />
        </div>
      </PageBody>
    </>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}
