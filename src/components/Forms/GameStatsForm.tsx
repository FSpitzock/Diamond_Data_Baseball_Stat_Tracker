import React, { useState } from 'react';
import { GameStats } from '../../types/game';

type CounterState = {
  count: number;
}

const GameStatsForm: React.FC = () => {
  const [state, setState] = useState<CounterState>({
    count: 0,
  });

  const decrement = () => {
    setState({ count: state.count - 1 });
  }

  const increment = () => {
    setState({ count: state.count + 1 });
  }

  // LOCAL STORAGE
const saveToLocalStorage = () => {
  const existing = localStorage.getItem("gameStats");
  
  // Parse and ensure it's an array
  let statsArray: CounterState[] = [];
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
  statsArray.push({ ...state, savedAt: new Date().toISOString() });

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
          <div className="text-2xl font-bold text-center w-12">{state.count}</div>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          <button onClick={() => setState({ count: 0 })}>Reset</button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div>
          <h2>Hits:</h2>
        </div>
        <div className="flex row items-center gap-2">
          <div className="text-2xl font-bold text-center w-12">{state.count}</div>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          <button onClick={() => setState({ count: 0 })}>Reset</button>
        </div>
      </div>  

      <div className="row-container flex row items-center gap-8">
        <div>
          <h2>Singles:</h2>
        </div>
        <div className="flex row items-center gap-2">
          <div className="text-2xl font-bold text-center w-12">{state.count}</div>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          <button onClick={() => setState({ count: 0 })}>Reset</button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div>
          <h2>Doubles:</h2>
        </div>
        <div className="flex row items-center gap-2">
          <div className="text-2xl font-bold text-center w-12">{state.count}</div>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          <button onClick={() => setState({ count: 0 })}>Reset</button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div>
          <h2>Triples:</h2>
        </div>
        <div className="flex row items-center gap-2">
          <div className="text-2xl font-bold text-center w-12">{state.count}</div>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          <button onClick={() => setState({ count: 0 })}>Reset</button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div>
          <h2>Home Runs:</h2>
        </div>
        <div className="flex row items-center gap-2">
          <div className="text-2xl font-bold text-center w-12">{state.count}</div>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          <button onClick={() => setState({ count: 0 })}>Reset</button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div>
          <h2>RBI:</h2>
        </div>
        <div className="flex row items-center gap-2">
          <div className="text-2xl font-bold text-center w-12">{state.count}</div>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          <button onClick={() => setState({ count: 0 })}>Reset</button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div>
          <h2>Walks:</h2>
        </div>
        <div className="flex row items-center gap-2">
          <div className="text-2xl font-bold text-center w-12">{state.count}</div>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          <button onClick={() => setState({ count: 0 })}>Reset</button>
        </div>
      </div>

      <div className="row-container flex row items-center gap-8">
        <div>
          <h2>Strikeouts:</h2>
        </div>
        <div className="flex row items-center gap-2">
          <div className="text-2xl font-bold text-center w-12">{state.count}</div>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          <button onClick={() => setState({ count: 0 })}>Reset</button>
        </div>
      </div>
    
    <button onClick={saveToLocalStorage}>Save Stats</button>
    </section>

    
  )};




  export default GameStatsForm
