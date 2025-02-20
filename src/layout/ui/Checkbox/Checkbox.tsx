import { FC } from "react";

import classes from "./checkbox.module.scss";

export type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
};

export const Checkbox: FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const onClick = () => {
    if (onChange) onChange(!checked);
  };

  return (
    <div className={classes.checkbox} onClick={onClick}>
      <div
        className={`${classes.checkbox__checker} ${
          checked ? classes["checkbox__checker--checked"] : ""
        }`}
      >
        {checked && (
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z"
              fill="#2196F3"
            />
          </svg>
        )}
      </div>
      <label className={classes.checkbox__label}>
        {label}
      </label>
    </div>
  );
};
