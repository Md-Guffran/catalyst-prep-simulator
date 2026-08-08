import { useState } from "react";
import { createFileRoute, useNavigate, useSearch } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Sparkles, Lock, Mail, Eye, EyeOff, UserCheck, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useAppState } from "@/lib/app-state";
import { cn } from "@/lib/utils";

interface OnboardingSearch {
  tab?: string;
}

export const Route = createFileRoute("/onboarding")({
  validateSearch: (search: Record<string, unknown>): OnboardingSearch => ({
    tab: typeof search.tab === "string" ? search.tab : "setup",
  }),
  head: () => ({
    meta: [
      { title: "Sign In & Preparation Workspace | JEE Catalyst" },
      {
        name: "description",
        content: "Sign in to your account or set up your target exam and subjects to personalize your JEE preparation plan.",
      },
      { property: "og:title", content: "Sign In & Onboarding | JEE Catalyst" },
      { property: "og:description", content: "Access your dashboard or build your personalized JEE workspace." },
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
  const search = useSearch({ from: "/onboarding" });
  const [activeTab, setActiveTab] = useState<"setup" | "signin">(
    search.tab === "signin" ? "signin" : "setup",
  );

  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState("");
  const [subjects, setSubjects] = useState<string[]>([]);
  const [target, setTarget] = useState("");
  const [done, setDone] = useState(false);

  // Sign in form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const { saveOnboarding, updateProfile } = useAppState();
  const navigate = useNavigate();

  const canContinue = [goal !== "", subjects.length > 0, target !== ""][step];

  const finishOnboarding = () => {
    saveOnboarding({ goal, subjects, target, completed: true });
    updateProfile({ target: goal });
    setDone(true);
    setTimeout(() => navigate({ to: "/dashboard" }), 1800);
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setEmail("student@jeecatalyst.com");
    }
    setDone(true);
    setTimeout(() => navigate({ to: "/dashboard" }), 1500);
  };

  return (
    <div className="bg-gradient-to-b from-[#FAF8F5] via-white to-[#F0F4FA] min-h-screen flex flex-col text-[#0B1B3A]">
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-8 sm:px-6">
        
        {/* Header Navigation with Mode Switcher */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row border-b border-slate-200/80 pb-6 mb-6">
          <Logo tone="navy" />
          
          <div className="flex items-center rounded-xl border border-slate-300 bg-white p-1 shadow-xs">
            <button
              onClick={() => setActiveTab("setup")}
              className={cn(
                "rounded-lg px-4 py-2 text-xs font-bold transition-all sm:text-sm cursor-pointer",
                activeTab === "setup"
                  ? "bg-[#0B1B3A] text-white shadow-xs"
                  : "text-[#52627A] hover:text-[#0B1B3A] hover:bg-slate-100",
              )}
            >
              Workspace Setup
            </button>
            <button
              onClick={() => setActiveTab("signin")}
              className={cn(
                "rounded-lg px-4 py-2 text-xs font-bold transition-all sm:text-sm cursor-pointer",
                activeTab === "signin"
                  ? "bg-[#0B1B3A] text-white shadow-xs"
                  : "text-[#52627A] hover:text-[#0B1B3A] hover:bg-slate-100",
              )}
            >
              Sign In
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-1 flex-col items-center justify-center text-center py-16"
            >
              <span className="grid size-16 place-items-center rounded-2xl bg-[image:var(--gradient-gold)] shadow-md">
                <Check className="size-8 text-slate-950 font-black" aria-hidden />
              </span>
              <h1 className="mt-6 font-display text-3xl font-extrabold text-[#0B1B3A]">
                {activeTab === "signin" ? "Welcome Back!" : "Your preparation workspace is ready."}
              </h1>
              <p className="mt-3 text-[#475569] text-base font-medium">Taking you to your dashboard…</p>
            </motion.div>
          ) : activeTab === "signin" ? (
            /* SIGN IN FORM VIEW */
            <motion.div
              key="signin-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="my-auto py-6"
            >
              <div className="mx-auto max-w-md rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl">
                <div className="text-center">
                  <div className="mx-auto mb-4 grid size-12 place-items-center rounded-2xl bg-amber-50 text-amber-700 border border-amber-200">
                    <ShieldCheck className="size-6" />
                  </div>
                  <h1 className="font-display text-2xl font-extrabold text-[#0B1B3A] sm:text-3xl">
                    Sign In to JEE Catalyst
                  </h1>
                  <p className="mt-2 text-sm text-[#475569] font-medium">
                    Access your personalized courses, mock tests, and progress analytics.
                  </p>
                </div>

                <form onSubmit={handleSignIn} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-[#0B1B3A]">
                      Email Address
                    </label>
                    <div className="relative mt-1.5">
                      <Mail className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="student@jeecatalyst.com"
                        className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-[#0B1B3A] placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all font-semibold"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-bold text-[#0B1B3A]">
                        Password
                      </label>
                      <button
                        type="button"
                        className="text-xs font-bold text-amber-700 hover:underline cursor-pointer"
                        onClick={() => alert("Password reset link sent to your registered email.")}
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative mt-1.5">
                      <Lock className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-10 text-sm text-[#0B1B3A] placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all font-semibold"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 text-xs text-[#475569] font-semibold cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="size-4 rounded border-slate-300 bg-white text-amber-600 focus:ring-amber-500"
                      />
                      Remember me for 30 days
                    </label>
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full font-extrabold shadow-md">
                    <UserCheck className="size-4" /> Sign In to Workspace
                  </Button>

                  <div className="relative my-4 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-200" />
                    </div>
                    <span className="relative bg-white px-3 text-xs font-semibold text-slate-400">OR</span>
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-slate-300 bg-white text-[#0B1B3A] hover:bg-slate-50 font-bold"
                    onClick={handleSignIn}
                  >
                    Quick Sign In as Demo Student
                  </Button>
                </form>

                <p className="mt-6 text-center text-xs text-[#52627A] font-medium">
                  New to JEE Catalyst?{" "}
                  <button
                    onClick={() => setActiveTab("setup")}
                    className="font-bold text-amber-700 hover:underline cursor-pointer"
                  >
                    Start Workspace Setup
                  </button>
                </p>
              </div>
            </motion.div>
          ) : (
            /* WORKSPACE ONBOARDING SETUP VIEW */
            <motion.div
              key="setup-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-1 flex-col justify-center py-6"
            >
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-extrabold text-[#0B1B3A] tracking-wider uppercase">
                    STEP {step + 1} OF 3
                  </p>
                  <span className="text-xs text-[#52627A] font-semibold">
                    {Math.round(((step + 1) / 3) * 100)}% Completed
                  </span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className="h-full bg-[image:var(--gradient-gold)] transition-all duration-300 rounded-full"
                    style={{ width: `${((step + 1) / 3) * 100}%` }}
                  />
                </div>
              </div>

              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
              >
                <h1 className="font-display text-3xl font-extrabold text-[#0B1B3A] sm:text-4xl">
                  {["What are you preparing for?", "Which subjects need the most attention?", "What is your target?"][step]}
                </h1>
                <p className="mt-3 text-base text-[#475569] font-medium leading-relaxed">
                  {
                    [
                      "This sets the difficulty and paper pattern of your practice questions.",
                      "Select as many as you like — your daily plan will weight these higher.",
                      "We use this to order your chapters and revision cycles.",
                    ][step]
                  }
                </p>

                <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
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

                <div className="mt-10 flex items-center justify-between gap-3 pt-6 border-t border-slate-200">
                  <Button
                    variant="ghost"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    disabled={step === 0}
                    className="text-[#0B1B3A] hover:bg-slate-100 font-bold disabled:opacity-30"
                  >
                    <ArrowLeft className="size-4" /> Back
                  </Button>
                  <Button
                    variant="gold"
                    size="lg"
                    disabled={!canContinue}
                    onClick={() => (step === 2 ? finishOnboarding() : setStep((s) => s + 1))}
                    className="font-extrabold shadow-md disabled:bg-slate-200 disabled:text-slate-400 disabled:border disabled:border-slate-300 disabled:shadow-none"
                  >
                    {step === 2 ? (
                      <>
                        <Sparkles className="size-4" /> Build My Workspace
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
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "flex items-center justify-between rounded-2xl border p-5 text-left text-base font-bold transition-all shadow-xs cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
        active
          ? "border-2 border-amber-500 bg-amber-50/80 text-[#0B1B3A] font-extrabold shadow-sm"
          : "border-slate-200 bg-white text-[#0B1B3A] hover:border-amber-400 hover:bg-amber-50/40",
      )}
    >
      <span>{label}</span>
      <span
        className={cn(
          "grid size-6 shrink-0 place-items-center rounded-full border transition-all",
          active ? "border-amber-500 bg-amber-500 text-white shadow-xs" : "border-slate-300 bg-white",
        )}
      >
        {active && <Check className="size-3.5 text-white font-black" aria-hidden />}
      </span>
    </button>
  );
}
