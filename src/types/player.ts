import { PlayerPosition } from './position';
import { GameStats } from './game';

export interface Player {
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
