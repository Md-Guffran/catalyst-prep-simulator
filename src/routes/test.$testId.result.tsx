import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { PageBody, PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ProgressRing } from "@/components/metrics";
import { mockTests, testResult } from "@/data/mock";

export const Route = createFileRoute("/test/$testId/result")({
  head: () => ({
    meta: [
      { title: "Mock Test Result & Analysis | JEE Catalyst" },
      { name: "description", content: "Section-wise score, accuracy and rank analysis for your mock test attempt." },
      { property: "og:title", content: "Mock Test Result | JEE Catalyst" },
      { property: "og:description", content: "Section-wise scoring and rank analysis." },
    ],
  }),
  component: ResultPage,
});

function ResultPage() {
  const { testId } = useParams({ from: "/test/$testId/result" });
  const test = mockTests.find((t) => t.id === testId);
  const r = testResult as Record<string, any>;
  const sections: { subject: string; score: number; total: number; accuracy: number }[] =
    r["sections"] ?? [];


  return (
    <>
      <PageHeader
        title="Test Result"
        subtitle={test?.title ?? "Mock test analysis"}
        actions={
          <Button asChild variant="outline">
            <Link to="/mock-tests">Back to tests</Link>
          </Button>
        }
      />
      <PageBody className="space-y-6">
        <Card className="grid gap-6 p-6 sm:grid-cols-[auto_1fr] sm:items-center">
          <ProgressRing value={Number(r.accuracy ?? 0)} label="Accuracy" size={140} />
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["Score", `${r.score ?? "—"}`],
              ["Total marks", `${r.totalMarks ?? test?.marks ?? "—"}`],
              ["Rank", `${r.rank ?? "—"}`],
              ["Percentile", `${r.percentile ?? "—"}`],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border bg-muted/30 p-4">
                <dd className="font-display text-xl font-extrabold">{value}</dd>
                <dt className="text-xs text-muted-foreground">{label}</dt>
              </div>
            ))}
          </dl>
        </Card>

        {sections.length > 0 && (
          <Card className="p-6">
            <h2 className="font-display text-lg font-bold">Section-wise performance</h2>
            <ul className="mt-4 space-y-4">
              {sections.map((s) => (
                <li key={s.subject}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{s.subject}</span>
                    <span className="font-bold">
                      {s.score}/{s.total} · {s.accuracy}%
                    </span>
                  </div>
                  <Progress value={s.accuracy} className="mt-1.5 h-2" />
                </li>
              ))}
            </ul>
          </Card>
        )}
      </PageBody>
    </>
  );
}
