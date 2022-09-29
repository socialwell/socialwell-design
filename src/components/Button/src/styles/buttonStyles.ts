import styled from "styled-components";

interface Props {
  size: string;
}

export const MainButton = styled.button<Props>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: fit-content;
  height: 40px;
  padding: 10px ${(props) => (props.size === "md" ? "16px" : "24px")};
  /* teal/500 */

  border-radius: 6px;
  background: none;
  border: none;
`;

export const SolidButton = styled(MainButton)`
  background: #319795;
  color: #ffffff;
  font-weight: 600;

  &:hover {
    background: #2c7a7b;
  }

  &:active {
    background: #285e61;
  }

  &:disabled {
    background: #319795;
    opacity: 0.5;
  }
`;

export const OutlineButton = styled(MainButton)`
  border: 1px solid #e2e8f0;
  color: #2d3748;
  font-weight: 600;

  &:hover {
    background: #edf2f7;
  }

  &:active {
    background: #e2e8f0;
  }

  &:disabled {
    background: #ffffff;
    opacity: 0.5;
  }
`;
