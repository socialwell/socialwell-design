import React from "react";
import { BtnLeftIcon } from "../../assets";
import { MainButton, OutlineButton, SolidButton } from "./styles/buttonStyles";

export interface ButtonProps {
  variant: "solid" | "outline";
  size?: "md" | "lg";
  name: string;
  icon?: boolean;
  type: "submit" | "button" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  name,
  size = "md",
  icon = false,
  type = "submit",
  ...restProps
}) => {
  if (variant === "solid") {
    return (
      <SolidButton size={size} type={type} {...restProps}>
        {icon && <BtnLeftIcon />}
        {name}
      </SolidButton>
    );
  }
  if (variant === "outline") {
    return (
      <OutlineButton size={size} type={type} {...restProps}>
        {icon && <BtnLeftIcon />}
        {name}
      </OutlineButton>
    );
  }

  return <MainButton size={size}>{name}</MainButton>;
};
