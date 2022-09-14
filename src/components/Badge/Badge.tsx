import React from "react";
import "./styles/badge.css";

interface BadgeProps {
  /**
   * Select from the 3 variant available.
   */
  variant: "solid" | "outline" | "subtle";
  /**
   * Badge contents
   */
  label?: string;
}

const Badge = ({ variant, label = "Default" }: BadgeProps) => {
  return <span className={`badge badge--${variant}`}>{label}</span>;
};

export default Badge;
