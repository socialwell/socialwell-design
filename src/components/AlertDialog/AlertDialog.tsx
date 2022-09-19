import React from "react";
import { CloseIcon } from "../../assets";
import { Dialogwrapper } from "./styles/alertDialogStyles";

interface Props {
  title: string;
  text: string;
  onClick: () => void;
  position?: "topLeft" | "bottomLeft" | "topRight" | "bottomRight";
}

const AlertDialog: React.FC<Props> = ({
  title,
  text,
  position = "bottomLeft",
  onClick,
}) => {
  return (
    <Dialogwrapper position={position}>
      <div className="header">
        <div className="title">{title}</div>
        <span className="icon">
          <CloseIcon />
        </span>
      </div>
      <p>{text}</p>
      <div className="btn">
        <button>close</button>
        <button className="delete" onClick={onClick}>
          delete
        </button>
      </div>
    </Dialogwrapper>
  );
};

export default AlertDialog;
