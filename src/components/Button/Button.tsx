import React from "react";
import { BtnLeftIcon } from "../../assets";
import { MainButton, OutlineButton, SolidButton } from "./styles/buttonStyles";

export interface ButtonProps {
  variant: "solid" | "outline";
  size?: "md" | "lg";
  name: string;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  name,
  size = "md",
  icon = false,
  ...restProps
}) => {
  if (variant === "solid") {
    return (
      <SolidButton size={size} {...restProps}>
        {icon && <BtnLeftIcon />}
        {name}
      </SolidButton>
    );
  }
  if (variant === "outline") {
    return (
      <OutlineButton size={size} {...restProps}>
        {icon && <BtnLeftIcon />}
        {name}
      </OutlineButton>
    );
  }

  return <MainButton size={size}>{name}</MainButton>;
};
