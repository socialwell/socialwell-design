import React from "react";
import { TagWrapper } from "./styles/tagStyles";

const Tag = ({ label }: { label: string }) => {
  return <TagWrapper>{label}</TagWrapper>;
};

export default Tag;
