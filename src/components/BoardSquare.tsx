import React from "react";
import Square from "./Square";
import Overlay from "./Overlay";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./Constants";
import { moveKnight, canMoveKnight } from "./Game";

interface Props {
  x: number;
  y: number;
  children: any;
}

const BoardSquare: React.FC<Props> = (props: Props) => {
  const x = props.x;
  const y = props.y;
  const black = (x + y) % 2 === 1;
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.KNIGHT,
    drop: () => moveKnight(x, y),
    canDrop: () => canMoveKnight(x, y),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <Square black={black}>{props.children}</Square>
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}
    </div>
  );
};

export default BoardSquare;
