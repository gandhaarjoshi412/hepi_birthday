import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InstrumentCard } from "@/components/InstrumentCard";

const instruments = [
  {
    title: "Chakra Yantra",
    description: "An ancient wheel-shaped instrument used for tracking celestial bodies and measuring angular positions in the sky.",
    path: "/chakra-yantra",
    icon: "⚙️"
  },
  {
    title: "Yasti Yantra",
    description: "A basic angular measuring instrument that laid the foundation for trigonometric principles in astronomy.",
    path: "/yasti-yantra",
    icon: "📏"
  },
  {
    title: "Phalaka Yantra",
    description: "A flat circular instrument developed by Raja Jai Singh II for measuring celestial altitudes with precision.",
    path: "/phalaka-yantra",
    icon: "🎯"
  },
  {
    title: "Dhanur Yantra",
    description: "A bow-shaped instrument invented by Aryabhatta for measuring celestial altitudes and determining local time.",
    path: "/dhanur-yantra",
    icon: "🏹"
  },
  {
    title: "Vernier Caliper",
    description: "A precision measuring tool invented by Pierre Vernier for accurate measurement of lengths and depths.",
    path: "/vernier-caliper",
    icon: "🔧"
  },
  {
    title: "Micrometer Screw Gauge",
    description: "An advanced precision instrument using screw mechanism for measuring extremely small dimensions.",
    path: "/micrometer",
    icon: "🔬"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-night-sky via-deep-space to-primary py-20 md:py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,100,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
          
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-starlight mb-6 animate-fade-in">
              Ancient Indian Astronomical Instruments
            </h1>
            <p className="text-xl md:text-2xl text-moon-glow max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Discover the precision and ingenuity of ancient Indian measuring tools that revolutionized astronomy and science
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-background/10 backdrop-blur-sm border border-starlight/20 rounded-lg px-6 py-3">
                <span className="text-gold-accent font-semibold">6 Instruments</span>
              </div>
              <div className="bg-background/10 backdrop-blur-sm border border-starlight/20 rounded-lg px-6 py-3">
                <span className="text-gold-accent font-semibold">5th Century CE</span>
              </div>
              <div className="bg-background/10 backdrop-blur-sm border border-starlight/20 rounded-lg px-6 py-3">
                <span className="text-gold-accent font-semibold">Precision Measurement</span>
              </div>
            </div>
          </div>
        </section>

        {/* Instruments Grid */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-night-sky mb-4">
              Explore the Instruments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Click on any instrument to learn about its history, working principles, and applications in ancient Indian astronomy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {instruments.map((instrument, index) => (
              <div 
                key={instrument.path} 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <InstrumentCard {...instrument} />
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="bg-secondary/30 py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-night-sky mb-6">
                A Legacy of Scientific Excellence
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Ancient Indian astronomers and mathematicians made groundbreaking contributions to the field of measurement and observation. 
                These instruments represent centuries of accumulated knowledge, combining mathematical precision with practical engineering.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                From the ingenious designs of Aryabhatta to the monumental observatories of Raja Jai Singh II, 
                these tools enabled accurate measurements of celestial phenomena and laid the groundwork for modern scientific instruments.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
