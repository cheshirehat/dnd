let knightPosition: [number, number] = [1, 7];
let observers: PositionObserver[] = [];
export type PositionObserver = ((position: [number, number]) => void) | null;

const emitChange = (): void => {
  observers.forEach((o) => o && o(knightPosition));
};

export const observe = (o: PositionObserver) => {
  observers.push(o);
  emitChange();

  return () => {
    observers = observers.filter((t) => t !== o);
  };
};

export const canMoveKnight = (toX: number, toY: number): boolean => {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  );
};

export const moveKnight = (toX: number, toY: number): void => {
  knightPosition = [toX, toY];
  emitChange();
};
