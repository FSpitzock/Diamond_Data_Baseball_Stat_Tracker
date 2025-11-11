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
import { PlayerGame } from "../types/player";

const StatsPage: React.FC = () => {
  const [games, setGames] = useState<PlayerGame[]>([]);

  const labels = [
    { key: "atBats", label: "At Bats" },
    { key: "hits", label: "Hits" },
    { key: "singles", label: "Singles" },
    { key: "doubles", label: "Doubles" },
    { key: "triples", label: "Triples" },
    { key: "homeRuns", label: "Home Runs" },
    { key: "rbi", label: "RBI's" },
    { key: "walks", label: "Walks" },
    { key: "strikeOuts", label: "Strike Outs" },
  ] as const;

  // ✅ Load saved games
  useEffect(() => {
    const saved = localStorage.getItem("playerGames");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setGames(Array.isArray(parsed) ? parsed : [parsed]);
      } catch (error) {
        console.error("Failed to parse saved games:", error);
        setGames([]);
      }
    }
  }, []);

  if (!games.length) {
    return <p className="p-6 text-xl">No saved games yet.</p>;
  }

  // ✅ Calculate totals
  const totals = labels.reduce((acc, item) => {
    acc[item.key] = games.reduce(
      (sum, game) => sum + (game.stats[item.key] || 0),
      0
    );
    return acc;
  }, {} as Record<(typeof labels)[number]["key"], number>);

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Saved Games</h1>

      <Table>
        <TableCaption>All saved baseball game entries</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Opponent</TableHead>
            {labels.map((item) => (
              <TableHead key={item.key}>{item.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {games.map((game, index) => (
            <TableRow key={index}>
              <TableCell>
                {game.date
                  ? new Date(game.date).toLocaleString()
                  : `Game #${index + 1}`}
              </TableCell>

              <TableCell>{game.team2 || "Unknown"}</TableCell>

              {labels.map((item) => (
                <TableCell key={item.key}>
                  {game.stats[item.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}

          {/* ✅ TOTALS ROW */}
          <TableRow className="font-bold bg-gray-100">
            <TableCell>Totals</TableCell>
            <TableCell>—</TableCell>
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
