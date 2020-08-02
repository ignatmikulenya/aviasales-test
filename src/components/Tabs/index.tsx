import React from "react";
import classnames from "classnames";

import Tab from "../Tab";

import { Option } from "../../types/option";

import "./style.css";

type Props = {
  selectedIndex: number;
  options: Option[];
  onClick: (option: Option) => void;
  className?: string;
};

export default function Tabs({
  selectedIndex,
  options,
  onClick,
  className,
}: Props) {
  return (
    <ul className={classnames("tabs", className)}>
      {options.map((option, id) => (
        <Tab
          key={id}
          tabIndex={id}
          activeTabIndex={selectedIndex}
          text={option.text}
          onClick={() => onClick(option)}
        />
      ))}
    </ul>
  );
}
