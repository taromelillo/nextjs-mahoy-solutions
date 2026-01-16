import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FeatureItem } from "./feature-item";

interface Props {
  name: string;
  description: string;
  price: string;
  cta: string;
  features: string[];
}

export const PricingCard = ({
  name,
  description,
  price,
  cta,
  features,
}: Props) => {
  return (
    <Card className="rounded-xl border py-8 px-4 relative border-border bg-card">
      <CardHeader>
        <CardTitle>
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="my-2">
          {price !== "Custom" && (
            <span className="text-sm text-muted-foreground">Starting at</span>
          )}
          <span className="text-4xl font-bold ml-4">
            {price !== "Custom" ? `$${price}` : price}
          </span>
        </div>
        <Button className="w-full" variant="outline">
          {cta}
        </Button>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, featureIndex) => (
            <FeatureItem key={featureIndex} feature={feature} isChecked />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
