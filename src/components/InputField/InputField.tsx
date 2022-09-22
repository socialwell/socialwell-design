import React from "react";
import { BtnLeftIcon } from "../../assets";
import {
  InputWrapper,
  TextInput,
  SelectInputField,
  TextAreaInputField,
} from "./styles/inputFieldStyles";

export interface InputTextProps {
  size?: "md" | "lg";
  hasIcon?: boolean;
  isInvalid?: boolean;
  value: string;
  name: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SelectProps {
  children: React.ReactNode;
  size?: "md" | "lg";
  isInvalid?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface TextareaProps {
  isInvalid?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextField: React.FC<InputTextProps> = ({
  hasIcon = false,
  size = "md",
  isInvalid = false,
  value,
  onChange,
  name,
  type = "text",
  ...restProps
}) => {
  return (
    <InputWrapper inputSize={size} isInvalid={isInvalid}>
      {hasIcon && <BtnLeftIcon />}
      <TextInput
        {...restProps}
        value={value}
        name={name}
        type={type}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export const SelectField: React.FC<SelectProps> = ({
  children,
  size = "md",
  isInvalid = false,
  value,
  onChange,
  ...restProps
}) => {
  return (
    <SelectInputField
      {...restProps}
      value={value}
      onChange={onChange}
      inputSize={size}
      isInvalid={isInvalid}
    >
      {children}
    </SelectInputField>
  );
};

export const TextAreaField: React.FC<TextareaProps> = ({
  isInvalid = false,
  value,
  onChange,
  ...restProps
}) => {
  return (
    <TextAreaInputField
      {...restProps}
      value={value}
      onChange={onChange}
      isInvalid={isInvalid}
    ></TextAreaInputField>
  );
};
