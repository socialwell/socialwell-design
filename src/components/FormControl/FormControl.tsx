import React, { HTMLInputTypeAttribute } from "react";
import {
  FormControlWrapper,
  Input,
  Label,
  Select,
  Textarea,
} from "./styles/formControlStyles";

export interface FormControlProps {
  children?: React.ReactNode;
  inputType: "text" | "select" | "textarea";
  size?: "sm" | "md";
  label: string;
  type?: HTMLInputTypeAttribute;
  value: string;
  name: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => void;
}

export const FormControl: React.FC<FormControlProps> = ({
  children,
  inputType = "text",
  size = "md",
  label,
  name,
  value,
  type = "text",
  onChange,
}) => {
  if (inputType === "select") {
    return (
      <FormControlWrapper>
        <Label htmlFor={label}>{label}</Label>
        <Select
          inputSize={size}
          id={label}
          name={name}
          value={value}
          onChange={onChange}
        >
          {children}
        </Select>
      </FormControlWrapper>
    );
  }
  if (inputType === "textarea") {
    return (
      <FormControlWrapper>
        <Label htmlFor={label}>{label}</Label>
        <Textarea id={label} value={value} name={name} onChange={onChange} />
      </FormControlWrapper>
    );
  }
  return (
    <FormControlWrapper>
      <Label htmlFor={label}>{label}</Label>
      <Input
        inputSize={size}
        type={type}
        id={label}
        name={name}
        value={value}
        onChange={onChange}
      />
    </FormControlWrapper>
  );
};
