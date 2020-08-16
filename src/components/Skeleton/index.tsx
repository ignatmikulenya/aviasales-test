import React from "react";
import cn from "classnames";

import "./style.css";

type Props = {
  width?: string;
  height?: string;
  className?: string;
};

export default function Skeleton({ width, height, className }: Props) {
  return (
    <span
      style={{ width, height }}
      className={cn("skeleton", "skeleton--pulse", className)}
    />
  );
}

Skeleton.defaultProps = {
  width: "100%",
  height: "100%",
};
