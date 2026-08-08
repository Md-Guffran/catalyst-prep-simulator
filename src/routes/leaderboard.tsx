import { createFileRoute } from "@tanstack/react-router";
import { Crown, Medal, Trophy } from "lucide-react";
import { PageBody, PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { leaderboard, type LeaderRow } from "@/data/mock";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: "Leaderboard — Weekly & Monthly Rankings | JEE Catalyst" },
      {
        name: "description",
        content:
          "See where you stand against other aspirants on weekly, monthly and all-time practice performance.",
      },
      { property: "og:title", content: "Leaderboard | JEE Catalyst" },
      { property: "og:description", content: "Weekly, monthly and all-time rankings for JEE Catalyst learners." },
    ],
  }),
  component: LeaderboardPage,
});

function Table({ rows }: { rows: LeaderRow[] }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] text-sm">
          <caption className="sr-only">Student rankings</caption>
          <thead>
            <tr className="border-b bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <th scope="col" className="px-5 py-3 font-bold">Rank</th>
              <th scope="col" className="px-5 py-3 font-bold">Student</th>
              <th scope="col" className="px-5 py-3 text-right font-bold">Score</th>
              <th scope="col" className="px-5 py-3 text-right font-bold">Accuracy</th>
              <th scope="col" className="px-5 py-3 text-right font-bold">Tests</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.rank}
                className={cn(
                  "border-b last:border-0",
                  r.isCurrentUser ? "bg-accent/12" : "hover:bg-muted/40",
                )}
              >
                <td className="px-5 py-3.5">
                  <span className="flex items-center gap-2 font-bold">
                    {r.rank === 1 && <Crown className="size-4 text-accent" aria-hidden />}
                    {r.rank === 2 && <Medal className="size-4 text-muted-foreground" aria-hidden />}
                    {r.rank === 3 && <Medal className="size-4 text-maths" aria-hidden />}
                    {r.rank}
                  </span>
                </td>
                <td className="px-5 py-3.5 font-semibold">
                  {r.name}
                  {r.isCurrentUser && (
                    <span className="ml-2 rounded-full bg-accent px-2 py-0.5 text-[11px] font-bold text-accent-foreground">
                      You
                    </span>
                  )}
                </td>
                <td className="px-5 py-3.5 text-right font-bold">{r.score.toLocaleString("en-IN")}</td>
                <td className="px-5 py-3.5 text-right">{r.accuracy}%</td>
                <td className="px-5 py-3.5 text-right">{r.tests}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

function LeaderboardPage() {
  return (
    <>
      <PageHeader
        title="Leaderboard"
        subtitle="Ranked on practice volume, accuracy and test performance. All names shown are demo profiles."
      />
      <PageBody className="space-y-6">
        <Card className="flex flex-wrap items-center gap-4 p-6">
          <span className="grid size-12 place-items-center rounded-2xl bg-accent/15">
            <Trophy className="size-6 text-accent-foreground" aria-hidden />
          </span>
          <div>
            <p className="font-display text-lg font-bold">You are ranked #5 this week</p>
            <p className="text-sm text-muted-foreground">
              164 points behind rank 4 — two more practice sets would close the gap.
            </p>
          </div>
        </Card>

        <Tabs defaultValue="weekly">
          <TabsList>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="allTime">All Time</TabsTrigger>
          </TabsList>
          <TabsContent value="weekly" className="mt-4">
            <Table rows={leaderboard.weekly} />
          </TabsContent>
          <TabsContent value="monthly" className="mt-4">
            <Table rows={leaderboard.monthly} />
          </TabsContent>
          <TabsContent value="allTime" className="mt-4">
            <Table rows={leaderboard.allTime} />
          </TabsContent>
        </Tabs>
      </PageBody>
    </>
  );
}
