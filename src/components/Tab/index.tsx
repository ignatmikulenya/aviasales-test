import React from "react";
import classnames from "classnames";

import "./style.css";

type Props = {
  tabIndex: number;
  activeTabIndex: number;
  text: string;
  onClick: () => void;
};

export default function Tab({
  tabIndex,
  activeTabIndex,
  text,
  onClick,
}: Props) {
  return (
    <li
      onClick={onClick}
      className={classnames("tab", {
        "tab--selected": tabIndex === activeTabIndex,
      })}
    >
      {text}
    </li>
  );
}
