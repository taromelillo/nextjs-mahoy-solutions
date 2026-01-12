interface Props {
  text: string;
  url: string;
}

export const SectionLink = ({ text, url }: Props) => {
  return (
    <a
      href={`#${url}`}
      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
      aria-label={text}
    >
      {text}
    </a>
  );
};
