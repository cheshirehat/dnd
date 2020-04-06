import React from "react";

interface Props {
  color: string;
}

const Overlay: React.FC<Props> = (props: Props) => {
  const color = props.color;
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }}
    />
  );
};

export default Overlay;
