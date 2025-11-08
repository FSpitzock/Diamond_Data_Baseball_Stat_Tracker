import React, { useState } from 'react';

// type CounterState = {
//   count: number;
// }

// export default function AddStat() {
//   const [value, setValue] = useState("");

//   return (
//     <label>
//     Amount:
//     <input
//       type="number"
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//       required
//     />
//   </label>

// )};

// v2

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

return (
  <div className="counter">
    <h2>Counter: {state.count}</h2>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
)};

export default GameStatsForm

