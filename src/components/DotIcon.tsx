const grids = {
  "arrow-right": ["..o..", "...o.", "ooooo", "...o.", "..o.."],
  "arrow-up-right": ["..ooo", "...oo", "..o.o", ".o...", "....."],
  "arrow-left": ["..o..", ".o...", "ooooo", ".o...", "..o.."],
  plus: [".......", "...o...", "...o...", ".ooooo.", "...o...", "...o...", "......."],
  minus: [".......", ".......", ".......", ".ooooo.", ".......", ".......", "......."],
  coffee: [".o.o...", ".o.o...", "oooooo.", "o...o.o", "o...o.o", ".ooo.o.", "ooooooo"],
} as const;

export function DotIcon({ name, size = 20, motionDirection }: {
  name: keyof typeof grids;
  size?: number;
  motionDirection?: "right" | "diagonal" | "back";
}) {
  const grid = grids[name];
  const step = grid.length === 5 ? 4 : 3;
  const start = grid.length === 5 ? 4 : 3;
  const diagonal = name === "arrow-up-right";
  const points = grid.flatMap((row, y) => [...row].flatMap((dot, x) => dot === "o"
    ? [[start + x * step - (diagonal ? 2 : 0), start + y * step + (diagonal ? 2 : 0)] as const]
    : []));
  return (
    <svg data-arrow={motionDirection} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      {points.map(([x, y]) => <circle key={`${x},${y}`} cx={x} cy={y} r={name.startsWith("arrow") ? 1.25 : 1} />)}
    </svg>
  );
}
