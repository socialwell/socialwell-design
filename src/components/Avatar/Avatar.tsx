import React from "react";
import { Image } from "./styles/avatarStyles";

export interface AvatarProps {
  src: string;
  alt: string;
  size: "lg" | "xl" | "2xl";
}
export const Avatar: React.FC<AvatarProps> = ({ src, alt, size }) => {
  return <Image src={src} alt={alt} size={size} />;
};
