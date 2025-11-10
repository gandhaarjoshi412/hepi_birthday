import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface ContentSectionProps {
  title: string;
  children: ReactNode;
  icon?: string;
}

export const ContentSection = ({ title, children, icon }: ContentSectionProps) => {
  return (
    <Card className="p-6 md:p-8 mb-8 animate-slide-up bg-card border-border/50">
      <div className="flex items-start gap-4 mb-4">
        {icon && <span className="text-3xl">{icon}</span>}
        <h2 className="text-2xl md:text-3xl font-semibold text-night-sky">{title}</h2>
      </div>
      <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed">
        {children}
      </div>
    </Card>
  );
};
