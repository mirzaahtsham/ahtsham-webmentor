import Image from "next/image";

type TawkToIconProps = {
  size?: number;
  className?: string;
  alt?: string;
};

export const TawkToIcon = ({
  size = 20,
  className,
  alt = "Tawk.to",
}: TawkToIconProps) => {
  return (
    <Image
      src="/Icons/tawkto.svg"
      alt={alt}
      width={size}
      height={size}
      className={className}
      unoptimized
    />
  );
};