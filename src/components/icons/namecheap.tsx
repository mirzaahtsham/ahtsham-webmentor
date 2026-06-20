import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const NamecheapIcon = ({ size = 20, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 256 142"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient id="nc-g1" x1="13%" y1="95%" x2="83%" y2="1%">
        <stop offset="0%" stopColor="#D4202C" />
        <stop offset="50%" stopColor="#F28920" />
        <stop offset="100%" stopColor="#FAA71D" stopOpacity="0" />
      </linearGradient>

      <linearGradient id="nc-g2" x1="87%" y1="5%" x2="17%" y2="99%">
        <stop offset="0%" stopColor="#D4202C" />
        <stop offset="50%" stopColor="#F28920" />
        <stop offset="100%" stopColor="#FAA71D" stopOpacity="0" />
      </linearGradient>
    </defs>

    <path
      d="M232 0c-9 0-16.8 5-20.9 12.3l-.5 1l-18.8 37L168 97.2l15.6 30.7l.9 1.7c2.4 4.2 6 7.7 10.4 9.8c4.4-2.2 8-5.6 10.4-9.8l.9-1.7l46.7-92l1.1-2.2c1.3-3 2-6.2 2-9.7c0-13.3-10.7-24-24-24M87.9 44.6L72.4 14l-.9-1.7c-2.4-4.2-6-7.7-10.4-9.8c-4.4 2.2-8 5.6-10.4 9.8l-.8 1.7l-46.7 92l-1.1 2.2c-1.3 3-2 6.2-2 9.7c0 13.2 10.7 24 24 24c9 0 16.8-5 20.9-12.3l.5-1l18.8-37L88 44.7z"
      fill="#FF5000"
    />

    <path
      d="M232 0c-9 0-16.9 5-20.9 12.3l-.5 1l-18.8 37L168 97.2l15.6 30.7l.9 1.7c2.4 4.2 6 7.7 10.4 9.8c4.4-2.2 8-5.6 10.4-9.8l.9-1.7l46.7-92l1.1-2.2c1.3-3 2-6.2 2-9.7c0-13.3-10.8-24-24-24"
      fill="url(#nc-g1)"
    />

    <path
      d="M24 141.9c9 0 16.9-5 20.9-12.3l.5-1l18.8-37L88 44.7L72.4 14l-.9-1.7c-2.4-4.2-6-7.7-10.4-9.8c-4.4 2.2-8 5.6-10.4 9.8l-.8 1.7l-46.7 92l-1.2 2.3c-1.3 3-2 6.2-2 9.7c0 13.2 10.7 23.9 24 23.9"
      fill="url(#nc-g2)"
    />

    <path
      d="M87.9 44.6L72.4 14l-.9-1.7c-2.4-4.2-6-7.7-10.4-9.8c1.4-.7 3-1.3 4.5-1.7c1.9-.5 4-.8 6-.8h32.8c9 .1 16.8 5 20.9 12.3l.7 1.7l42.1 83.3l15.5 30.6l.9 1.7c2.4 4.2 6 7.7 10.4 9.8c-1.4.7-3 1.3-4.5 1.7c-1.9.5-4 .8-6.1.8h-32.6c-9-.1-16.8-5-20.9-12.3l-.9-1.7z"
      fill="#FF8C44"
    />
  </svg>
);