import React, { useState, useEffect } from "react";
import Board from "./Board";
import { observe } from "./Game";

export interface ChessboardTutorialAppState {
  knightPosition: [number, number];
}

const containerStyle: React.CSSProperties = {
  width: 500,
  height: 500,
  border: "1px solid gray",
};

const ChessboardTutorialApp: React.FC = () => {
  const [knightPos, setKnightPos] = useState<[number, number]>([1, 7]);

  useEffect(() => observe((newPos: [number, number]) => setKnightPos(newPos)));
  return (
    <div>
      <div style={containerStyle}>
        <Board knightPosition={knightPos} />
      </div>
    </div>
  );
};

export default ChessboardTutorialApp;
