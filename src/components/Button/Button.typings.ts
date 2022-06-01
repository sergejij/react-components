import React from "react";

export type SizeButton = "XS" | "S" | "M" | "L" | "XL";
export type TypeButton = "submit" | "button" | "reset";

export interface IButton {
    children?: React.ReactNode;
    colorText?: string;
    colorButton?: string;
    borderRadius?: number;
    size?: SizeButton;
    type?: TypeButton;
    className?: string;
    full?: boolean;
    disabled?: boolean;
    outlined?: boolean;
}