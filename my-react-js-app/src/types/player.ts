interface Player {
  id: number;
  firstName: string;
  lastName: string;
  height: number;
  weight: number;
  position: PlayerPosition;
  birthDate: string;
  team: string;
  totalStats: PlayerGame[] | null;
  
}

type PlayerGame = {
  gameId: number;
  date: string;
  team1: string;
  team2: string;
  stats: GameStats;
}

type PlayerPosition = 'P' | 'C' | '1B' | '2B' | '3B' | 'SS' | 'OF'

export type GameStats = {
  atBats: number;
  hits: number;
  singles: number;
  doubles: number;
  triples: number;
  homeRuns: number;
  rbi: number;
  walks: number;
  strikeOuts: number;
}
