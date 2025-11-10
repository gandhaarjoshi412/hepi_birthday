import { InstrumentLayout } from "@/components/InstrumentLayout";
import { ContentSection } from "@/components/ContentSection";

const PhalakaYantra = () => {
  return (
    <InstrumentLayout
      title="Phalaka Yantra"
      subtitle="The flat disc instrument that brought unprecedented precision to celestial measurements"
      visualContent={
        <div className="text-muted-foreground text-center p-6">
          <p className="text-sm">📷 Add your image or 3D model here</p>
        </div>
      }
    >
      <ContentSection title="Definition" icon="📖">
        <p>
          The Phalaka Yantra is a flat circular or square astronomical instrument used in ancient and medieval 
          India to measure the altitude of celestial objects like the sun or stars. The word "Phalaka" means 
          "flat surface" or "board" in Sanskrit.
        </p>
      </ContentSection>

      <ContentSection title="Invention & History" icon="🏛️">
        <p>
          Yantras were developed by ancient Indian scientists and astronomers. One of the most famous figures 
          who used and improved yantras was Raja Jai Singh II in the 18th century. However, yantras existed 
          earlier and were commonly used from the 8th to 18th century.
        </p>
      </ContentSection>

      <ContentSection title="How It Works" icon="⚙️">
        <ul className="list-disc list-inside space-y-2">
          <li>The yantra has a flat circular or rectangular plate with degree markings</li>
          <li>A rotating sighting arm (alidade) is used to aim at a celestial body</li>
          <li>The angle is measured based on the position of the arm</li>
          <li>This angle helps calculate the height (altitude) of the object above the horizon</li>
          <li>It works based on geometric principles and visual alignment</li>
        </ul>
      </ContentSection>

      <ContentSection title="Historical Use" icon="🌟">
        <ul className="list-disc list-inside space-y-2">
          <li>Measuring the altitude of the sun or stars</li>
          <li>Calculating local time and latitude</li>
          <li>Helped in astrological calculations and panchang (calendar) making</li>
        </ul>
      </ContentSection>
    </InstrumentLayout>
  );
};

export default PhalakaYantra;
