"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

const FALLBACK_IMAGE = "/images/fallback.jpg";

export default function SafeImage(props: ImageProps) {
  const { src, alt, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt ?? ""}
      onError={() => setImgSrc(FALLBACK_IMAGE)}
    />
  );
}
