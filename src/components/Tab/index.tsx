import React from "react";
import classnames from "classnames";

import "./style.css";

type Props = {
  isActive: boolean;
  text: string;
  onClick: () => void;
};

export default function Tab({ isActive, text, onClick }: Props) {
  return (
    <li
      onClick={onClick}
      className={classnames("tab", {
        "tab--selected": isActive,
      })}
    >
      {text}
    </li>
  );
}
