import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageBody, PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pricing/")({
  head: () => ({ meta: [{ title: "Pricing — JEE Catalyst" }] }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHeader title="Pricing" subtitle="Two simple plans. No hidden fees." />
      <PageBody className="grid gap-6 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
        <div className="rounded-3xl border bg-card p-8">
          <h3 className="font-display text-xl font-bold">Foundation</h3>
          <p className="mt-2 text-sm text-muted-foreground">For class 11 and dropper reset.</p>
          <p className="mt-4 font-display text-4xl font-extrabold">₹2,999</p>
          <ul className="mt-6 space-y-3 text-sm">
            {["96 lectures", "1,500 practice questions", "Chapter tests", "PYQ sets", "Progress tracker"].map((i) => (
              <li key={i} className="flex items-center gap-2"><Check className="size-4 text-success" /> {i}</li>
            ))}
          </ul>
          <Button asChild variant="gold" className="mt-6 w-full"><Link to="/onboarding">Get Started</Link></Button>
        </div>
        <div className="rounded-3xl border bg-card p-8">
          <h3 className="font-display text-xl font-bold">Advanced</h3>
          <p className="mt-2 text-sm text-muted-foreground">Full syllabus for JEE Main + Advanced.</p>
          <p className="mt-4 font-display text-4xl font-extrabold">₹7,999</p>
          <ul className="mt-6 space-y-3 text-sm">
            {["186 lectures", "3,200 practice questions", "Mock test series", "Live class access", "Full analytics"].map((i) => (
              <li key={i} className="flex items-center gap-2"><Check className="size-4 text-success" /> {i}</li>
            ))}
          </ul>
          <Button asChild variant="gold" className="mt-6 w-full"><Link to="/onboarding">Get Started</Link></Button>
        </div>
      </PageBody>
    </>
  );
}
