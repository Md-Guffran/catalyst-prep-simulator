import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageBody, PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { faculty } from "@/data/mock";

export const Route = createFileRoute("/faculty/")({
  head: () => ({
    meta: [
      { title: "Faculty — JEE Catalyst" },
      { name: "description", content: "Meet the expert faculty behind JEE Catalyst." },
    ],
  }),
  component: FacultyPage,
});

function FacultyPage() {
  return (
    <>
      <PageHeader
        title="Faculty"
        subtitle="Concept-first teaching from subject specialists with years of JEE experience."
      />
      <PageBody className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((f) => (
            <Link
              key={f.id}
              to="/faculty/$facultyId"
              params={{ facultyId: f.id }}
              className="group rounded-2xl border bg-card p-5 transition-colors hover:border-primary/30 hover:shadow-sm"
            >
              <img
                src={f.photo}
                alt={f.name}
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
              <h2 className="mt-4 font-display text-lg font-bold">{f.name}</h2>
              <p className="text-sm text-muted-foreground">{f.subject}</p>
              <p className="mt-2 text-xs text-muted-foreground">{f.experience} · {f.exams}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-accent">
                View profile <ArrowRight className="size-3" />
              </div>
            </Link>
          ))}
        </div>
      </PageBody>
    </>
  );
}
