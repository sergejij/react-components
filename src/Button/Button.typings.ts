import React from "react";

export type SizeButton = "S" | "M" | "L";
export type TypeButton = "submit" | "button" | "reset";

export interface IButton {
  children?: React.ReactNode;
  colorText?: string;
  colorButton?: string;
  borderRadius?: number;
  size?: SizeButton;
  type?: TypeButton;
  className?: string;
}
