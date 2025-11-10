import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface InstrumentLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  visualContent?: ReactNode;
}

export const InstrumentLayout = ({ children, title, subtitle, visualContent }: InstrumentLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-night-sky via-deep-space to-primary py-20 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,100,0.1),transparent_50%)]" />
          <div className="container mx-auto relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-starlight mb-4 animate-fade-in">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-moon-glow max-w-3xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {subtitle}
            </p>
          </div>
        </div>

        {/* Visual Content Section (Images/3D Models) */}
        {visualContent && (
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="flex justify-center items-center min-h-[200px] bg-gradient-to-br from-background to-muted/30 rounded-lg border border-border/50 animate-fade-in">
              {visualContent}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};
