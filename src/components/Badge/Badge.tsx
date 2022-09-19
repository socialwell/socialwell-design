import React from "react";
import { BadgeWrapper } from "./styles/badgeStyles";

export interface BadgeProps {
  variant: "solid" | "outline" | "subtle";
  label?: string;
}

const Badge = ({ variant, label = "Default" }: BadgeProps) => {
  return <BadgeWrapper variant={variant}>{label}</BadgeWrapper>;
};

export default Badge;
