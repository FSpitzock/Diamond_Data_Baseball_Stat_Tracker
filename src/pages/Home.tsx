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

type CounterState = {
  count: number;
};

const StatsPage: React.FC = () => {
  const [stats, setStats] = useState<CounterState>({ count: 0 });

  //LOAD SAVED STATS FROM LOCAL STORAGE
  useEffect(() => {
    const saved = localStorage.getItem("gameStats");
    if (saved) {
      setStats(JSON.parse(saved));
    }
  }, []);

   const labels = [
    "At Bats",
    "Hits",
    "Singles",
    "Doubles",
    "Triples",
    "Home Runs",
    "RBI's",
    "Walks",
    "Strike Outs",
  ];

    return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Saved Stats</h1>

      <Table>
        <TableCaption>Your saved baseball stats</TableCaption>

        {/* ✅ HORIZONTAL HEADERS */}
        <TableHeader>
          <TableRow>
            {labels.map((label) => (
              <TableHead key={label}>{label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        {/* ✅ ONE HORIZONTAL ROW OF VALUES */}
        <TableBody>
          <TableRow>
            {labels.map((label) => (
              <TableCell key={label}>{stats.count}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
};

export default StatsPage;
