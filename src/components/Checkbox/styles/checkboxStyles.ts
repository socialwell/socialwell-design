import styled from "styled-components";

export const CheckboxField = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CheckboxContainer = styled.label`
  position: relative;
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

  .checkmark:after {
    left: 5px;
    top: 2px;
    width: 6px;
    height: 10px;
    border: solid white;
    border-radius: 2px;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .checkmark:hover {
    background-color: #2b6cb0;
  }

  .checkmark:hover:after {
    display: block;
    border: solid white;
    border-width: 0 3px 3px 0;
  }

  ${CheckboxField}:checked ~ .checkmark {
    background-color: #3182ce;
  }

  ${CheckboxField}:checked ~ .checkmark:after {
    display: block;
    border: solid white;
    border-width: 0 3px 3px 0;
  }

  ${CheckboxField}:disabled ~ .checkmark {
    background-color: #e2e8f0;
  }

  ${CheckboxField}:checked:disabled ~ .checkmark:after {
    display: block;
    border: solid #718096;
    border-width: 0 3px 3px 0;
  }
`;
