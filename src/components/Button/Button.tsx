import React, {FC} from "react";
import cn from 'classnames';

import styles from './Button.module.css';
import {IButton} from "./Button.typings";

const Button: FC<IButton> = ({
    children,
    colorText,
    colorButton,
    borderRadius,
    size = "M",
    type= "button",
    className,
    full = false,
    outlined = false,
    disabled = false,
}) => {
    const classes = cn(
        styles.button,
        styles[`size_${size}`],
        full && styles.full,
        disabled && styles.disabled,
        outlined && styles.outlined,
        className,
    );

    const composedStyles = {
        color: colorText,
        backgroundColor: colorButton,
        borderRadius,
    };

    return <button type={type} style={composedStyles} className={classes} disabled={disabled}>{children}</button>;
};

export default Button;
