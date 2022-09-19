import React from "react";
import { RadioField } from "./styles/radioStyles";

interface Props {
  isChecked: boolean;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Radio: React.FC<Props> = ({
  isChecked,
  onChange,
  disabled = false,
  ...restProps
}) => {
  return (
    <>
      <RadioField
        type="radio"
        checked={isChecked}
        onChange={onChange}
        disabled={disabled}
        {...restProps}
      />
    </>
  );
};

export default Radio;
