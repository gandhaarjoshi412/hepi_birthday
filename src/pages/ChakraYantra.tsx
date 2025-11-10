import { InstrumentLayout } from "@/components/InstrumentLayout";
import { ContentSection } from "@/components/ContentSection";

const ChakraYantra = () => {
  return (
    <InstrumentLayout
      title="Chakra Yantra"
      subtitle="The wheel-shaped instrument that revolutionized celestial tracking in ancient India"
      visualContent={
        <div className="text-muted-foreground text-center p-6">
          <p className="text-sm">📷 Add your image or 3D model here</p>
        </div>
      }
    >
      <ContentSection title="Definition" icon="📖">
        <p>
          "Chakra" means "wheel" or "circle" in Sanskrit. The Chakra Yantra is a circular instrument designed 
          to precisely determine the coordinates of celestial bodies at Jantar Mantar.
        </p>
        <p className="mt-4">
          In Hindu spirituality, particularly in the Shri Vidya tradition, the Sri Chakra Yantra is a sacred 
          geometric diagram used as a tool for meditation and worship. It is believed to represent the universe 
          and the divine, and its purpose is to help practitioners in their spiritual journey.
        </p>
      </ContentSection>

      <ContentSection title="How It Works" icon="⚙️">
        <p>
          It has rotating discs or rings marked with degrees. By aligning it with the sun or stars, users could 
          calculate time, altitude, and direction — like a medieval space GPS.
        </p>
      </ContentSection>

      <ContentSection title="Historical Use" icon="🌟">
        <p>
          Ancient Indian astronomers used it to track celestial bodies, predict eclipses, and build calendars. 
          It's proof that medieval scientists were way ahead of their time.
        </p>
      </ContentSection>
    </InstrumentLayout>
  );
};

export default ChakraYantra;
