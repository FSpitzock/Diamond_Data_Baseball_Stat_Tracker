import React, { useState, useEffect } from 'react';
import { GameStats } from '../../types/game';
import { PlayerGame } from '../../types/player';
import { PlusIcon, MinusIcon, ArrowCounterClockwiseIcon  } from '@phosphor-icons/react';

const initialGameStats: GameStats = {
  atBats: 0,
  hits: 0,
  singles: 0,
  doubles: 0,
  triples: 0,
  homeRuns: 0,
  rbi: 0,
  walks: 0,
  strikeOuts: 0,
};

const GameStatsForm: React.FC = () => {
  const [gameStats, setGameStats] = useState<GameStats>({ ...initialGameStats });

    const [playerGame, setPlayerGame] = useState<PlayerGame>({
    gameId: Date.now(), // ✅ unique ID per save
    date: "",
    team1: "",
    team2: "",
    stats: { ...initialGameStats },
  });

  const [notification, setNotification] = useState<null | { message: string; type: "success" | "error" }>(null);


  useEffect(() => {
    setPlayerGame(pg => ({ ...pg, stats: gameStats }));
  }, [gameStats]);


  // LOCAL STORAGE
const saveToLocalStorage = () => {
  try {
    // Get existing saved games (ensure it's always an array)
    const existing = localStorage.getItem("playerGames");
    let games: PlayerGame[] = [];

    if (existing) {
      try {
        const parsed = JSON.parse(existing);
        games = Array.isArray(parsed) ? parsed : [];
      } catch (error) {
        console.warn("Corrupted localStorage data. Resetting.");
        games = [];
      }
    }

    // Check if this game already exists (match by ID)
    const existingIndex = games.findIndex(
      (g) => g.gameId === playerGame.gameId
    );

     const newGame: PlayerGame = {
        ...playerGame,
        gameId: Date.now(), // ensure unique
        date: new Date().toISOString(),
        stats: { ...gameStats },
      };

    if (existingIndex !== -1) {
      // Update existing entry
      games[existingIndex] = newGame;
    } else {
      // Add new entry
      games.push(newGame);
    }

    // Save updated array back to local storage
  
  localStorage.setItem("playerGames", JSON.stringify(games));

  // ✅ Show success notification
  setNotification({
    message: existingIndex !== -1 ? "✅ Updated game stats." : "💾 Saved new game!",
    type: "success",
  });

   // --- RESET FORM USING initialGameStats ---
      setGameStats({ ...initialGameStats });
      setPlayerGame({
        gameId: Date.now(),
        date: "",
        team1: "",
        team2: "",
        stats: { ...initialGameStats },
      });

  // Hide notification after 3 seconds
  setTimeout(() => setNotification(null), 3000);

} catch (error) {
  console.error("❌ Failed to save player game:", error);

  // ❌ Show error notification
  setNotification({
    message: "Save failed. Check console for details.",
    type: "error",
  });

  setTimeout(() => setNotification(null), 5000);
}
  };


  return (
    <section className="counter">
      <header>
        <h1>Game Stats</h1>
        <p className="text-sm text-neutral-500">Enter the stats for today's game.</p>
      </header>
      <div>
        <input className="items-stretch w-full" type="text" placeholder='Opponent' value={playerGame.team2} onChange={(e) => setPlayerGame(pg => ({ ...pg, team2: e.target.value }))} />
      </div>
      <div className="flex row-container items-center gap-8">
        <div className="labelContainer">
          <h2 className="label">At Bats</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="iconButton" onClick={() => setGameStats({ ...gameStats, atBats: gameStats.atBats - 1 })}><MinusIcon size={24} /></button>
          <span className="statInput">{gameStats.atBats}</span>
          <button className="iconButton" onClick={() => setGameStats({ ...gameStats, atBats: gameStats.atBats + 1 })}><PlusIcon size={24} /></button>
          <button className="iconButton-destructive" onClick={() => setGameStats({ ...gameStats, atBats: 0 })}><ArrowCounterClockwiseIcon size={24} /></button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div className="labelContainer">
          <h2 className="label">Hits</h2>
        </div>
        <div className="flex row items-center gap-2">
          <button className="iconButton" onClick={() => setGameStats({ ...gameStats, hits: gameStats.hits - 1 })}><MinusIcon size={24} /></button>
          <span className="statInput">{gameStats.hits}</span>
          <button className="iconButton" onClick={() => setGameStats({ ...gameStats, hits: gameStats.hits + 1 })}><PlusIcon size={24} /></button>
          <button className="iconButton-destructive" onClick={() => setGameStats({ ...gameStats, hits: 0 })}><ArrowCounterClockwiseIcon size={24} /></button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div className="labelContainer">
          <h2 className="label">Singles</h2>
        </div>
        <div className="flex row items-center gap-2">
          <button className="iconButton" onClick={() => setGameStats({ ...gameStats, singles: gameStats.singles - 1 })}><MinusIcon size={24} /></button>
          <span className="statInput">{gameStats.singles}</span>
          <button className="iconButton" onClick={() => setGameStats({ ...gameStats, singles: gameStats.singles + 1 })}><PlusIcon size={24} /></button>
          <button className="iconButton-destructive" onClick={() => setGameStats({ ...gameStats, singles: 0 })}><ArrowCounterClockwiseIcon size={24} /></button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div className="labelContainer">
          <h2 className="label">Doubles</h2>
        </div>
        <div className="flex row items-center gap-2">
          <button className="iconButton" onClick={() => setGameStats({ ...gameStats, doubles: gameStats.doubles - 1 })}><MinusIcon size={24} /></button>
          <span className="statInput">{gameStats.doubles}</span>
          <button className="iconButton" onClick={() => setGameStats({ ...gameStats, doubles: gameStats.doubles + 1 })}><PlusIcon size={24} /></button>
          <button className="iconButton-destructive" onClick={() => setGameStats({ ...gameStats, doubles: 0 })}><ArrowCounterClockwiseIcon size={24} /></button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div className="labelContainer">
          <h2 className="label">Triples</h2>
        </div>
        <div className="flex row items-center gap-2">
          <button className="iconButton" onClick={() => setGameStats({ ...gameStats, triples: gameStats.triples - 1 })}><MinusIcon size={24} /></button>
          <span className="statInput">{gameStats.triples}</span>
          <button className="iconButton" onClick={() => setGameStats({ ...gameStats, triples: gameStats.triples + 1 })}><PlusIcon size={24} /></button>
          <button className="iconButton-destructive" onClick={() => setGameStats({ ...gameStats, triples: 0 })}><ArrowCounterClockwiseIcon size={24} /></button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div className="labelContainer">
          <h2 className="label">Home Runs</h2>
        </div>
        <div className="flex row items-center gap-2">
          <button className="iconButton" onClick={() => setGameStats({ ...gameStats, homeRuns: gameStats.homeRuns - 1 })}><MinusIcon size={24} /></button>
          <span className="statInput">{gameStats.homeRuns}</span>
          <button className="iconButton" onClick={() => setGameStats({ ...gameStats, homeRuns: gameStats.homeRuns + 1 })}><PlusIcon size={24} /></button>
          <button className="iconButton-destructive" onClick={() => setGameStats({ ...gameStats, homeRuns: 0 })}><ArrowCounterClockwiseIcon size={24} /></button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div className="labelContainer">
          <h2 className="label">RBI</h2>
        </div>
        <div className="flex row items-center gap-2">
          <button className="iconButton" onClick={() => setGameStats({ ...gameStats, rbi: gameStats.rbi - 1 })}><MinusIcon size={24} /></button>
          <span className="statInput">{gameStats.rbi}</span>
          <button className="iconButton" onClick={() => setGameStats({ ...gameStats, rbi: gameStats.rbi + 1 })}><PlusIcon size={24} /></button>
          <button className="iconButton-destructive" onClick={() => setGameStats({ ...gameStats, rbi: 0 })}><ArrowCounterClockwiseIcon size={24} /></button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div className="labelContainer">
          <h2 className="label">Walks</h2>
        </div>
        <div className="flex row items-center gap-2">
          <button className="iconButton" onClick={() => setGameStats({ ...gameStats, walks: gameStats.walks - 1 })}><MinusIcon size={24} /></button>
          <span className="statInput">{gameStats.walks}</span>
          <button className="iconButton" onClick={() => setGameStats({ ...gameStats, walks: gameStats.walks + 1 })}><PlusIcon size={24} /></button>
          <button className="iconButton-destructive" onClick={() => setGameStats({ ...gameStats, walks: 0 })}><ArrowCounterClockwiseIcon size={24} /></button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div className="labelContainer">
          <h2 className="label">Strike Outs</h2>
        </div>
        <div className="flex row items-center gap-2">
          <button className="iconButton" onClick={() => setGameStats({ ...gameStats, strikeOuts: gameStats.strikeOuts - 1 })}><MinusIcon size={24} /></button>
          <span className="statInput">{gameStats.strikeOuts}</span>
          <button className="iconButton" onClick={() => setGameStats({ ...gameStats, strikeOuts: gameStats.strikeOuts + 1 })}><PlusIcon size={24} /></button>
          <button className="iconButton-destructive" onClick={() => setGameStats({ ...gameStats, strikeOuts: 0 })}><ArrowCounterClockwiseIcon size={24} /></button>
        </div>
      </div>

    
   <div className="relative mt-4">
  <button className="buttonPrimary" onClick={saveToLocalStorage}>
    Save Stats
  </button>

  {notification && (
  <div
    className={`absolute top-[-3rem] left-1/2 transform -translate-x-1/2
                px-4 py-2 rounded shadow-lg text-white font-semibold
                transition-all duration-300 ${
                  notification.type === "success" ? "bg-green-500" : "bg-red-500"
                }`}
  >
    {notification.message}
  </div>
)}
</div>

    </section>
    
  )};




  export default GameStatsForm
