import { createFileRoute } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TrendingDown, TrendingUp } from "lucide-react";
import { PageBody, PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ProgressRing, CountUp } from "@/components/metrics";
import { SubjectBadge } from "@/components/badges";
import {
  accuracyTrend,
  chapterProgress,
  demoUser,
  strongTopics,
  subjectProgress,
  SUBJECTS,
  topicsToRevise,
  weeklyActivity,
} from "@/data/mock";

export const Route = createFileRoute("/progress")({
  head: () => ({
    meta: [
      { title: "Progress Tracker — Accuracy & Completion | JEE Catalyst" },
      {
        name: "description",
        content:
          "Chapter-level completion, accuracy trends and topic strength across Physics, Chemistry and Mathematics.",
      },
      { property: "og:title", content: "Progress Tracker | JEE Catalyst" },
      {
        property: "og:description",
        content: "See exactly which chapters are finished and which topics still need revision.",
      },
    ],
  }),
  component: ProgressPage,
});

const donutColors = ["var(--chart-4)", "var(--chart-3)", "var(--chart-5)"];

function ProgressPage() {
  const donutData = subjectProgress.map((s) => ({ name: s.subject, value: s.value }));

  return (
    <>
      <PageHeader
        title="Progress Tracker"
        subtitle="Everything you have completed, everything you have attempted, and exactly what remains."
      />
      <PageBody className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <Card className="grid gap-6 p-6 sm:grid-cols-[auto_1fr] sm:items-center">
            <ProgressRing value={demoUser.overallProgress} label="Overall" size={140} />
            <div>
              <h2 className="font-display text-lg font-bold">Course completion</h2>
              <div className="mt-4 space-y-3">
                {subjectProgress.map((s) => (
                  <div key={s.subject}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{s.subject}</span>
                      <span className="font-bold">{s.value}%</span>
                    </div>
                    <Progress value={s.value} className="mt-1.5 h-2" />
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="font-display text-lg font-bold">Performance summary</h2>
            <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                ["Questions attempted", demoUser.questionsAttempted, ""],
                ["Correct", demoUser.questionsCorrect, ""],
                ["Accuracy", demoUser.accuracy, "%"],
                ["Tests completed", demoUser.testsCompleted, ""],
              ].map(([label, value, suffix]) => (
                <div key={label as string} className="rounded-xl border bg-muted/30 p-4">
                  <dd className="font-display text-xl font-extrabold">
                    <CountUp to={value as number} suffix={suffix as string} />
                  </dd>
                  <dt className="text-xs text-muted-foreground">{label as string}</dt>
                </div>
              ))}
              <div className="rounded-xl border bg-muted/30 p-4">
                <dd className="font-display text-xl font-extrabold">{demoUser.averageScore}</dd>
                <dt className="text-xs text-muted-foreground">Average test score</dt>
              </div>
              <div className="rounded-xl border bg-muted/30 p-4">
                <dd className="font-display text-xl font-extrabold">
                  <CountUp to={demoUser.streak} suffix=" days" />
                </dd>
                <dt className="text-xs text-muted-foreground">Current streak</dt>
              </div>
            </dl>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="p-6">
            <h2 className="font-display text-lg font-bold">Subject split</h2>
            <div className="mt-2 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={donutData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={54}
                    outerRadius={84}
                    paddingAngle={3}
                    stroke="none"
                  >
                    {donutData.map((_, i) => (
                      <Cell key={i} fill={donutColors[i % donutColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid var(--border)",
                      background: "var(--card)",
                      fontSize: 12,
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="mt-2 space-y-1.5">
              {donutData.map((d, i) => (
                <li key={d.name} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <span
                      className="size-2.5 rounded-full"
                      style={{ background: donutColors[i % donutColors.length] }}
                      aria-hidden
                    />
                    {d.name}
                  </span>
                  <span className="font-bold">{d.value}%</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 lg:col-span-2">
            <h2 className="font-display text-lg font-bold">Accuracy trend</h2>
            <p className="text-xs text-muted-foreground">Rolling weekly accuracy across all practice</p>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={accuracyTrend} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                  <XAxis dataKey="week" tickLine={false} axisLine={false} fontSize={12} stroke="var(--muted-foreground)" />
                  <YAxis domain={[50, 100]} tickLine={false} axisLine={false} fontSize={12} stroke="var(--muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid var(--border)",
                      background: "var(--card)",
                      fontSize: 12,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="accuracy"
                    stroke="var(--chart-1)"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "var(--chart-1)" }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="font-display text-lg font-bold">Weekly study time & questions</h2>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyActivity} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                <XAxis dataKey="day" tickLine={false} axisLine={false} fontSize={12} stroke="var(--muted-foreground)" />
                <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--muted-foreground)" />
                <Tooltip
                  cursor={{ fill: "var(--muted)" }}
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid var(--border)",
                    background: "var(--card)",
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="minutes" name="Minutes" fill="var(--chart-2)" radius={[8, 8, 0, 0]} maxBarSize={28} />
                <Bar dataKey="questions" name="Questions" fill="var(--chart-1)" radius={[8, 8, 0, 0]} maxBarSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-3">
          {SUBJECTS.map((subject) => (
            <Card key={subject} className="p-6">
              <SubjectBadge subject={subject} />
              <h2 className="mt-3 font-display text-lg font-bold">Chapter progress</h2>
              <ul className="mt-4 space-y-3">
                {chapterProgress
                  .filter((c) => c.subject === subject)
                  .map((c) => (
                    <li key={c.chapter}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="truncate pr-3">{c.chapter}</span>
                        <span className="shrink-0 font-bold">{c.value}%</span>
                      </div>
                      <Progress value={c.value} className="mt-1.5 h-1.5" />
                    </li>
                  ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold">
              <TrendingUp className="size-5 text-success" aria-hidden /> Strong topics
            </h2>
            <ul className="mt-4 space-y-3">
              {strongTopics.map((t) => (
                <li key={t.topic} className="flex items-center justify-between rounded-xl border border-success/25 bg-success/6 p-4">
                  <div>
                    <p className="font-semibold">{t.topic}</p>
                    <p className="text-xs text-muted-foreground">{t.subject}</p>
                  </div>
                  <span className="font-display text-lg font-bold text-success">{t.accuracy}%</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold">
              <TrendingDown className="size-5 text-destructive" aria-hidden /> Needs revision
            </h2>
            <ul className="mt-4 space-y-3">
              {topicsToRevise.map((t) => (
                <li
                  key={t.topic}
                  className="flex items-center justify-between rounded-xl border border-destructive/25 bg-destructive/6 p-4"
                >
                  <div>
                    <p className="font-semibold">{t.topic}</p>
                    <p className="text-xs text-muted-foreground">{t.subject}</p>
                  </div>
                  <span className="font-display text-lg font-bold text-destructive">{t.accuracy}%</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </PageBody>
    </>
  );
}
