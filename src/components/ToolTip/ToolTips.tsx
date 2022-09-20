// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from "react";
import { Position, Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
interface Prop {
  children: React.ReactNode;
  text: string;
  position?: Position;
}
const ToolTips = ({ children, text, position = "bottom" }: Prop) => {
  return (
    <Tooltip title={`${text}`} arrow={true} position={`${position}`}>
      <span>{children}</span>
    </Tooltip>
  );
};

export default ToolTips;
