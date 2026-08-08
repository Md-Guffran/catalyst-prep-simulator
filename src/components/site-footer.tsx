import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Learn",
    links: [
      { label: "Courses", to: "/courses" },
      { label: "Question Bank", to: "/question-bank" },
      { label: "Previous Year Questions", to: "/pyqs" },
      { label: "Mock Tests", to: "/mock-tests" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Live Classes", to: "/live-classes" },
      { label: "Recorded Classes", to: "/recorded-classes" },
      { label: "Progress Tracker", to: "/progress" },
      { label: "Leaderboard", to: "/leaderboard" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Faculty", to: "/faculty" },
      { label: "Pricing", to: "/pricing" },
      { label: "Dashboard", to: "/dashboard" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#0B1B3A] text-white mt-24 border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm text-slate-300 leading-relaxed font-medium">
            Turn preparation into progress. A focused JEE preparation system built around structure,
            practice and measurable improvement.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-slate-300 transition-colors hover:text-amber-400 font-semibold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 bg-[#071329]">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-slate-400 sm:px-6 font-medium">
          © 2026 JEE Catalyst. This is a product demonstration build — all courses, students,
          questions, results and statistics shown are illustrative demo content.
        </p>
      </div>
    </footer>
  );
}
