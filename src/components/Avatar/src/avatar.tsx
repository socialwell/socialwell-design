import React from "react";
import { Image } from "./styles/avatarStyles";

export interface AvatarProps {
  src?: string;
  alt: string;
  size: "lg" | "xl" | "2xl";
  useName?: string;
}
const getSize = (size: string): number => {
  if (size === "xl") return 96;
  if (size === "2xl") return 128;

  return 64;
};
export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "lg",
  useName,
}) => {
  return (
    <Image
      src={
        src ||
        `https://ui-avatars.com/api/?name=${useName}&size=${getSize(
          size,
        )}&background=285E61&color=fff`
      }
      alt={alt}
      size={size}
    />
  );
};
