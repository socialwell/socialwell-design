import React from "react";
import {
  FormControlWrapper,
  Input,
  Label,
  Select,
  Textarea,
} from "./styles/formControlStyles";

export interface FormControlProps {
  children?: React.ReactNode;
  type: "text" | "select" | "textarea";
  size?: "sm" | "md";
  label: string;
  value: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => void;
}

export const FormControl: React.FC<FormControlProps> = ({
  children,
  type = "text",
  size = "md",
  label,
  value,
  onChange,
}) => {
  if (type === "select") {
    return (
      <FormControlWrapper>
        <Label htmlFor={label}>{label}</Label>
        <Select inputSize={size} id={label} value={value} onChange={onChange}>
          {children}
        </Select>
      </FormControlWrapper>
    );
  }
  if (type === "textarea") {
    return (
      <FormControlWrapper>
        <Label htmlFor={label}>{label}</Label>
        <Textarea id={label} value={value} onChange={onChange} />
      </FormControlWrapper>
    );
  }
  return (
    <FormControlWrapper>
      <Label htmlFor={label}>{label}</Label>
      <Input inputSize={size} id={label} value={value} onChange={onChange} />
    </FormControlWrapper>
  );
};
