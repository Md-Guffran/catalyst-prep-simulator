import { useState } from "react";
import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import {
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  FileQuestion,
  FileText,
  PlayCircle,
  Star,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { PageBody } from "@/components/page-header";
import { SubjectBadge } from "@/components/badges";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { courses, getFaculty, inr, subjectImage } from "@/data/mock";
import { useAppState } from "@/lib/app-state";

export const Route = createFileRoute("/courses/$courseId")({
  loader: ({ params }) => {
    const course = courses.find((c) => c.id === params.courseId);
    if (!course) throw notFound();
    return { title: course.title, summary: course.summary };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Course not found | JEE Catalyst" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: `${loaderData.title} | JEE Catalyst` },
        { name: "description", content: loaderData.summary.slice(0, 155) },
        { property: "og:title", content: `${loaderData.title} | JEE Catalyst` },
        { property: "og:description", content: loaderData.summary.slice(0, 155) },
      ],
    };
  },
  component: CourseDetail,
});

function CourseDetail() {
  const { courseId } = useParams({ from: "/courses/$courseId" });
  const course = courses.find((c) => c.id === courseId)!;
  const teacher = getFaculty(course.facultyId)!;
  const { isEnrolled, enroll } = useAppState();
  const enrolled = isEnrolled(course.id);
  const [open, setOpen] = useState(false);

  const handleEnroll = () => {
    enroll(course.id);
    setOpen(true);
  };

  const includes = [
    { icon: PlayCircle, label: `${course.lectures} video lessons` },
    { icon: FileQuestion, label: `${course.questions.toLocaleString("en-IN")} practice questions` },
    { icon: BookOpen, label: "Chapter-wise PYQ sets" },
    { icon: ClipboardList, label: "Full-length mock tests" },
    { icon: FileText, label: "Downloadable lecture notes" },
  ];

  return (
    <>
      <section className="surface-navy border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <SubjectBadge subject={course.subject} className="bg-white/10 text-navy-foreground" />
              <span className="rounded-full border border-white/20 px-2.5 py-0.5 text-xs font-semibold text-navy-foreground/80">
                {course.exam}
              </span>
              <span className="rounded-full border border-white/20 px-2.5 py-0.5 text-xs font-semibold text-navy-foreground/80">
                {course.level}
              </span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-extrabold text-navy-foreground sm:text-4xl">
              {course.title}
            </h1>
            <p className="mt-4 max-w-2xl text-navy-foreground/75">{course.summary}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-navy-foreground/80">
              <span className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-accent" /> {teacher.name}
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="size-4 fill-accent text-accent" /> {course.rating} ({course.reviews.toLocaleString("en-IN")})
              </span>
              <span className="flex items-center gap-2">
                <Users className="size-4 text-accent" /> {course.students.toLocaleString("en-IN")} enrolled (demo)
              </span>
            </div>
          </div>

          <Card className="h-fit overflow-hidden p-0 lg:sticky lg:top-24">
            <img
              src={subjectImage[course.subject]}
              alt={`${course.subject} course artwork`}
              loading="lazy"
              width={960}
              height={600}
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="p-5">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl font-extrabold">{inr(course.price)}</span>
                <span className="text-sm text-muted-foreground line-through">{inr(course.mrp)}</span>
                <span className="rounded-full bg-success/10 px-2 py-0.5 text-xs font-bold text-success">
                  Save {inr(course.mrp - course.price)}
                </span>
              </div>
              {enrolled ? (
                <Button asChild variant="gold" size="lg" className="mt-4 w-full">
                  <Link to="/recorded-classes">Continue Learning</Link>
                </Button>
              ) : (
                <Button variant="gold" size="lg" className="mt-4 w-full" onClick={handleEnroll}>
                  Enroll Now
                </Button>
              )}
              <Button asChild variant="outline" className="mt-2 w-full">
                <Link to="/pricing">Compare plans</Link>
              </Button>
              <ul className="mt-5 space-y-2.5">
                {includes.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Icon className="size-4 shrink-0 text-accent-foreground" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <PageBody className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div className="min-w-0 space-y-8">
          <section>
            <h2 className="font-display text-2xl font-bold">What you'll learn</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {course.outcomes.map((o) => (
                <li key={o} className="flex gap-2.5 rounded-xl border bg-card p-4 text-sm">
                  <CheckCircle2 className="size-4 shrink-0 text-success" aria-hidden />
                  {o}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">Syllabus</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {course.syllabus.length} chapters · {course.lectures} lectures
            </p>
            <Accordion type="single" collapsible defaultValue={course.syllabus[0].chapter} className="mt-4">
              {course.syllabus.map((ch) => (
                <AccordionItem key={ch.chapter} value={ch.chapter} className="rounded-xl border bg-card px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="flex flex-1 flex-wrap items-center justify-between gap-2 pr-3">
                      <span className="font-semibold">{ch.chapter}</span>
                      <span className="text-xs font-medium text-muted-foreground">
                        {ch.lectures} lectures · {ch.hours} hrs
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pb-2">
                      {["Concept lectures", "Derivation & formula drill", "Chapter PYQ set", "Chapter test"].map(
                        (item) => (
                          <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                            <PlayCircle className="size-4 text-accent-foreground" aria-hidden />
                            {item}
                          </li>
                        ),
                      )}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">Course outcomes</h2>
            <Card className="mt-4 p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                By the end of this track you will have completed every chapter with its practice set, attempted
                the mapped previous year questions and sat the associated tests. Your dashboard will show
                chapter-level completion and accuracy, so the remaining work is always explicit.
              </p>
            </Card>
          </section>
        </div>

        <aside className="space-y-6">
          <Card className="p-6">
            <h2 className="font-display text-lg font-bold">Your faculty</h2>
            <Link
              to="/faculty/$facultyId"
              params={{ facultyId: teacher.id }}
              className="mt-4 flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-muted"
            >
              <img
                src={teacher.photo}
                alt={`Portrait of ${teacher.name}`}
                loading="lazy"
                width={640}
                height={640}
                className="size-14 rounded-xl object-cover"
              />
              <span>
                <span className="block font-semibold">{teacher.name}</span>
                <span className="block text-xs text-muted-foreground">
                  {teacher.subject} · {teacher.experience}
                </span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">{teacher.about}</p>
          </Card>

          <Card className="p-6">
            <h2 className="font-display text-lg font-bold">Practice alongside</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Pair this course with the question bank and PYQ library for chapter-wise reinforcement.
            </p>
            <div className="mt-4 grid gap-2">
              <Button asChild variant="outline">
                <Link to="/question-bank">Open Question Bank</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/pyqs">Practice PYQs</Link>
              </Button>
            </div>
          </Card>
        </aside>
      </PageBody>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle2 className="size-5 text-success" /> Enrollment Successful
            </DialogTitle>
            <DialogDescription>
              Your course has been added to your learning dashboard. You can start from the first chapter
              right away.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Stay on this page
            </Button>
            <Button asChild variant="gold" onClick={() => toast.success("Course added to your dashboard")}>
              <Link to="/dashboard">Go to Dashboard</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
