import React from "react";
import { Image } from "./styles/avatarStyles";

interface Props {
  src: string;
  alt: string;
  size: "lg" | "xl" | "2xl";
}
const Avatar: React.FC<Props> = ({ src, alt, size }) => {
  return <Image src={src} alt={alt} size={size} />;
};

export default Avatar;
