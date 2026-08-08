import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BookOpen, Clock, FileQuestion, Search, Star } from "lucide-react";
import { PageBody, PageHeader } from "@/components/page-header";
import { SubjectBadge } from "@/components/badges";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  courses,
  EXAMS,
  facultyNameOf,
  inr,
  LEVELS,
  subjectImage,
  SUBJECTS,
  type Exam,
  type Level,
  type Subject,
} from "@/data/mock";
import { useAppState } from "@/lib/app-state";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "JEE Courses — Physics, Chemistry & Mathematics | JEE Catalyst" },
      {
        name: "description",
        content:
          "Browse structured JEE Main and Advanced courses with chapter-wise lectures, practice questions, PYQs and mock tests.",
      },
      { property: "og:title", content: "JEE Courses | JEE Catalyst" },
      {
        property: "og:description",
        content: "Structured JEE Main and Advanced courses taught by subject specialists.",
      },
    ],
  }),
  component: CoursesPage,
});

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
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

function CoursesPage() {
  const [subject, setSubject] = useState<Subject | "All">("All");
  const [exam, setExam] = useState<Exam | "All">("All");
  const [level, setLevel] = useState<Level | "All">("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      courses.filter(
        (c) =>
          (subject === "All" || c.subject === subject) &&
          (exam === "All" || c.exam === exam) &&
          (level === "All" || c.level === level) &&
          (query.trim() === "" ||
            c.title.toLowerCase().includes(query.toLowerCase()) ||
            facultyNameOf(c.facultyId).toLowerCase().includes(query.toLowerCase())),
      ),
    [subject, exam, level, query],
  );

  return (
    <>
      <PageHeader
        title="Courses"
        subtitle="Structured, chapter-wise preparation tracks for JEE Main and Advanced — built to be finished, not just watched."
      />
      <PageBody>
        <Card className="p-4">
          <div className="grid gap-4">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses or faculty…"
                aria-label="Search courses"
                className="pl-9"
              />
            </div>
            <FilterRow label="Subject">
              <Chip active={subject === "All"} onClick={() => setSubject("All")}>
                All
              </Chip>
              {SUBJECTS.map((s) => (
                <Chip key={s} active={subject === s} onClick={() => setSubject(s)}>
                  {s}
                </Chip>
              ))}
            </FilterRow>
            <FilterRow label="Exam">
              <Chip active={exam === "All"} onClick={() => setExam("All")}>
                All
              </Chip>
              {EXAMS.map((e) => (
                <Chip key={e} active={exam === e} onClick={() => setExam(e)}>
                  {e}
                </Chip>
              ))}
            </FilterRow>
            <FilterRow label="Level">
              <Chip active={level === "All"} onClick={() => setLevel("All")}>
                All
              </Chip>
              {LEVELS.map((l) => (
                <Chip key={l} active={level === l} onClick={() => setLevel(l)}>
                  {l}
                </Chip>
              ))}
            </FilterRow>
          </div>
        </Card>

        <p className="mt-6 text-sm text-muted-foreground">
          Showing <strong className="text-foreground">{filtered.length}</strong> of {courses.length} courses
        </p>

        {filtered.length === 0 ? (
          <Card className="mt-4 grid place-items-center gap-3 p-14 text-center">
            <p className="font-display text-lg font-bold">No courses match these filters</p>
            <p className="text-sm text-muted-foreground">Reset the filters to see the full catalogue.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSubject("All");
                setExam("All");
                setLevel("All");
                setQuery("");
              }}
            >
              Clear filters
            </Button>
          </Card>
        ) : (
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: Math.min(i * 0.03, 0.2) }}
              >
                <CourseCard id={c.id} />
              </motion.div>
            ))}
          </div>
        )}
      </PageBody>
    </>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2 sm:grid-cols-[5rem_1fr] sm:items-center">
      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export function CourseCard({ id }: { id: string }) {
  const course = courses.find((c) => c.id === id)!;
  const { isEnrolled } = useAppState();
  const enrolled = isEnrolled(course.id);
  const discount = Math.round(((course.mrp - course.price) / course.mrp) * 100);

  return (
    <Card className="card-lift flex h-full flex-col overflow-hidden p-0">
      <div className="relative">
        <img
          src={subjectImage[course.subject]}
          alt={`${course.subject} course artwork`}
          loading="lazy"
          width={960}
          height={600}
          className="aspect-[16/10] w-full object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-accent-foreground">
          {discount}% off
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <SubjectBadge subject={course.subject} />
          <span className="rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
            {course.exam}
          </span>
          <span className="rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
            {course.level}
          </span>
        </div>
        <h3 className="mt-3 font-display text-lg font-bold leading-snug">{course.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{facultyNameOf(course.facultyId)}</p>

        <dl className="mt-4 grid grid-cols-3 gap-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <BookOpen className="size-3.5" aria-hidden /> {course.lectures} lectures
          </div>
          <div className="flex items-center gap-1.5">
            <FileQuestion className="size-3.5" aria-hidden /> {course.questions.toLocaleString("en-IN")} Qs
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden /> {course.duration}
          </div>
        </dl>

        <div className="mt-4 flex items-center gap-1.5 text-sm">
          <Star className="size-4 fill-accent text-accent" aria-hidden />
          <span className="font-bold">{course.rating}</span>
          <span className="text-muted-foreground">({course.reviews.toLocaleString("en-IN")} reviews)</span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div>
            <p className="font-display text-xl font-extrabold">{inr(course.price)}</p>
            <p className="text-xs text-muted-foreground line-through">{inr(course.mrp)}</p>
          </div>
          <Button asChild variant={enrolled ? "outline" : "gold"}>
            <Link to="/courses/$courseId" params={{ courseId: course.id }}>
              {enrolled ? "Continue Learning" : "View Course"}
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
