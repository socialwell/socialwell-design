import React from "react";
import { BtnLeftIcon } from "../../assets";
import { MainButton, OutlineButton, SolidButton } from "./styles/buttonStyles";

export interface Props {
  variant: "solid" | "outline";
  size?: "md" | "lg";
  name: string;
  icon?: boolean;
}

const Button = ({
  variant,
  name,
  size = "md",
  icon = false,
  ...restProps
}: Props) => {
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

export default Button;
