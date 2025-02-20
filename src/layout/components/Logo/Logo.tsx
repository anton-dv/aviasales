import { FC } from "react";
import logoPath from "./Logo.svg";

import classes from "./logo.module.scss";

export const Logo: FC = () => {

  return (
    <div className={classes.logo}>
      <img src={logoPath} alt="aviasales logo" />
    </div>
  );
};
