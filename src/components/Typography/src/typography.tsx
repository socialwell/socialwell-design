import React, { FC } from "react";

export interface TypographyProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  content: string;
  className?: string;
  size?: string;
  weight?: string;
  lineHeight?: string;
  color?: string;
}

export const Typography: FC<TypographyProps> = ({
  as = "h1",
  content,
  className = "",
  size = "",
  weight = "700",
  lineHeight = "normal",
  color = "black",
}) => {
  if (as === "h2")
    return (
      <h2
        style={{
          fontSize: `${size === "" ? "24px" : size}`,
          fontWeight: weight,
          lineHeight: lineHeight,
          color: color,
        }}
        className={className}
      >
        {content}
      </h2>
    );
  if (as === "h3")
    return (
      <h3
        style={{
          fontSize: `${size === "" ? "20px" : size}`,
          fontWeight: weight,
          lineHeight: lineHeight,
          color: color,
        }}
        className={className}
      >
        {content}
      </h3>
    );
  if (as === "h4")
    return (
      <h4
        style={{
          fontSize: `${size === "" ? "18px" : size}`,
          fontWeight: weight,
          lineHeight: lineHeight,
          color: color,
        }}
        className={className}
      >
        {content}
      </h4>
    );
  if (as === "h5")
    return (
      <h5
        style={{
          fontSize: `${size === "" ? "16px" : size}`,
          fontWeight: weight,
          lineHeight: lineHeight,
          color: color,
        }}
        className={className}
      >
        {content}
      </h5>
    );
  if (as === "h6")
    return (
      <h6
        style={{
          fontSize: `${size === "" ? "14px" : size}`,
          fontWeight: weight,
          lineHeight: lineHeight,
          color: color,
        }}
        className={className}
      >
        {content}
      </h6>
    );
  if (as === "p")
    return (
      <p
        style={{
          fontSize: `${size === "" ? "16px" : size}`,
          lineHeight: lineHeight,
          color: color,
        }}
        className={className}
      >
        {content}
      </p>
    );
  return (
    <h1
      style={{
        fontSize: `${size === "" ? "32px" : size}`,
        fontWeight: weight,
        lineHeight: lineHeight,
        color: color,
      }}
      className={className}
    >
      {content}
    </h1>
  );
};
