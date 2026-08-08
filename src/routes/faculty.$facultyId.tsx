import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Star } from "lucide-react";
import { PageBody, PageHeader } from "@/components/page-header";
import { SubjectBadge } from "@/components/badges";
import { getFaculty } from "@/data/mock";

export const Route = createFileRoute("/faculty/$facultyId")({
  head: ({ params }) => {
    const f = getFaculty(params.facultyId);
    return {
      meta: [{ title: `${f?.name ?? "Faculty"} — JEE Catalyst` }],
    };
  },
  loader: ({ params }) => {
    const f = getFaculty(params.facultyId);
    if (!f) throw new Error("Faculty not found");
    return f;
  },
  component: FacultyDetail,
});

function FacultyDetail() {
  const { facultyId } = Route.useParams();
  const f = getFaculty(facultyId);
  if (!f) return null;
  return (
    <>
      <PageHeader title={f.name} subtitle={`${f.subject} · ${f.exams}`} />
      <PageBody className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <img src={f.photo} alt={f.name} className="w-full rounded-2xl object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-bold">{f.name}</h2>
          <div className="flex flex-wrap gap-2">
            <SubjectBadge subject={f.subject} />
            <span className="rounded-full border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">{f.exams}</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{f.about}</p>
          <blockquote className="rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed">
            <p className="italic">"{f.tagline}"</p>
            <p className="mt-3 text-xs font-bold">{f.philosophy}</p>
          </blockquote>
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl border bg-card p-4">
              <dt className="text-xs text-muted-foreground">Experience</dt>
              <dd className="font-bold">{f.experience}</dd>
            </div>
            <div className="rounded-xl border bg-card p-4">
              <dt className="text-xs text-muted-foreground">Students</dt>
              <dd className="font-bold">{f.students}</dd>
            </div>
          </dl>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-navy-soft"
          >
            <ArrowLeft className="size-4 rotate-180" /> Browse courses
          </Link>
        </div>
      </PageBody>
    </>
  );
}
