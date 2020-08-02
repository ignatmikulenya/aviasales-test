import React from "react";

import "./style.css";

type Props = {
  checked?: boolean;
  text: string;
  onChange: () => void;
};

export default function Checkbox({ checked, text, onChange }: Props) {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox__input"
      />
      <p className="checkbox__text">{text}</p>
    </label>
  );
}

Checkbox.defaultProps = {
  checked: false,
};
