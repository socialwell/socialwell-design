import styled from "styled-components";

export const CheckboxContainer = styled.label`
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background: #ffffff;
    border: 2px solid #e2e8f0;
    border-radius: 2px;
  }

  &:hover input:not(:disabled) ~ .checkmark {
    background-color: #2b6cb0;
  }

  & input:disabled ~ .checkmark {
    background-color: #e2e8f0;
  }

  & input:disabled ~ .checkmark:hover::after {
    display: none;
  }

  & input:checked:disabled ~ .checkmark {
    background-color: #e2e8f0;
    border: 2px solid #e2e8f0;
  }

  & input:checked:disabled ~ .checkmark:after {
    display: block;
    border: solid #718096;
    border-width: 0 3px 3px 0;
  }

  & input:checked ~ .checkmark {
    background-color: #3182ce;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when hovered */
  & input:hover ~ .checkmark:after {
    display: block;
  }

  /* Show the checkmark when checked */
  & input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  & .checkmark:after {
    left: 5px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const CheckboxField = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;
