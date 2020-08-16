import React from "react";

import Checkbox from "../Checkbox";

import { TOption } from "../../types/option";

import "./style.css";

type Props = {
  value: string[];
  options: TOption[];
  onChange: (option: TOption) => void;
};

export default function Filter({ value, options, onChange }: Props) {
  return (
    <div className="filter">
      <div className="filter__head">
        <p className="filter__header">Количество пересадок</p>
      </div>
      <ul className="filter__options">
        {options.map((option, id) => (
          <li key={id} className="filter__option">
            <Checkbox
              checked={value.includes(option.value)}
              text={option.text}
              onChange={() => onChange(option)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
