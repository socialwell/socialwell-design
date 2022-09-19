import styled from "styled-components";

export const FormControlWrapper = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #2d3748;
`;

export const Input = styled.input<{ inputSize: string }>`
  width: 100%;
  height: ${(props) => (props.inputSize === "sm" ? "32px" : "40px")};
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 0px 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const Select = styled.select<{ inputSize: string }>`
  width: 100%;
  height: ${(props) => (props.inputSize === "sm" ? "32px" : "40px")};
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 0px 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 0px 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
