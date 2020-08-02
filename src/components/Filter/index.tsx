import React from "react";

import Checkbox from "../Checkbox";

import { Option } from "../../types/option";

import "./style.css";

type Props = {
  activeOptions: string[];
  options: Option[];
  onChange: (option: Option) => void;
};

export default function Filter({ activeOptions, options, onChange }: Props) {
  return (
    <div className="filter">
      <div className="filter__head">
        <p className="filter__header">Количество пересадок</p>
      </div>
      <ul className="filter__options">
        {options.map((option, id) => (
          <li key={id} className="filter__option">
            <Checkbox
              checked={activeOptions.includes(option.value)}
              text={option.text}
              onChange={() => onChange(option)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
