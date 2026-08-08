import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookMarked,
  CalendarCheck,
  ClipboardList,
  GraduationCap,
  Layers,
  LineChart,
  Quote,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { faculty, testimonials } from "@/data/mock";
import { SubjectBadge } from "@/components/badges";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JEE Catalyst — Crack JEE with a system built around your progress" },
      {
        name: "description",
        content:
          "Structured courses, PYQs, practice, live classes and measurable progress for JEE Main and Advanced aspirants — all in one focused learning experience.",
      },
      { property: "og:title", content: "JEE Catalyst — Turn preparation into progress" },
      {
        property: "og:description",
        content:
          "Structured learning, targeted practice, PYQs, live classes and performance insights for serious JEE aspirants.",
      },
    ],
  }),
  component: Landing,
});

const credibility = [
  { icon: Layers, label: "Structured JEE Preparation" },
  { icon: GraduationCap, label: "Expert Faculty" },
  { icon: BookMarked, label: "PYQ-Based Practice" },
  { icon: LineChart, label: "Progress Tracking" },
  { icon: ClipboardList, label: "Mock Tests" },
];

const features = [
  {
    icon: Layers,
    title: "Structured Preparation",
    body: "A single ordered path through the syllabus — chapter by chapter, with prerequisites handled before difficulty increases.",
  },
  {
    icon: Target,
    title: "Practice That Matters",
    body: "Every chapter ends in graded question sets built to the actual exam pattern, not a pile of unsorted problems.",
  },
  {
    icon: BarChart3,
    title: "Track Every Milestone",
    body: "Chapter completion, accuracy trends and topic-level strength are recorded automatically as you study.",
  },
  {
    icon: GraduationCap,
    title: "Learn From Expert Faculty",
    body: "Concept-first teaching from subject specialists, with live doubt sessions and problem-solving workshops.",
  },
  {
    icon: BookMarked,
    title: "Master Previous Year Questions",
    body: "Seven years of PYQs mapped chapter-wise so you always know which patterns repeat and how they are framed.",
  },
  {
    icon: CalendarCheck,
    title: "Stay Consistent",
    body: "Daily focus plans, streaks and revision reminders that keep momentum on the days motivation runs out.",
  },
];

const showcase = [
  { title: "Student dashboard", body: "Daily focus, streaks and a live view of overall completion." },
  { title: "Course page", body: "Chapter-wise syllabus with lectures, PYQs, tests and notes." },
  { title: "Question bank", body: "Filterable practice with instant solutions and bookmarking." },
  { title: "Progress analytics", body: "Accuracy trends and topic strength across all three subjects." },
  { title: "Mock test results", body: "Score, percentile, subject split and a revision plan." },
];

function Landing() {
  return (
    <>
      {/* Hero */}
      <section className="surface-navy grid-noise relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent">
              <Sparkles className="size-3.5" /> Turn preparation into progress
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-navy-foreground sm:text-5xl lg:text-[3.4rem]">
              Crack JEE with a preparation system built around your{" "}
              <span className="text-gradient-gold">progress.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
              Structured learning, targeted practice, PYQs, live classes and performance insights
              designed to help serious JEE aspirants prepare with clarity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg">
                <Link to="/onboarding">
                  Start Learning <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-white/5 text-navy-foreground hover:bg-white/12"
              >
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-navy-foreground hover:bg-white/10 hover:text-navy-foreground"
              >
                <Link to="/pyqs">Explore PYQs</Link>
              </Button>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6">
              {[
                ["3 subjects", "Fully structured"],
                ["7 years", "Of mapped PYQs"],
                ["48 tests", "Exam-pattern series"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-display text-xl font-bold text-accent">{k}</dt>
                  <dd className="text-xs text-navy-foreground/65">{v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-accent/10 blur-3xl" aria-hidden />
            <img
              src={heroDashboard}
              alt="JEE Catalyst student dashboard showing overall progress, subject completion and weekly study activity"
              width={1408}
              height={1008}
              className="relative w-full rounded-2xl border border-white/10 shadow-[var(--shadow-lift)]"
            />
          </motion.div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="border-b bg-card">
        <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 py-6 sm:px-6">
          {credibility.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2.5 text-sm font-semibold text-muted-foreground">
              <Icon className="size-4 text-accent-foreground" aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Why JEE Catalyst"
          title="A preparation system, not a video library"
          body="Everything on the platform exists to move one number: how much of the syllabus you have genuinely mastered."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <Card className="card-lift h-full border-border/70 p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-primary/6 text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product showcase */}
      <section className="surface-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Inside the product</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-navy-foreground sm:text-4xl">
              One workspace for the entire preparation cycle
            </h2>
            <p className="mt-4 text-navy-foreground/70">
              Learn, practice, test and review without leaving the platform — every action feeds the same
              progress record.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3">
              <img
                src={heroDashboard}
                alt="Progress analytics view inside JEE Catalyst"
                loading="lazy"
                width={1408}
                height={1008}
                className="w-full rounded-xl"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {showcase.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <p className="font-semibold text-navy-foreground">{s.title}</p>
                  <p className="mt-1 text-sm text-navy-foreground/65">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Student stories"
          title="Progress students can point to"
          body="Illustrative demo profiles created to show how progress is presented on the platform."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <Card key={t.name} className="card-lift flex h-full flex-col p-6">
              <Quote className="size-6 text-accent" aria-hidden />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
              <div className="mt-5 border-t pt-4">
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.exam}</p>
                <p className="mt-2 inline-flex rounded-full bg-success/10 px-2.5 py-1 text-xs font-semibold text-success">
                  {t.metric}
                </p>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Demo content. These are illustrative profiles, not real student outcomes.
        </p>
      </section>

      {/* Faculty */}
      <section className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-4 sm:flex sm:items-end sm:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Faculty"
              title="Taught by subject specialists"
              body="Concept-first teaching with a bias towards problem solving."
            />
            <Button asChild variant="outline">
              <Link to="/faculty">
                View all faculty <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {faculty.map((f) => (
              <Link key={f.id} to="/faculty/$facultyId" params={{ facultyId: f.id }} className="group">
                <Card className="card-lift h-full overflow-hidden p-0">
                  <img
                    src={f.photo}
                    alt={`Portrait of ${f.name}, ${f.subject} faculty`}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="aspect-square w-full object-cover"
                  />
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-bold">{f.name}</h3>
                      <span className="flex items-center gap-1 text-xs font-semibold">
                        <Star className="size-3.5 fill-accent text-accent" /> {f.rating}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <SubjectBadge subject={f.subject} />
                      <span className="text-xs text-muted-foreground">{f.exams}</span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">"{f.tagline}"</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="surface-navy grid-noise relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12">
          <Users className="mx-auto size-8 text-accent" aria-hidden />
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-extrabold text-navy-foreground sm:text-4xl">
            Your preparation deserves a system.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-foreground/70">
            Set your target, pick your subjects and start with a plan that adjusts as your accuracy
            improves.
          </p>
          <Button asChild variant="gold" size="lg" className="mt-8">
            <Link to="/onboarding">
              Start Your JEE Journey <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent-foreground">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-muted-foreground">{body}</p>}
    </div>
  );
}
