import { InstrumentLayout } from "@/components/InstrumentLayout";
import { ContentSection } from "@/components/ContentSection";

const VernierCaliper = () => {
  return (
    <InstrumentLayout
      title="Vernier Caliper"
      subtitle="The precision measuring tool that revolutionized accurate length measurement"
      visualContent={
        <div className="text-muted-foreground text-center p-6">
          <p className="text-sm">📷 Add your image or 3D model here</p>
        </div>
      }
    >
      <ContentSection title="Definition & Inventor" icon="📖">
        <p>
          A Vernier Caliper is a precise measuring tool used to measure internal, external lengths, and depths 
          of objects. It gives super accurate measurements — way more than a regular scale.
        </p>
        <p className="mt-4">
          Was invented by <strong>Pierre Vernier</strong>, a French mathematician in the year <strong>1631</strong>. 
          He came up with the Vernier scale, and later, engineers combined it with calipers to create what we 
          now call the Vernier Caliper.
        </p>
      </ContentSection>

      <ContentSection title="How It Works" icon="🔧">
        <p>It has two parts:</p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li><strong>Main Scale</strong> – Like a regular ruler (measures in cm or mm)</li>
          <li><strong>Vernier Scale</strong> – Slides over the main scale and gives extra precision</li>
        </ul>
      </ContentSection>

      <ContentSection title="Working Process" icon="📏">
        <ul className="list-disc list-inside space-y-2">
          <li>Place the object between the jaws (external or internal)</li>
          <li>Read the main scale value just before the "0" of the Vernier</li>
          <li>Look at the Vernier scale to see which line perfectly aligns with the main scale</li>
          <li>Add them up = accurate measurement</li>
        </ul>
      </ContentSection>

      <ContentSection title="Applications" icon="🔬">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Engineering & Workshops</strong> – For measuring parts like nuts, bolts, and shafts</li>
          <li><strong>Science Labs</strong> – To measure sample containers, test tubes, etc.</li>
          <li><strong>Medical Field</strong> – For making precision tools and prosthetics</li>
        </ul>
      </ContentSection>
    </InstrumentLayout>
  );
};

export default VernierCaliper;
