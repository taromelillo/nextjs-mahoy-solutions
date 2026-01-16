import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

interface Props {
  quote: string;
  avatar: string;
  author: string;
  role: string;
}

export const TestimonialCard = ({ quote, avatar, author, role }: Props) => {
  return (
    <Card className="rounded-xl border border-border bg-card p-8">
      <CardHeader>
        <div className="mb-6">
          <svg
            className="h-8 w-8 text-muted-foreground/50"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </CardHeader>
      <CardContent className="text-foreground mb-6 leading-relaxed">
        <p>{quote}</p>
      </CardContent>
      <CardFooter className="flex items-center gap-4">
        <Image
          width={20}
          height={20}
          src={avatar || "/placeholder.svg"}
          alt={`${author} profile picture`}
          className="h-12 w-12 rounded-full"
        />
        <div>
          <div className="font-semibold">
            <p>{author}</p>
          </div>
          <div className="text-xs text-muted-foreground">
            <p>{role}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
