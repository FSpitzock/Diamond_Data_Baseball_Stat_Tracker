import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableCaption,
} from "../components/ui/table";
import { Player } from "../types/player";
import PlayerDetails, { DemoPlayerDetails } from "@/components/ui/playerDetails";
import StatsCard from "@/components/ui/statsCard";

type GameStats = {
  atBats: number;
  hits: number;
  singles: number;
  doubles: number;
  triples: number;
  homeRuns: number;
  rbi: number;
  walks: number;
  strikeOuts: number;
  savedAt?: string;
};

const StatsPage: React.FC = () => {
  const [statsArray, setStatsArray] = useState<GameStats[]>([]);

  const labels: { key: Exclude<keyof GameStats, "savedAt">; label: string }[] = [
    { key: "atBats", label: "At Bats" },
    { key: "hits", label: "Hits" },
    { key: "singles", label: "Singles" },
    { key: "doubles", label: "Doubles" },
    { key: "triples", label: "Triples" },
    { key: "homeRuns", label: "Home Runs" },
    { key: "rbi", label: "RBI's" },
    { key: "walks", label: "Walks" },
    { key: "strikeOuts", label: "Strike Outs" },
  ];

  // batting avg = hits/at bats
  const battingAvg = (hits: number, atBats: number) => {
    if (atBats === 0) return 0;
    return (hits / atBats).toFixed(3);
  };

  // LOAD SAVED STATS FROM LOCAL STORAGE
  useEffect(() => {
    const saved = localStorage.getItem("playerGames");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setStatsArray(Array.isArray(parsed) ? parsed : [parsed]);
      } catch (error) {
        console.error("Failed to parse saved stats:", error);
        setStatsArray([]);
      }
    }
  }, []);

  if (!statsArray.length) {
    return <p className="p-6 text-xl">No saved stats yet.</p>;
  }

  // CALCULATE TOTALS
  const totals = labels.reduce((acc, item) => {
    acc[item.key] = statsArray.reduce((sum, stat) => sum + (stat.stats[item.key] || 0), 0);
    return acc;
  }, {} as Record<Exclude<keyof GameStats, "savedAt">, number>);

  return (
    <section className="flex flex-col gap-8">
      <DemoPlayerDetails />
      <div className="flex flex-row mx-auto w-full gap-4 justify-between">
        <StatsCard label={labels[0].label} value={totals[labels[0].key]} />
        <StatsCard label={labels[1].label} value={totals[labels[1].key]} />
        <StatsCard label="Batting Avg" value={battingAvg(totals.hits, totals.atBats)} />
      </div>

      <Table>
        <TableCaption>Your saved baseball stats</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Opponent</TableHead>
            {labels.map((item) => (
              <TableHead key={item.key}>{item.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {statsArray.map((stat, index) => (
            <TableRow key={index}>
              <TableCell>
                {stat.savedAt
                  ? new Date(stat.savedAt).toLocaleString()
                  : `Entry #${index + 1}`}
              </TableCell>

              {labels.map((item) => (
                <TableCell key={item.key}>{stat.stats[item.key]}</TableCell>
              ))}
            </TableRow>
          ))}

          {/* ✅ TOTALS ROW */}
          <TableRow className="font-bold bg-gray-100">
            <TableCell>Totals</TableCell>
            {labels.map((item) => (
              <TableCell key={item.key}>{totals[item.key]}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
};

export default StatsPage;
