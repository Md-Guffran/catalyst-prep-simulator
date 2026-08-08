import { createFileRoute, Link } from "@tanstack/react-router";
import { BookmarkX } from "lucide-react";
import { PageBody, PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QuestionPractice } from "@/components/question-practice";
import { questions, pyqs } from "@/data/mock";
import { useAppState } from "@/lib/app-state";

export const Route = createFileRoute("/bookmarks")({
  head: () => ({
    meta: [
      { title: "Saved Questions & Bookmarks | JEE Catalyst" },
      { name: "description", content: "Every question you bookmarked, ready for a focused revision session." },
      { property: "og:title", content: "Bookmarks | JEE Catalyst" },
      { property: "og:description", content: "Your saved questions in one revision list." },
    ],
  }),
  component: BookmarksPage,
});

function BookmarksPage() {
  const { bookmarks } = useAppState();
  const all = [...questions, ...pyqs];
  const saved = all.filter((q) => bookmarks.includes(q.id));

  return (
    <>
      <PageHeader title="Bookmarks" subtitle="Your saved questions, kept for revision." />
      <PageBody>
        {saved.length === 0 ? (
          <Card className="grid place-items-center gap-3 p-14 text-center">
            <BookmarkX className="size-8 text-muted-foreground" aria-hidden />
            <p className="font-display text-lg font-bold">Nothing saved yet</p>
            <p className="max-w-sm text-sm text-muted-foreground">
              Tap the bookmark icon on any question to keep it here for later revision.
            </p>
            <Button asChild variant="gold">
              <Link to="/question-bank">Browse question bank</Link>
            </Button>
          </Card>
        ) : (
          <div className="space-y-5">
            {saved.map((q, i) => (
              <QuestionPractice key={q.id} question={q} index={i} total={saved.length} />
            ))}
          </div>
        )}
      </PageBody>
    </>
  );
}
