import React from "react";
import { BtnLeftIcon } from "../../../assets";
import { MainButton, OutlineButton, SolidButton } from "./styles/buttonStyles";

export interface ButtonProps {
  variant: "solid" | "outline";
  size?: "md" | "lg";
  name: string;
  icon?: boolean;
  type: "submit" | "button" | "reset";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  name,
  size = "md",
  icon = false,
  type = "submit",
  onClick,
  ...restProps
}) => {
  if (variant === "solid") {
    return (
      <SolidButton size={size} type={type} onClick={onClick} {...restProps}>
        {icon && <BtnLeftIcon />}
        {name}
      </SolidButton>
    );
  }
  if (variant === "outline") {
    return (
      <OutlineButton size={size} type={type} onClick={onClick} {...restProps}>
        {icon && <BtnLeftIcon />}
        {name}
      </OutlineButton>
    );
  }

  return (
    <MainButton size={size} onClick={onClick}>
      {name}
    </MainButton>
  );
};
