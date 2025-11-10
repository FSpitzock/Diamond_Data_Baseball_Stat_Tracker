import React, { useEffect, useState } from "react";

type CounterState = {
  count: number;
};

const StatsPage: React.FC = () => {
  const [stats, setStats] = useState<CounterState>({ count: 0 });

  useEffect(() => {
    const saved = localStorage.getItem("gameStats");
    if (saved) {
      setStats(JSON.parse(saved));
    }
  }, []);

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Saved Stats</h1>

      <p className="text-xl">At Bats: {stats.count}</p>
      <p className="text-xl">Hits: {stats.count}</p>
      <p className="text-xl">Singles: {stats.count}</p>
      <p className="text-xl">Doubles: {stats.count}</p>
      <p className="text-xl">Triples: {stats.count}</p>
      <p className="text-xl">Home Runs: {stats.count}</p>
      <p className="text-xl">RBI's: {stats.count}</p>
      <p className="text-xl">Walks: {stats.count}</p>
      <p className="text-xl">Strike Outs: {stats.count}</p>
    </section>
  );
};

export default StatsPage;
