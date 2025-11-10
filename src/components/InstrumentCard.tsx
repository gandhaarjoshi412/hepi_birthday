import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface InstrumentCardProps {
  title: string;
  description: string;
  path: string;
  icon: string;
}

export const InstrumentCard = ({ title, description, path, icon }: InstrumentCardProps) => {
  return (
    <Link to={path} className="block">
      <Card className={cn(
        "p-6 hover-lift cursor-pointer h-full",
        "bg-card border-border/50 hover:border-gold-accent/50",
        "transition-all duration-300"
      )}>
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-night-sky mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <div className="mt-4 flex items-center text-gold-accent font-medium">
          Learn More
          <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </Card>
    </Link>
  );
};
