import React from "react";


function StatsCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="card w-[80%] flex flex-col justify-items-stretch gap-8">
      <h4>{label}</h4>
      <p className="text-6xl">{value}</p>
    </div>
  );
}

export default StatsCard;