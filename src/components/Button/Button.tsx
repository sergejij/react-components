import React from "react";
import styles from './Button.module.css';

type SizeType = "S" | "M" | "L";

export interface ButtonProps {
    label: string;
    size: SizeType;
}
const Button = (props: ButtonProps) => {
    return <button className={styles.button}>{props.label}</button>;
};
export default Button;
