interface Player {
  id: number;
  firstName: string;
  lastName: string;
  height: number;
  weight: number;
  position: PlayerPosition;
  birthDate: string;
  team: string;
  stats: PlayerGame[] | null;
}

type PlayerGame = {
  gameId: number;
  date: string;
  team1: string;
  team2: string;
  stats: string[];
}

type PlayerPosition = 'P' | 'C' | '1B' | '2B' | '3B' | 'SS' | 'OF'
