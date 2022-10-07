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
  const randomLabel = Math.random() * 99999;
  return (
    <CheckboxContainer
      htmlFor={`${label === "" ? "" : `label-${randomLabel}`}`}
    >
      <CheckboxField
        type="checkbox"
        onChange={onChange}
        checked={isChecked}
        disabled={disabled}
        id={`${label === "" ? "" : `label-${randomLabel}`}`}
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
