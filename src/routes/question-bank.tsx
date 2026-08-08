import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { PageBody, PageHeader } from "@/components/page-header";
import { QuestionPractice } from "@/components/question-practice";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DIFFICULTIES, questions, SUBJECTS, type Difficulty, type Subject } from "@/data/mock";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/question-bank")({
  head: () => ({
    meta: [
      { title: "JEE Question Bank — Filtered Practice | JEE Catalyst" },
      {
        name: "description",
        content:
          "Practice JEE Physics, Chemistry and Mathematics questions by chapter, difficulty and type with instant solutions.",
      },
      { property: "og:title", content: "JEE Question Bank | JEE Catalyst" },
      {
        property: "og:description",
        content: "Chapter-wise JEE practice with instant explanations and bookmarking.",
      },
    ],
  }),
  component: QuestionBank,
});

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

function QuestionBank() {
  const [subject, setSubject] = useState<Subject | "All">("All");
  const [chapter, setChapter] = useState("All");
  const [difficulty, setDifficulty] = useState<Difficulty | "All">("All");
  const [type, setType] = useState<"All" | "MCQ" | "Numerical">("All");
  const [query, setQuery] = useState("");

  const chapters = useMemo(() => {
    const list = questions
      .filter((q) => subject === "All" || q.subject === subject)
      .map((q) => q.chapter);
    return ["All", ...Array.from(new Set(list))];
  }, [subject]);

  const filtered = useMemo(
    () =>
      questions.filter(
        (q) =>
          (subject === "All" || q.subject === subject) &&
          (chapter === "All" || q.chapter === chapter) &&
          (difficulty === "All" || q.difficulty === difficulty) &&
          (type === "All" || q.type === type) &&
          (query.trim() === "" || q.text.toLowerCase().includes(query.toLowerCase())),
      ),
    [subject, chapter, difficulty, type, query],
  );

  const reset = () => {
    setSubject("All");
    setChapter("All");
    setDifficulty("All");
    setType("All");
    setQuery("");
  };

  return (
    <>
      <PageHeader
        title="Question Bank"
        subtitle="Filter by chapter and difficulty, attempt, and read the solution immediately. Every attempt counts towards your accuracy."
      />
      <PageBody className="grid gap-6 lg:grid-cols-[18rem_1fr] lg:items-start">
        <Card className="space-y-5 p-5 lg:sticky lg:top-24">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions…"
              aria-label="Search questions"
              className="pl-9"
            />
          </div>

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

          <Group label="Type">
            {(["All", "MCQ", "Numerical"] as const).map((t) => (
              <Chip key={t} active={type === t} onClick={() => setType(t)}>
                {t}
              </Chip>
            ))}
          </Group>

          <Button variant="outline" className="w-full" onClick={reset}>
            Clear filters
          </Button>
        </Card>

        <div className="min-w-0">
          <QuestionPractice key={`${subject}-${chapter}-${difficulty}-${type}-${query}`} questions={filtered} source="bank" />
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
