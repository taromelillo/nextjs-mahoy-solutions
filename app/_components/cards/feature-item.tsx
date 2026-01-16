import { Check, X } from "lucide-react";

interface Props {
  feature: string;
  isChecked: boolean;
}

export const FeatureItem = ({ feature, isChecked }: Props) => {
  return (
    <li className="flex items-start gap-3">
      {isChecked ? (
        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
      ) : (
        <X className="h-5 w-5 text-primary shrink-0 mt-0.5" />
      )}
      <span className="text-sm text-muted-foreground">{feature}</span>
    </li>
  );
};
