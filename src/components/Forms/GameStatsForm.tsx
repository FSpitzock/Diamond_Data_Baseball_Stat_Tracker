import React, { useState, useEffect } from 'react';
import { GameStats } from '../../types/game';

const GameStatsForm: React.FC = () => {
  const [gameStats, setGameStats] = useState<GameStats>({
    atBats: 0,
    hits: 0,
    singles: 0,
    doubles: 0,
    triples: 0,
    homeRuns: 0,
    rbi: 0,
    walks: 0,
    strikeOuts: 0,
  });

// useEffect(() => {
//  go get GameStats from local storage
//  will need to add useEffect to Home page component to get GameStats from local storage

// Save GameStats to local storage
useEffect(() => {
  localStorage.setItem('gameStats', JSON.stringify(gameStats));
}, [gameStats]);

  // LOCAL STORAGE
const saveToLocalStorage = () => {
  const existing = localStorage.getItem("gameStats");
  
  // Parse and ensure it's an array
  let statsArray: GameStats[] = [];
  if (existing) {
    try {
      const parsed = JSON.parse(existing);
      statsArray = Array.isArray(parsed) ? parsed : [parsed]; // wrap single object in array
    } catch (error) {
      console.error("Failed to parse localStorage:", error);
      statsArray = [];
    }
  }

  // Add current state + timestamp
  statsArray.push({ ...gameStats, savedAt: new Date().toISOString() });

  // Save back to localStorage
  localStorage.setItem("gameStats", JSON.stringify(statsArray));
  alert("Saved!");
};

  return (
    <section className="counter">
      <div className="row-container flex row items-center gap-8">
        <div>
          <h2>At Bats:</h2>
        </div>
        <div className="flex row items-center gap-2">
          <div className="text-2xl font-bold text-center w-12">{gameStats.atBats}</div>
          <button onClick={() => setGameStats({ ...gameStats, atBats: gameStats.atBats - 1 })}>-</button>
          <button onClick={() => setGameStats({ ...gameStats, atBats: gameStats.atBats + 1 })}>+</button>
          <button onClick={() => setGameStats({ ...gameStats, atBats: 0 })}>Reset</button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div>
          <h2>Hits:</h2>
        </div>
        <div className="flex row items-center gap-2">
          <div className="text-2xl font-bold text-center w-12">{gameStats.hits}</div>
          <button onClick={() => setGameStats({ ...gameStats, hits: gameStats.hits - 1 })}>-</button>
          <button onClick={() => setGameStats({ ...gameStats, hits: gameStats.hits + 1 })}>+</button>
          <button onClick={() => setGameStats({ ...gameStats, hits: 0 })}>Reset</button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div>
          <h2>Singles:</h2>
        </div>
        <div className="flex row items-center gap-2">
          <div className="text-2xl font-bold text-center w-12">{gameStats.singles}</div>
          <button onClick={() => setGameStats({ ...gameStats, singles: gameStats.singles - 1 })}>-</button>
          <button onClick={() => setGameStats({ ...gameStats, singles: gameStats.singles + 1 })}>+</button>
          <button onClick={() => setGameStats({ ...gameStats, singles: 0 })}>Reset</button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div>
          <h2>Doubles:</h2>
        </div>
        <div className="flex row items-center gap-2">
          <div className="text-2xl font-bold text-center w-12">{gameStats.doubles}</div>
          <button onClick={() => setGameStats({ ...gameStats, doubles: gameStats.doubles - 1 })}>-</button>
          <button onClick={() => setGameStats({ ...gameStats, doubles: gameStats.doubles + 1 })}>+</button>
          <button onClick={() => setGameStats({ ...gameStats, doubles: 0 })}>Reset</button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div>
          <h2>Triples:</h2>
        </div>
        <div className="flex row items-center gap-2">
          <div className="text-2xl font-bold text-center w-12">{gameStats.triples}</div>
          <button onClick={() => setGameStats({ ...gameStats, triples: gameStats.triples - 1 })}>-</button>
          <button onClick={() => setGameStats({ ...gameStats, triples: gameStats.triples + 1 })}>+</button>
          <button onClick={() => setGameStats({ ...gameStats, triples: 0 })}>Reset</button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div>
          <h2>Home Runs:</h2>
        </div>
        <div className="flex row items-center gap-2">
          <div className="text-2xl font-bold text-center w-12">{gameStats.homeRuns}</div>
          <button onClick={() => setGameStats({ ...gameStats, homeRuns: gameStats.homeRuns - 1 })}>-</button>
          <button onClick={() => setGameStats({ ...gameStats, homeRuns: gameStats.homeRuns + 1 })}>+</button>
          <button onClick={() => setGameStats({ ...gameStats, homeRuns: 0 })}>Reset</button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div>
          <h2>RBI:</h2>
        </div>
        <div className="flex row items-center gap-2">
          <div className="text-2xl font-bold text-center w-12">{gameStats.rbi}</div>
          <button onClick={() => setGameStats({ ...gameStats, rbi: gameStats.rbi - 1 })}>-</button>
          <button onClick={() => setGameStats({ ...gameStats, rbi: gameStats.rbi + 1 })}>+</button>
          <button onClick={() => setGameStats({ ...gameStats, rbi: 0 })}>Reset</button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div>
          <h2>Walks:</h2>
        </div>
        <div className="flex row items-center gap-2">
          <div className="text-2xl font-bold text-center w-12">{gameStats.walks}</div>
          <button onClick={() => setGameStats({ ...gameStats, walks: gameStats.walks - 1 })}>-</button>
          <button onClick={() => setGameStats({ ...gameStats, walks: gameStats.walks + 1 })}>+</button>
          <button onClick={() => setGameStats({ ...gameStats, walks: 0 })}>Reset</button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div>
          <h2>Strike Outs:</h2>
        </div>
        <div className="flex row items-center gap-2">
          <div className="text-2xl font-bold text-center w-12">{gameStats.strikeOuts}</div>
          <button onClick={() => setGameStats({ ...gameStats, strikeOuts: gameStats.strikeOuts - 1 })}>-</button>
          <button onClick={() => setGameStats({ ...gameStats, strikeOuts: gameStats.strikeOuts + 1 })}>+</button>
          <button onClick={() => setGameStats({ ...gameStats, strikeOuts: 0 })}>Reset</button>
        </div>
      </div>
    
    <button onClick={saveToLocalStorage}>Save Stats</button>
    </section>

    
  )};




  export default GameStatsForm
