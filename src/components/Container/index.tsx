import React, { ReactNode } from "react";

import "./style.css";

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return <div className="container">{children}</div>;
}
