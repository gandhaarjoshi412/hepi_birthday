import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Chakra Yantra", path: "/chakra-yantra" },
  { name: "Yasti Yantra", path: "/yasti-yantra" },
  { name: "Phalaka Yantra", path: "/phalaka-yantra" },
  { name: "Dhanur Yantra", path: "/dhanur-yantra" },
  { name: "Vernier Caliper", path: "/vernier-caliper" },
  { name: "Micrometer", path: "/micrometer" },
];

export const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-semibold text-night-sky hover:text-gold-accent transition-colors duration-300"
          >
            Ancient Astronomy
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300",
                  "hover:bg-secondary hover:text-gold-accent",
                  "relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold-accent",
                  "after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100",
                  location.pathname === item.path
                    ? "text-gold-accent"
                    : "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-foreground hover:text-gold-accent transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden pb-4">
          <div className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300",
                  "hover:bg-secondary hover:text-gold-accent",
                  location.pathname === item.path
                    ? "text-gold-accent bg-secondary"
                    : "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
