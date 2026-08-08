import { useState } from "react";
import { Bookmark, BookmarkCheck, ChevronLeft, ChevronRight, CircleCheck, CircleX, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DifficultyBadge, SubjectBadge } from "@/components/badges";
import { cn } from "@/lib/utils";
import { useAppState } from "@/lib/app-state";
import type { Question } from "@/data/mock";

type Props = {
  questions: (Question & { year?: number; exam?: string; session?: string })[];
  source: "bank" | "pyq";
  emptyHint?: string;
};

export function QuestionPractice({ questions, source, emptyHint }: Props) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [attempted, setAttempted] = useState(0);
  const [correct, setCorrect] = useState(0);
  const { toggleBookmark, isBookmarked } = useAppState();

  const q = questions[Math.min(index, questions.length - 1)];

  if (!q) {
    return (
      <Card className="grid place-items-center gap-3 p-12 text-center">
        <p className="font-display text-lg font-bold">No questions match these filters</p>
        <p className="max-w-sm text-sm text-muted-foreground">
          {emptyHint ?? "Try widening your filters — clear the chapter or difficulty to see more questions."}
        </p>
      </Card>
    );
  }

  const goto = (i: number) => {
    setIndex(i);
    setSelected(null);
    setSubmitted(false);
    setRevealed(false);
  };

  const submit = () => {
    if (selected === null) {
      toast.error("Select an option first");
      return;
    }
    setSubmitted(true);
    setAttempted((a) => a + 1);
    if (selected === q.answer) {
      setCorrect((c) => c + 1);
      toast.success("Correct answer");
    } else {
      toast.error("Not quite — review the solution");
    }
  };

  const accuracy = attempted ? Math.round((correct / attempted) * 100) : 0;
  const showSolution = submitted || revealed;

  return (
    <div className="space-y-4">
      <Card className="flex flex-wrap items-center justify-between gap-4 p-4">
        <div className="min-w-0">
          <p className="text-xs font-medium text-muted-foreground">
            Question {index + 1} of {questions.length}
          </p>
          <Progress value={((index + 1) / questions.length) * 100} className="mt-2 h-2 w-48" />
        </div>
        <div className="flex items-center gap-6">
          <div>
            <p className="text-xs text-muted-foreground">Score</p>
            <p className="font-display text-lg font-bold">
              {correct}/{attempted}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Accuracy</p>
            <p className="font-display text-lg font-bold text-accent-foreground">{accuracy}%</p>
          </div>
        </div>
      </Card>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
        >
          <Card className="overflow-hidden p-0">
            <div className="flex flex-wrap items-center gap-2 border-b bg-muted/40 px-5 py-3">
              <span className="rounded-md bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">
                Q{index + 1}
              </span>
              <SubjectBadge subject={q.subject} />
              <DifficultyBadge level={q.difficulty} />
              <span className="text-xs font-medium text-muted-foreground">{q.chapter}</span>
              <span className="text-xs text-muted-foreground">· {q.type}</span>
              {q.year && (
                <span className="ml-auto text-xs font-semibold text-muted-foreground">
                  {q.exam} {q.year} · {q.session}
                </span>
              )}
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-base leading-relaxed font-medium">{q.text}</p>

              <div className="mt-5 grid gap-2.5" role="radiogroup" aria-label="Answer options">
                {q.options.map((opt, i) => {
                  const isAnswer = i === q.answer;
                  const isPicked = selected === i;
                  return (
                    <button
                      key={i}
                      role="radio"
                      aria-checked={isPicked}
                      disabled={submitted}
                      onClick={() => setSelected(i)}
                      className={cn(
                        "flex items-center gap-3 rounded-xl border p-3.5 text-left text-sm transition-all",
                        "hover:border-primary/40 hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        isPicked && !showSolution && "border-primary bg-primary/5",
                        showSolution && isAnswer && "border-success bg-success/10",
                        showSolution && isPicked && !isAnswer && "border-destructive bg-destructive/10",
                        submitted && "cursor-default",
                      )}
                    >
                      <span className="grid size-7 shrink-0 place-items-center rounded-lg border bg-card text-xs font-bold">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="min-w-0 flex-1">{opt}</span>
                      {showSolution && isAnswer && <CircleCheck className="size-5 shrink-0 text-success" />}
                      {showSolution && isPicked && !isAnswer && (
                        <CircleX className="size-5 shrink-0 text-destructive" />
                      )}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {showSolution && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 rounded-xl border border-accent/40 bg-accent/8 p-4">
                      <p className="flex items-center gap-2 text-sm font-bold">
                        <Lightbulb className="size-4 text-accent-foreground" />
                        Solution
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        Correct option: <strong className="text-foreground">{String.fromCharCode(65 + q.answer)}</strong>
                        . {q.explanation}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-wrap items-center gap-2 border-t bg-muted/30 px-5 py-3.5">
              {!submitted ? (
                <Button variant="gold" onClick={submit}>
                  Submit Answer
                </Button>
              ) : (
                <Button variant="gold" onClick={() => goto(Math.min(index + 1, questions.length - 1))}>
                  Next Question <ChevronRight className="size-4" />
                </Button>
              )}
              <Button variant="outline" onClick={() => setRevealed(true)} disabled={showSolution}>
                Reveal Solution
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const added = toggleBookmark(q.id, source);
                  toast[added ? "success" : "message"](added ? "Question bookmarked" : "Bookmark removed");
                }}
              >
                {isBookmarked(q.id) ? (
                  <>
                    <BookmarkCheck className="size-4" /> Saved
                  </>
                ) : (
                  <>
                    <Bookmark className="size-4" /> Bookmark
                  </>
                )}
              </Button>
              <div className="ml-auto flex gap-2">
                <Button variant="ghost" size="icon" aria-label="Previous question" disabled={index === 0} onClick={() => goto(index - 1)}>
                  <ChevronLeft className="size-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Next question"
                  disabled={index === questions.length - 1}
                  onClick={() => goto(index + 1)}
                >
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
