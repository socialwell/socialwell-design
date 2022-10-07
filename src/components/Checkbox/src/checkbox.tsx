import React from "react";
import { CheckboxContainer, CheckboxField } from "./styles/checkboxStyles";

export interface CheckboxProps {
  isChecked: boolean;
  disabled?: boolean;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Checkbox: React.FC<CheckboxProps> = ({
  isChecked,
  onChange,
  disabled = false,
  label = "",
  ...restProps
}) => {
  return (
    <CheckboxContainer htmlFor={`${label === "" ? "" : label}`}>
      <CheckboxField
        type="checkbox"
        onChange={onChange}
        checked={isChecked}
        disabled={disabled}
        id={`${label === "" ? "" : label}`}
        {...restProps}
      />
      <span className="checkmark"></span>
      {label !== "" && (
        <span style={{ position: "relative", marginLeft: "30px" }}>
          {label}
        </span>
      )}
    </CheckboxContainer>
  );
};
