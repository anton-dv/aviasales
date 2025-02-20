import { FC } from "react";

import classes from "./button.module.scss";

export type ButtonProps = {
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({ onClick }) => {
  return <button onClick={onClick} className={classes.button}>Показать еще 5 билетов!</button>;
};
