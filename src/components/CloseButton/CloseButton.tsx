import React from "react";
import { CloseIcon } from "../../assets";

import { Button } from "./styles/closeBtnStyles";

const CloseButton = ({ ...restProps }) => {
  return (
    <Button {...restProps}>
      <CloseIcon />
    </Button>
  );
};

export default CloseButton;
