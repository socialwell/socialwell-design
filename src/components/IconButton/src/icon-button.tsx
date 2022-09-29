import React from "react";
import { Button } from "./styles/iconBtnStyles";
import { BtnLeftIcon } from "../../../assets";

export interface IconButtonProps {
  variant?: "outline" | "ghost";
  size?: "md" | "lg";
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  variant = "outline",
  size = "md",
  onClick,
  ...restProps
}) => {
  return (
    <Button variant={variant} btnSize={size} onClick={onClick} {...restProps}>
      <BtnLeftIcon />
    </Button>
  );
};
