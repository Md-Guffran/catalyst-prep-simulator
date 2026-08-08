import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Flame, Mail, Phone, Save, Target } from "lucide-react";
import { toast } from "sonner";
import { PageBody, PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CountUp } from "@/components/metrics";
import { demoUser } from "@/data/mock";
import { useAppState } from "@/lib/app-state";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "My Profile & Study Stats | JEE Catalyst" },
      { name: "description", content: "Your account details, target exam and lifetime preparation statistics." },
      { property: "og:title", content: "My Profile | JEE Catalyst" },
      { property: "og:description", content: "Account details and lifetime study statistics." },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const { state, updateProfile } = useAppState();
  const [form, setForm] = useState({
    name: state.profile.name,
    email: demoUser.email,
    city: state.profile.city,
    target: state.profile.target,
  });


  return (
    <>
      <PageHeader title="My Profile" subtitle="Your account, target and lifetime study statistics." />
      <PageBody className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <Card className="p-6 text-center">
          <span className="mx-auto grid size-24 place-items-center rounded-full bg-[image:var(--gradient-gold)] font-display text-3xl font-extrabold text-gold-foreground">
            {form.name.charAt(0)}
          </span>
          <h2 className="mt-4 font-display text-xl font-extrabold">{form.name}</h2>
          <p className="text-sm text-muted-foreground">{form.email}</p>
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-accent-foreground">
            <Target className="size-4" aria-hidden /> {form.target}
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-3">
            {[
              ["Questions", demoUser.questionsAttempted, ""],
              ["Accuracy", demoUser.accuracy, "%"],
              ["Tests", demoUser.testsCompleted, ""],
              ["Streak", demoUser.streak, "d"],
            ].map(([label, value, suffix]) => (
              <div key={label as string} className="rounded-xl border bg-muted/30 p-4">
                <dd className="font-display text-xl font-extrabold">
                  <CountUp to={value as number} suffix={suffix as string} />
                </dd>
                <dt className="text-xs text-muted-foreground">{label as string}</dt>
              </div>
            ))}
          </dl>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <Flame className="size-4 text-accent-foreground" aria-hidden /> Longest streak: {demoUser.streak} days
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="font-display text-lg font-bold">Account details</h2>
          <form
            className="mt-5 grid gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              updateProfile(form);
              toast.success("Profile updated");
            }}
          >
            <div className="grid gap-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="target">Target exam</Label>
              <Input id="target" value={form.target} onChange={(e) => setForm({ ...form, target: e.target.value })} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">
                <Mail className="size-3.5" aria-hidden /> Email
              </Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="city">
                <Phone className="size-3.5" aria-hidden /> City
              </Label>
              <Input id="city" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
            </div>

            <div className="sm:col-span-2">
              <Button type="submit" variant="gold">
                <Save className="size-4" /> Save changes
              </Button>
            </div>
          </form>
        </Card>
      </PageBody>
    </>
  );
}
