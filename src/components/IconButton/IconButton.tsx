import React from "react";
import { Button } from "./styles/iconBtnStyles";
import { BtnLeftIcon } from "../../assets";

export interface Props {
  variant?: "outline" | "ghost";
  size?: "md" | "lg";
}

const IconButton: React.FC<Props> = ({
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

export default IconButton;
