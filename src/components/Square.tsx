import React from "react";

interface Props {
  black?: boolean;
  children: React.ReactChild | null;
}

const Square: React.FC<Props> = (props: Props) => {
  const black = props.black;
  const children = props.children;
  const fill = black ? "black" : "white";
  const stroke = black ? "white" : "black";
  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default Square;
