import { createFileRoute } from "@tanstack/react-router";
import { PageBody, PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/about/")({
  head: () => ({ meta: [{ title: "About — JEE Catalyst" }] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader title="About" subtitle="Built for serious JEE aspirants who want structure, practice and measurable progress." />
      <PageBody className="max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>JEE Catalyst is a focused preparation platform designed around a simple idea: preparation should be measurable. Every course, practice set and test feeds the same progress record so students and parents always know where things stand.</p>
        <p>The team is led by founder Shiv and supported by a faculty of subject specialists who have taught thousands of aspirants. The content is real, the progress is visible, and the platform is built to scale to thousands of students before any public launch.</p>
      </PageBody>
    </>
  );
}
