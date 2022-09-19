import React from "react";
import {
  CloseIcon,
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from "../../assets";
import { ToastWrapper, Text, Title } from "./styles/toastStyles";
export interface Props {
  state: "error" | "success" | "warning" | "info";
  title: string;
  description?: string;
}
const Toast = ({ state, title, description }: Props) => {
  return (
    <ToastWrapper state={state}>
      <div className="content">
        <div className="icon">
          {state === "error" && (
            <span>
              <ErrorIcon />
            </span>
          )}
          {state === "success" && (
            <span>
              <SuccessIcon />
            </span>
          )}
          {state === "warning" && (
            <span>
              <WarningIcon />
            </span>
          )}
          {state === "info" && (
            <span>
              <InfoIcon />
            </span>
          )}
        </div>
        <div className="content-details">
          <Title>{title}</Title>
          {description && <Text>{description}</Text>}
        </div>
      </div>
      <button>
        <CloseIcon />
      </button>
    </ToastWrapper>
  );
};

export default Toast;
