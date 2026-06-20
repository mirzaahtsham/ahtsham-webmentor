import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const GlobalIcon = ({ size = 20, ...props }: IconProps) => (
  <svg
    viewBox="0 0 16 16"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path fill="currentColor" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
  </svg>
);