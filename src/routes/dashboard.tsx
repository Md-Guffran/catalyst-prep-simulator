import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CalendarClock,
  CheckCircle2,
  Flame,
  PlayCircle,
  Target,
  TrendingUp,
  Video,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CountUp, ProgressRing } from "@/components/metrics";
import { SubjectBadge } from "@/components/badges";
import {
  demoUser,
  getFaculty,
  lectures,
  liveClasses,
  subjectProgress,
  todaysFocus,
  topicsToRevise,
  weeklyActivity,
} from "@/data/mock";
import { useAppState } from "@/lib/app-state";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Student Dashboard | JEE Catalyst" },
      {
        name: "description",
        content:
          "Your JEE preparation workspace — daily focus, subject progress, upcoming live classes and weekly study activity.",
      },
      { property: "og:title", content: "Student Dashboard | JEE Catalyst" },
      {
        property: "og:description",
        content: "Daily focus, subject progress and performance insights in one workspace.",
      },
    ],
  }),
  component: Dashboard;
});

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

function Dashboard() {
  const { state, getLectureProgress } = useAppState();
  const continueLecture = lectures.find((l) => l.id === "phy-rot-04")!;
  const lectureProgress = getLectureProgress(continueLecture.id, continueLecture.progress);
  const nextClass = liveClasses[0]!;
  const nextClassFaculty = getFaculty(nextClass.facultyId)!;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:flex-wrap sm:justify-between"
      >
        <div className="min-w-0">
          <h1 className="truncate font-display text-2xl font-extrabold sm:text-3xl">
            {greeting()}, {state.profile.name} 👋
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Let's turn today's preparation into progress.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-2">
          <Flame className="size-4 text-accent-foreground" aria-hidden />
          <span className="text-sm font-bold">{demoUser.streak} day streak</span>
        </div>
      </motion.header>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.55fr_1fr]">
        {/* Left column */}
        <div className="space-y-6">
          <Card className="grid gap-6 p-6 sm:grid-cols-[auto_1fr] sm:items-center">
            <ProgressRing value={demoUser.overallProgress} label="Completed" />
            <div className="min-w-0">
              <h2 className="font-display text-lg font-bold">Overall course completion</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                You are ahead of your weekly plan by 4%. Keep Chemistry moving to balance all three subjects.
              </p>
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
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-lg font-bold">Today's Focus</h2>
              <span className="text-xs font-semibold text-muted-foreground">3 tasks · 80 min</span>
            </div>
            <ul className="mt-4 space-y-3">
              {todaysFocus.map((f) => (
                <li
                  key={f.id}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border bg-muted/30 p-4"
                >
                  <div className="min-w-0">
                    <p className="truncate font-semibold">{f.title}</p>
                    <p className="text-xs text-muted-foreground">{f.meta}</p>
                  </div>
                  <Button asChild size="sm" variant="outline">
                    <Link to={f.to}>{f.cta}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="overflow-hidden p-0">
            <div className="grid gap-4 p-6 sm:grid-cols-[auto_1fr] sm:items-center">
              <span className="grid size-14 place-items-center rounded-2xl bg-primary/6 text-primary">
                <PlayCircle className="size-7" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Continue learning
                </p>
                <h2 className="mt-1 font-display text-lg font-bold">
                  Rotational Motion — Lecture 08
                </h2>
                <p className="text-sm text-muted-foreground">
                  {continueLecture.chapter} · CDS Sir · {continueLecture.duration}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <Progress value={lectureProgress} className="h-2" />
                  <span className="shrink-0 text-xs font-bold">{lectureProgress}%</span>
                </div>
              </div>
            </div>
            <div className="border-t bg-muted/30 px-6 py-3.5">
              <Button asChild variant="gold">
                <Link to="/recorded-classes/$lectureId" params={{ lectureId: continueLecture.id }}>
                  Continue Learning <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-display text-lg font-bold">Weekly Activity</h2>
              <span className="text-xs font-semibold text-muted-foreground">Study minutes per day</span>
            </div>
            <div className="mt-5 h-64 w-full">
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
                  <Bar dataKey="minutes" name="Minutes" fill="var(--chart-1)" radius={[8, 8, 0, 0]} maxBarSize={44} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="font-display text-lg font-bold">Performance</h2>
            <dl className="mt-4 grid grid-cols-2 gap-3">
              {[
                { label: "Questions attempted", value: demoUser.questionsAttempted, icon: Target },
                { label: "Accuracy", value: demoUser.accuracy, suffix: "%", icon: TrendingUp },
                { label: "Tests completed", value: demoUser.testsCompleted, icon: CheckCircle2 },
                { label: "Study streak", value: demoUser.streak, suffix: " days", icon: Flame },
              ].map(({ label, value, suffix, icon: Icon }) => (
                <div key={label} className="rounded-xl border bg-muted/30 p-4">
                  <Icon className="size-4 text-accent-foreground" aria-hidden />
                  <dd className="mt-2 font-display text-xl font-extrabold">
                    <CountUp to={value} suffix={suffix ?? ""} />
                  </dd>
                  <dt className="text-xs text-muted-foreground">{label}</dt>
                </div>
              ))}
            </dl>
            <Button asChild variant="outline" className="mt-4 w-full">
              <Link to="/progress">View full analytics</Link>
            </Button>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2">
              <CalendarClock className="size-4 text-accent-foreground" aria-hidden />
              <h2 className="font-display text-lg font-bold">Upcoming Class</h2>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-4">
              <SubjectBadge subject={nextClass.subject} />
              <p className="mt-2.5 font-semibold leading-snug">{nextClass.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{nextClassFaculty.name}</p>
              <p className="mt-3 text-sm font-bold">
                {nextClass.day} · {nextClass.time}
                <span className="ml-2 font-normal text-muted-foreground">{nextClass.duration}</span>
              </p>
            </div>
            <div className="mt-4 grid gap-2">
              <Button asChild variant="gold">
                <Link to="/classroom/$classId" params={{ classId: nextClass.id }}>
                  <Video className="size-4" /> Join Class
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/live-classes">View timetable</Link>
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="font-display text-lg font-bold">Topics To Revise</h2>
            <ul className="mt-4 space-y-3">
              {topicsToRevise.map((t) => (
                <li key={t.topic} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                  <div className="min-w-0">
                    <p className="truncate font-semibold">{t.topic}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.subject} · {t.accuracy}% accuracy
                    </p>
                  </div>
                  <Button asChild size="sm" variant="outline">
                    <Link to="/question-bank">Review</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="surface-navy p-6">
            <BookOpen className="size-5 text-accent" aria-hidden />
            <h2 className="mt-3 font-display text-lg font-bold text-navy-foreground">
              Ready for a full-length test?
            </h2>
            <p className="mt-1.5 text-sm text-navy-foreground/70">
              Your last attempt was 12 days ago. A test now will keep your percentile projection accurate.
            </p>
            <Button asChild variant="gold" className="mt-4 w-full">
              <Link to="/mock-tests">Browse mock tests</Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
