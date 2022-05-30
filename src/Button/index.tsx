import cn from "classnames";
import React, { FC } from "react";

import styles from 'Button.module.css';
import { IButton, SizeButton, TypeButton } from "./Button.typings";

const Button: FC<IButton> = ({
  children,
  colorText,
  colorButton,
  borderRadius,
  size,
  type,
  className,
  full,
                                 disabled,
}) => {
    const classes = cn(
        styles.button,
    );

  return <button className={classes} disabled={disabled}>{children}</button>;
};

export default Button;
