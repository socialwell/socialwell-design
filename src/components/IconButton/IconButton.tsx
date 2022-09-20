import React from "react";
import { Button } from "./styles/iconBtnStyles";
import { BtnLeftIcon } from "../../assets";

export interface IconButtonProps {
  variant?: "outline" | "ghost";
  size?: "md" | "lg";
}

export const IconButton: React.FC<IconButtonProps> = ({
  variant = "outline",
  size = "md",
  ...restProps
}) => {
  return (
    <Button variant={variant} btnSize={size} {...restProps}>
      <BtnLeftIcon />
    </Button>
  );
};
