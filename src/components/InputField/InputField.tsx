import React from "react";
import { BtnLeftIcon } from "../../assets";
import {
  InputWrapper,
  TextInput,
  NumberInput,
  SelectInputField,
  TextAreaInputField,
} from "./styles/inputFieldStyles";

export interface InputTextProps {
  size?: "md" | "lg";
  hasIcon?: boolean;
  isInvalid?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputNumberProps {
  size?: "sm" | "md" | "lg";
  isInvalid?: boolean;
  value: number;
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
  ...restProps
}) => {
  return (
    <InputWrapper inputSize={size} isInvalid={isInvalid}>
      {hasIcon && <BtnLeftIcon />}
      <TextInput {...restProps} value={value} onChange={onChange} />
    </InputWrapper>
  );
};

export const NumberField: React.FC<InputNumberProps> = ({
  size = "md",
  isInvalid = false,
  value,
  onChange,
  ...restProps
}) => {
  return (
    <NumberInput
      type="number"
      {...restProps}
      value={value}
      onChange={onChange}
      inputSize={size}
      isInvalid={isInvalid}
    />
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
