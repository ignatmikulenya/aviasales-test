import React from "react";
import classnames from "classnames";

import Tab from "../Tab";

import { TOption } from "../../types/option";

import "./style.css";

type Props<T> = {
  value: T;
  options: TOption[];
  onClick: (option: TOption) => void;
  className?: string;
};

export default function Tabs<T>({
  value,
  options,
  onClick,
  className,
}: Props<T>) {
  return (
    <ul className={classnames("tabs", className)}>
      {options.map((option, id) => (
        <Tab
          key={id}
          isActive={option.value === value}
          text={option.text}
          onClick={() => onClick(option)}
        />
      ))}
    </ul>
  );
}
