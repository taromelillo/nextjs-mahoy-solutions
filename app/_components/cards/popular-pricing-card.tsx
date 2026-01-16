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

export const PopularPricingCard = ({
  name,
  description,
  price,
  cta,
  features,
}: Props) => {
  return (
    <Card className="rounded-xl border p-8 relative border-primary bg-card shadow-lg scale-105">
      <div className="absolute -top-4 left-0 right-0 mx-auto w-fit">
        <span className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
          Most Popular
        </span>
      </div>
      <CardHeader>
        <CardTitle>
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          {description}
        </CardDescription>
        <div className="my-2">
          <span className="text-sm text-muted-foreground">Starting at</span>
          <span className="text-4xl font-bold ml-4">
            {price !== "Custom" ? `$${price}` : price}
          </span>
        </div>
        <Button className="w-full" variant="default">
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
