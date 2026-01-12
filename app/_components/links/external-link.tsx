import { ReactNode } from "react";

interface Props {
  text?: string;
  url: string;
  ariaLabel: string;
  children: ReactNode;
}

export const ExternalLink = ({ text, url, ariaLabel, children }: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label={ariaLabel}
      className="text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
      {text && text}
    </a>
  );
};
