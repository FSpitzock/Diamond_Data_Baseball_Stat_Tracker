import React from "react";

export type Stats = {
  atBats?: number;
  hits?: number;
  homeRuns?: number;
  rbi?: number;
  [k: string]: number | undefined;
};

type BaseballCardProps = {
  imageSrc: string;
  alt?: string;
  name: string;
  team?: string;
  position?: string;
  stats?: Stats;
  className?: string;
  onClick?: () => void;
};

const statKeys = ["atBats", "hits", "homeRuns", "rbi"];

export default function BaseballCardFront({
  imageSrc,
  alt = "player image",
  name,
  team,
  position,
  stats = {},
  className = "",
  onClick,
}: BaseballCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-lg ${className}`}
      role={onClick ? "button" : undefined}
      onClick={onClick}
      tabIndex={onClick ? 0 : -1}
      aria-label={name}
    >
      {/* Background image */}
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-64 object-cover sm:h-80 md:h-96"
        loading="lazy"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

      {/* Info card anchored bottom-left */}
      <div className="absolute left-4 bottom-4 right-4 md:left-8 md:bottom-8 md:right-auto md:w-72">
        <div className="backdrop-blur-sm bg-black/50 px-4 py-3 rounded-xl border border-white/10 text-white">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <h3 className="text-lg font-semibold leading-tight truncate">{name}</h3>
              {team && <p className="text-sm text-gray-200 truncate">{team}</p>}
              {position && <p className="text-xs text-gray-300 mt-1">{position}</p>}
            </div>

            {/* small avatar circle on top-right of card */}
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
              {name.split(" ").map(n => n[0]).slice(0,2).join("")}
            </div>
          </div>

          {/* stats row */}
          <div className="mt-3 flex gap-2 flex-wrap">
            {statKeys.map((key) => (
              stats[key] !== undefined ? (
                <div key={key} className="flex flex-col items-center px-2 py-1 bg-white/5 rounded">
                  <span className="text-xs text-gray-300">{formatStatKey(key)}</span>
                  <span className="text-sm font-semibold">{stats[key]}</span>
                </div>
              ) : null
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function formatStatKey(k: string) {
  switch (k) {
    case "atBats": return "AB";
    case "homeRuns": return "HR";
    case "rbi": return "RBI";
    case "hits": return "H";
    default: return k;
  }
}
