import { InstrumentLayout } from "@/components/InstrumentLayout";
import { ContentSection } from "@/components/ContentSection";

const Micrometer = () => {
  return (
    <InstrumentLayout
      title="Micrometer Screw Gauge"
      subtitle="The ultimate precision instrument for measuring microscopic dimensions with extraordinary accuracy"
      visualContent={
        <div className="text-muted-foreground text-center p-6">
          <p className="text-sm">📷 Add your image or 3D model here</p>
        </div>
      }
    >
      <ContentSection title="Definition & Inventor" icon="📖">
        <p>
          A device used to measure very small measurements like thickness, diameter, or length of materials 
          (e.g., rod, wire) up to a degree of accuracy of 0.01 mm.
        </p>
        <p className="mt-4">
          Invented by <strong>William Gascoigne</strong> (~1638) for astronomical use; hand-held version 
          improved by <strong>Jean Laurent Palmer</strong> in 1848.
        </p>
      </ContentSection>

      <ContentSection title="How It Works" icon="⚙️">
        <p>It has 4 parts:</p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li><strong>Frame</strong> – Holds everything together</li>
          <li><strong>Anvil & Spindle</strong> – Object is placed between these</li>
          <li><strong>Thimble</strong> – You rotate this to move the spindle</li>
          <li><strong>Sleeve & Scale</strong> – Where you read the measurement</li>
        </ul>
      </ContentSection>

      <ContentSection title="Steps to Use" icon="📏">
        <ol className="list-decimal list-inside space-y-2">
          <li>Place the object between the spindle and anvil</li>
          <li>Turn the thimble slowly until it gently touches the object</li>
          <li>Read the main scale on the sleeve</li>
          <li>Add the rotating scale (on thimble) reading for precise measurement</li>
        </ol>
        <p className="mt-4">
          <strong>HOW TO READ:</strong> Total reading = Main scale + Reading on the thimble scale
        </p>
      </ContentSection>

      <ContentSection title="Applications 🧰" icon="🔬">
        <ul className="list-disc list-inside space-y-2">
          <li>🧵 <strong>Wire Industry</strong> – To measure thin wires accurately</li>
          <li><strong>Mechanical Engineering</strong> – To check precision of machine parts</li>
          <li>🔬 <strong>Research Labs</strong> – For micro-level measurements (bio samples, tools, etc.)</li>
        </ul>
      </ContentSection>
    </InstrumentLayout>
  );
};

export default Micrometer;
