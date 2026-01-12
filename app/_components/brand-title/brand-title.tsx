import { Logo } from "./logo";

interface Props {
  title: string;
  size?: "small" | "normal";
}

const smallSize = {
  style: "flex items-center h-6 w-6 rounded justify-center bg-primary",
  iconStyle: "h-4 w-4 text-primary-foreground",
  textStyle: "font-semibold",
};
const normalSize = {
  style: "flex items-center h-8 w-8 rounded-lg justify-center bg-primary",
  iconStyle: "h-5 w-5 text-primary-foreground",
  textStyle: "text-xl font-semibold",
};

export const BrandTitle = ({ title, size = "small" }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <div className={size === "small" ? smallSize.style : normalSize.style}>
        <Logo
          style={size === "small" ? smallSize.iconStyle : normalSize.iconStyle}
        />
      </div>
      <span
        className={
          size === "small" ? smallSize.textStyle : normalSize.textStyle
        }
      >
        {title}
      </span>
    </div>
  );
};
