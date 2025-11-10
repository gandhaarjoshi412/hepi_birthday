import { InstrumentLayout } from "@/components/InstrumentLayout";
import { ContentSection } from "@/components/ContentSection";

const YastiYantra = () => {
  return (
    <InstrumentLayout
      title="Yasti Yantra"
      subtitle="The foundational angular measuring instrument that bridged observation and mathematics"
      visualContent={
        <div className="text-muted-foreground text-center p-6">
          <p className="text-sm">📷 Add your image or 3D model here</p>
        </div>
      }
    >
      <ContentSection title="Definition" icon="📖">
        <p>
          The Yasti Yantra was an ancient Indian angular measuring instrument consisting of a graduated rod used 
          to determine altitudes, shadow lengths, and angular distances. It worked like a basic sighting device 
          for sky measurements.
        </p>
        <p className="mt-4">
          Yasti Yantra was used in the 12th century during the time of Bhaskar-II, and was later revived and 
          refined by Maharaja Jai Singh II during the 18th century (around 1724 CE), when he built the Jantar Mantars.
        </p>
      </ContentSection>

      <ContentSection title="Evolution & Mathematical Foundation" icon="🔢">
        <p>
          The Yasti Yantra was one of the earliest tools that laid the foundation for trigonometry by linking 
          physical measurements to mathematical angles. By measuring shadows and angles, it laid the groundwork 
          for trigonometric principles like sine, cosine, and tangent, which are now fundamental to fields ranging 
          from engineering to space science.
        </p>
        <p className="mt-4">
          It was the "first protractor" of the ancient world, turning sky observations into timeless math.
        </p>
      </ContentSection>

      <ContentSection title="How The Instrument Works" icon="📐">
        <ul className="list-disc list-inside space-y-2">
          <li>Vertical stick mounted on flat base</li>
          <li>Used under sunlight to cast shadow</li>
          <li>Shadow's length & angle were measured</li>
          <li>Helped calculate sun's altitude</li>
          <li>Used to find local time & direction</li>
          <li>Simple design, high accuracy</li>
        </ul>
      </ContentSection>

      <ContentSection title="Historical Use" icon="🌟">
        <p>
          Was used in measuring angular heights of celestial bodies (like sun, moon, and stars), shadow lengths 
          for timekeeping and calendar calculations.
        </p>
      </ContentSection>
    </InstrumentLayout>
  );
};

export default YastiYantra;
