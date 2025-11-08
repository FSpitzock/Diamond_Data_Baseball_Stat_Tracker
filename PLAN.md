# GameStats Counters Implementation Plan

## Goal
Enable each counter in the form to directly edit the `GameStats` state provided via props, using safe, typed, and predictable updates.

## Data Model
- Use `GameStats` from `src/types/game.ts`:
  - `atBats`, `hits`, `singles`, `doubles`, `triples`, `homeRuns`, `rbi`, `walks`, `strikeOuts` (all `number`).
- Define a type alias for keys: `type StatKey = keyof GameStats`.

## Props Contract (Recommended)
Update `GameStatsForm` to be a controlled component that receives the stats and a state update function:
- `gameStats: GameStats` — current values to display.
- `setGameStats: React.Dispatch<React.SetStateAction<GameStats>>` — functional update to change state safely.

Alternative (if preferred):
- `onChange: (next: GameStats) => void` — controlled via parent; internally compute `next` and call this.

## Component Responsibilities
- Render a counter UI for each `GameStats` field with `-` and `+` buttons.
- Prevent negative values (clamp at `0`); disable or grey out decrement when at `0`.
- Use functional updates to avoid race conditions and stale closures during rapid clicks.
- Keep implementation type-safe and avoid magic strings by using a key map.

## State Update Handlers
Implement generic, reusable handlers:
- `updateStat(stat: StatKey, delta: number)`
  - `setGameStats(prev => ({ ...prev, [stat]: Math.max(0, prev[stat] + delta) }))`
- `increment(stat: StatKey)` calls `updateStat(stat, +1)`.
- `decrement(stat: StatKey)` calls `updateStat(stat, -1)`.

## Consistency & Derived Rules (Options)
Decide how to handle relationships among stats:
- Option A (recommended for clarity): Treat `hits` as derived: `hits = singles + doubles + triples + homeRuns`.
  - Remove `hits` counter; compute it on render or before submit.
- Option B: Keep all counters independent but validate:
  - Warn if `hits < singles + doubles + triples + homeRuns`.
  - Warn if `atBats < hits + strikeOuts` (typical constraint).

Choose one approach based on assignment requirements. If Option A is chosen, add a small helper to compute derived fields before submission or display.

## UI Structure
- Reusable `CounterControl` component props: `label: string`, `value: number`, `onIncrement: () => void`, `onDecrement: () => void`, `decrementDisabled?: boolean`.
- Render a grid/list of `CounterControl` for each stat key.
- Accessibility: buttons have `aria-label` (e.g., `"Increment singles"`), and keyboard support via standard button semantics.

## Integration Flow
- Parent (e.g., `Stats` page) holds canonical state:
  - `const [gameStats, setGameStats] = useState<GameStats>(initialStats)`.
- Pass to `GameStatsForm`:
  - `<GameStatsForm gameStats={gameStats} setGameStats={setGameStats} />`.
- On submit, either:
  - Validate and compute derived fields (if Option A), then pass to backend or summary.
  - Or simply pass `gameStats` as-is (Option B).

## TypeScript Details
- Labels keyed by stat names: `const STAT_LABELS: Record<StatKey, string> = { ... }`.
- Render loop: `Object.entries(STAT_LABELS).map(([key, label]) => ...)` with `const stat = key as StatKey`.
- Handlers: `onIncrement={() => increment(stat)}`; `onDecrement={() => decrement(stat)}`; `decrementDisabled={gameStats[stat] === 0}`.

## Example (Reference Only; do not apply now)
```tsx
// types
type StatKey = keyof GameStats;
const STAT_LABELS: Record<StatKey, string> = {
  atBats: 'At Bats',
  hits: 'Hits',
  singles: 'Singles',
  doubles: 'Doubles',
  triples: 'Triples',
  homeRuns: 'Home Runs',
  rbi: 'RBI',
  walks: 'Walks',
  strikeOuts: 'Strike Outs',
};

// in GameStatsForm props
type Props = {
  gameStats: GameStats;
  setGameStats: React.Dispatch<React.SetStateAction<GameStats>>;
};

function updateStat(stat: StatKey, delta: number, setGameStats: Props['setGameStats']) {
  setGameStats(prev => ({ ...prev, [stat]: Math.max(0, prev[stat] + delta) }));
}

const GameStatsForm: React.FC<Props> = ({ gameStats, setGameStats }) => {
  const increment = (stat: StatKey) => updateStat(stat, +1, setGameStats);
  const decrement = (stat: StatKey) => updateStat(stat, -1, setGameStats);

  return (
    <div className="stats-grid">
      {Object.entries(STAT_LABELS).map(([key, label]) => {
        const stat = key as StatKey;
        const value = gameStats[stat];
        return (
          <CounterControl
            key={key}
            label={label}
            value={value}
            onIncrement={() => increment(stat)}
            onDecrement={() => decrement(stat)}
            decrementDisabled={value === 0}
          />
        );
      })}
    </div>
  );
};
```

## Testing & Validation
- Unit test `updateStat` for clamp-at-zero and idempotent functional updates.
- Optional integration test to ensure UI binds values and buttons trigger correct state changes.

## Rollout Steps
1. Update `GameStatsForm` signature to accept `gameStats` and `setGameStats`.
2. Implement `STAT_LABELS`, `StatKey`, and the `updateStat` helpers.
3. Render counters for all fields; decide on derived handling for `hits`.
4. Wire `Stats` page to hold canonical state and pass props.
5. Manually test in dev and adjust any validation rules.

## Notes
- No files in `./src` changed yet; this document outlines the approach and provides reference code for implementation when you’re ready.