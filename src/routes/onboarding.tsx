import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useAppState } from "@/lib/app-state";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Set up your JEE preparation workspace | JEE Catalyst" },
      {
        name: "description",
        content: "Tell us your target exam, focus subjects and goal to personalise your JEE preparation plan.",
      },
      { property: "og:title", content: "Onboarding | JEE Catalyst" },
      { property: "og:description", content: "Three quick steps to build your preparation workspace." },
    ],
  }),
  component: Onboarding,
});

const goals = ["JEE Main", "JEE Advanced", "JEE Main + Advanced"];
const subjectOptions = ["Physics", "Chemistry", "Mathematics"];
const targets = [
  "Improve my percentile",
  "Strengthen fundamentals",
  "Crack JEE Advanced",
  "Improve weak subjects",
];

function Onboarding() {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState("");
  const [subjects, setSubjects] = useState<string[]>([]);
  const [target, setTarget] = useState("");
  const [done, setDone] = useState(false);
  const { saveOnboarding, updateProfile } = useAppState();
  const navigate = useNavigate();

  const canContinue = [goal !== "", subjects.length > 0, target !== ""][step];

  const finish = () => {
    saveOnboarding({ goal, subjects, target, completed: true });
    updateProfile({ target: goal });
    setDone(true);
    setTimeout(() => navigate({ to: "/dashboard" }), 1900);
  };

  return (
    <div className="surface-navy grid-noise flex min-h-screen flex-col">
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-8 sm:px-6">
        <Logo tone="light" />

        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-1 flex-col items-center justify-center text-center"
            >
              <span className="grid size-16 place-items-center rounded-2xl bg-[image:var(--gradient-gold)]">
                <Check className="size-8 text-gold-foreground" aria-hidden />
              </span>
              <h1 className="mt-6 font-display text-3xl font-extrabold text-navy-foreground">
                Your preparation workspace is ready.
              </h1>
              <p className="mt-3 text-navy-foreground/70">Taking you to your dashboard…</p>
            </motion.div>
          ) : (
            <motion.div key="steps" className="flex flex-1 flex-col justify-center py-10">
              <div className="mb-8">
                <p className="text-sm font-semibold text-accent">Step {step + 1} of 3</p>
                <Progress value={((step + 1) / 3) * 100} className="mt-3 h-1.5 bg-white/15" />
              </div>

              <motion.div
                key={step}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
              >
                <h1 className="font-display text-3xl font-extrabold text-navy-foreground sm:text-4xl">
                  {["What are you preparing for?", "Which subjects need the most attention?", "What is your target?"][step]}
                </h1>
                <p className="mt-3 text-navy-foreground/70">
                  {
                    [
                      "This sets the difficulty and paper pattern of your practice.",
                      "Select as many as you like — your daily plan will weight these higher.",
                      "We use this to order your chapters and revision cycles.",
                    ][step]
                  }
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {step === 0 &&
                    goals.map((g) => (
                      <Option key={g} active={goal === g} onClick={() => setGoal(g)} label={g} />
                    ))}
                  {step === 1 &&
                    subjectOptions.map((s) => (
                      <Option
                        key={s}
                        active={subjects.includes(s)}
                        onClick={() =>
                          setSubjects((prev) =>
                            prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
                          )
                        }
                        label={s}
                      />
                    ))}
                  {step === 2 &&
                    targets.map((t) => (
                      <Option key={t} active={target === t} onClick={() => setTarget(t)} label={t} />
                    ))}
                </div>

                <div className="mt-10 flex items-center justify-between gap-3">
                  <Button
                    variant="ghost"
                    className="text-navy-foreground hover:bg-white/10 hover:text-navy-foreground"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    disabled={step === 0}
                  >
                    <ArrowLeft className="size-4" /> Back
                  </Button>
                  <Button
                    variant="gold"
                    size="lg"
                    disabled={!canContinue}
                    onClick={() => (step === 2 ? finish() : setStep((s) => s + 1))}
                  >
                    {step === 2 ? (
                      <>
                        <Sparkles className="size-4" /> Build my workspace
                      </>
                    ) : (
                      <>
                        Continue <ArrowRight className="size-4" />
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Option({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "flex items-center justify-between rounded-xl border p-5 text-left text-base font-semibold transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        active
          ? "border-accent bg-accent/15 text-navy-foreground"
          : "border-white/15 bg-white/5 text-navy-foreground/85 hover:bg-white/10",
      )}
    >
      {label}
      <span
        className={cn(
          "grid size-6 place-items-center rounded-full border",
          active ? "border-accent bg-accent" : "border-white/25",
        )}
      >
        {active && <Check className="size-3.5 text-accent-foreground" aria-hidden />}
      </span>
    </button>
  );
}
