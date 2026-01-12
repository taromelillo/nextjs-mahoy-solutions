import { SVGProps } from "react";

interface Props {
  style: string;
  props?: SVGProps<SVGSVGElement>;
}

export const Logo = ({ props, style }: Props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={style}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor" />
    </svg>
  );
};
