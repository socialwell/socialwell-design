import React from "react";
import { CheckboxContainer, CheckboxField } from "./styles/checkboxStyles";

interface Props {
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Checkbox: React.FC<Props> = ({
  isChecked,
  onChange,
  ...restProps
}) => {
  return (
    <CheckboxContainer>
      <CheckboxField
        type="checkbox"
        onChange={onChange}
        checked={isChecked}
        {...restProps}
      />
      <span className="checkmark"></span>
    </CheckboxContainer>
  );
};
