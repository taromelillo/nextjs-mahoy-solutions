interface NavItem {
  href: string;
  label: string;
}

interface Props {
  navItems: NavItem[];
}

export const DesktopNavbar = ({ navItems }: Props) => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map(({ href, label }) => (
        <a
          key={label}
          href={href}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {label}
        </a>
      ))}
    </nav>
  );
};
