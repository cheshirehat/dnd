import React from "react";
import BoardSquare from "./BoardSquare";
import Knight from "./Knight";

interface Props {
  knightPosition: [number, number];
}

const Board: React.FC<Props> = (props: Props) => {
  const knightPosition = props.knightPosition;

  const renderPiece = (
    x: number,
    y: number,
    [knightX, kngihtY]: [number, number]
  ): JSX.Element | undefined => {
    if (x === knightX && y === kngihtY) {
      return <Knight />;
    }
  };

  const renderSquare = (i: number): JSX.Element => {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
        <BoardSquare x={x} y={y}>
          {renderPiece(x, y, knightPosition)}
        </BoardSquare>
      </div>
    );
  };

  const squares = [];
  for (let i = 0; i < 64; i += 1) {
    squares.push(renderSquare(i));
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {squares}
    </div>
  );
};

export default Board;
