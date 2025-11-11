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
  savedAt?: string;
};

const StatsPage: React.FC = () => {
  const [statsArray, setStatsArray] = useState<CounterState[]>([]);

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

  // LOAD SAVED STATS FROM LOCAL STORAGE
  useEffect(() => {
    const saved = localStorage.getItem("gameStats");
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

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Saved Stats</h1>

      <Table>
        <TableCaption>Your saved baseball stats</TableCaption>

        {/* HORIZONTAL HEADERS */}
        <TableHeader>
          <TableRow>
            <TableHead>Saved At</TableHead>
            {labels.map((label) => (
              <TableHead key={label}>{label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        {/* ONE ROW PER SAVED ENTRY */}
        <TableBody>
          {statsArray.map((stat, index) => (
            <TableRow key={index}>
              <TableCell>
                {stat.savedAt
                  ? new Date(stat.savedAt).toLocaleString()
                  : `Entry #${index + 1}`}
              </TableCell>
              {/* Display count for now, you can expand to multiple stats later */}
              {labels.map((label) => (
                <TableCell key={label}>{stat.count}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default StatsPage;
