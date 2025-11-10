export const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-card mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            <p>© 2024 Ancient Indian Astronomical Instruments</p>
            <p className="mt-1">A Physics Project by Students</p>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-gold-accent transition-colors duration-300">
              About
            </a>
            <a href="#" className="hover:text-gold-accent transition-colors duration-300">
              Research
            </a>
            <a href="#" className="hover:text-gold-accent transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
