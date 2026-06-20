import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const AtlassianIcon = ({ size = 20, ...props }: IconProps) => (
  <svg
    viewBox="0 0 256 256"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient id="atlassianGradient" x1="100%" y1="16%" x2="40%" y2="97%">
        <stop offset="0%" stopColor="#0052CC" />
        <stop offset="92%" stopColor="#2684FF" />
      </linearGradient>
    </defs>
    <path
      fill="url(#atlassianGradient)"
      d="M75.793 117.95c-3.82-4.08-9.77-3.85-12.367 1.342L.791 244.565a7.488 7.488 0 0 0 6.697 10.838h87.228a7.22 7.22 0 0 0 6.699-4.14c18.808-38.89 7.413-98.018-25.622-133.314"
    />
    <path
      fill="#2681FF"
      d="M121.756 4.011c-35.033 55.505-32.721 116.979-9.646 163.13l42.06 84.121a7.49 7.49 0 0 0 6.697 4.14h87.227a7.488 7.488 0 0 0 6.697-10.838S137.445 9.837 134.493 3.964c-2.64-5.258-9.344-5.33-12.737.047"
    />
  </svg>
);