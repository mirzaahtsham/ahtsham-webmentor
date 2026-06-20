import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const DialogflowIcon = ({ size = 20, ...props }: IconProps) => (
  <svg
    viewBox="0 0 256 326"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fill="#EF6C00"
      d="m255.896 70.871l-127.912 73.872L0 70.871v147.743l63.992 36.909v73.889l191.904-110.798z"
    />
    <path
      fill="#FF9800"
      d="M127.984 144.743L0 70.871L127.984-3l127.912 73.871z"
    />
  </svg>
);