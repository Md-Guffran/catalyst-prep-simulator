import { cn } from "@/lib/utils";
import type { Subject, Difficulty } from "@/data/mock";

const subjectStyles: Record<Subject, string> = {
  Physics: "bg-physics/10 text-physics border-physics/25",
  Chemistry: "bg-chemistry/10 text-chemistry border-chemistry/25",
  Mathematics: "bg-maths/10 text-maths border-maths/25",
};

const difficultyStyles: Record<Difficulty, string> = {
  Easy: "bg-success/10 text-success border-success/25",
  Medium: "bg-warning/15 text-warning-foreground border-warning/35",
  Hard: "bg-destructive/10 text-destructive border-destructive/25",
};

export function SubjectBadge({ subject, className }: { subject: Subject; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        subjectStyles[subject],
        className,
      )}
    >
      {subject}
    </span>
  );
}

export function DifficultyBadge({ level, className }: { level: Difficulty; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        difficultyStyles[level],
        className,
      )}
    >
      {level}
    </span>
  );
}
