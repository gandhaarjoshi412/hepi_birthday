import { InstrumentLayout } from "@/components/InstrumentLayout";
import { ContentSection } from "@/components/ContentSection";

const DhanurYantra = () => {
  return (
    <InstrumentLayout
      title="Dhanur Yantra"
      subtitle="The bow-shaped instrument that revolutionized angular measurement in the 5th century"
      visualContent={
        <div className="text-muted-foreground text-center p-6">
          <p className="text-sm">📷 Add your image or 3D model here</p>
        </div>
      }
    >
      <ContentSection title="Definition" icon="📖">
        <p>
          The Dhanur Yantra was a medieval Indian astronomical and surveying instrument, named after the 
          Sanskrit word for "bow" due to its shape.
        </p>
      </ContentSection>

      <ContentSection title="Invention" icon="🏛️">
        <p>
          Invented by the astronomer Āryabhaṭa in the 5th century CE and used extensively throughout medieval 
          India, its primary function was to measure the vertical angle of both celestial and terrestrial objects.
        </p>
      </ContentSection>

      <ContentSection title="How It Works" icon="🏹">
        <p>
          The Dhanur Yantra was a simple device for measuring angles. A semi-circular disk with degree markings 
          and a movable pointer was used to sight celestial objects or distant landmarks. By reading the scale, 
          one could determine the angle of elevation or declination.
        </p>
      </ContentSection>

      <ContentSection title="Historical Use" icon="🌟">
        <ul className="list-disc list-inside space-y-2">
          <li>📐 Measured the altitude of celestial bodies like the Sun & stars accurately</li>
          <li>⏰ Helped in determining local time based on solar position</li>
          <li>🔭 Used in ancient Indian astronomy for sky observations & predictions</li>
          <li>🧠 Served as a teaching tool for students learning Vedic sciences</li>
          <li>🧭 Assisted in direction finding and early navigation techniques</li>
        </ul>
      </ContentSection>
    </InstrumentLayout>
  );
};

export default DhanurYantra;
