import React from "react";
import { CloseIcon } from "../../../assets";
import { Button } from "./styles/closeBtnStyles";

export const CloseButton = ({ ...restProps }) => {
  return (
    <Button {...restProps}>
      <CloseIcon />
    </Button>
  );
};
