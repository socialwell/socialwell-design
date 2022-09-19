import styled, { css } from "styled-components";

interface Props {
  inputSize: string;
  isInvalid: boolean;
}

interface TextareaProps {
  isInvalid: boolean;
}

export const TextInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
`;

const getSize = (size: string) => {
  if (size === "sm") return "32px";
  if (size === "lg") return "48px";

  return "40px";
};

export const NumberInput = styled.input<Props>`
  width: 100%;
  height: ${(props) => getSize(props.inputSize)};
  outline: none;
  border: 1px solid #e2e8f0;
  padding: 8px 16px;
  border-radius: 6px;

  &:hover {
    border: 1px solid #cbd5e0;
  }

  &:focus {
    border: 2px solid #3182ce;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const InputWrapper = styled.div<Props>`
  width: 100%;
  height: ${(props) => (props.inputSize === "md" ? "40px" : "48px")};
  display: flex;
  align-items: center;
  padding: 0px 16px;
  gap: 16px;

  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 6px;

  color: #a0aec0;

  &:hover {
    border: 1px solid #cbd5e0;
  }

  &:has(${TextInput}:focus) {
    border: 2px solid #3182ce;
  }

  &:has(${TextInput}:disabled) {
    opacity: 0.5;
  }

  ${(props) =>
    props.isInvalid &&
    css`
      border: 2px solid #e53e3e;
    `}
`;

export const SelectInputField = styled.select<Props>`
  width: 100%;
  height: ${(props) => (props.inputSize === "md" ? "40px" : "48px")};
  outline: none;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 6px;

  &:hover {
    border: 1px solid #cbd5e0;
  }

  &:focus {
    border: 2px solid #3182ce;
  }

  &:disabled {
    opacity: 0.5;
  }

  ${(props) =>
    props.isInvalid &&
    css`
      border: 2px solid #e53e3e;
    `}
`;

export const TextAreaInputField = styled.textarea<TextareaProps>`
  width: 100%;

  padding: 8px 16px;
  outline: none;

  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 6px;

  &:hover {
    border: 1px solid #cbd5e0;
  }

  &:focus {
    border: 2px solid #3182ce;
  }

  &:disabled {
    opacity: 0.5;
  }

  ${(props) =>
    props.isInvalid &&
    css`
      border: 2px solid #e53e3e;
    `}
`;
