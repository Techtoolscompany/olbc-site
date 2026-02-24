import Hero from "@/components/home/Hero";
import GroupPhoto from "@/components/home/GroupPhoto";
import Values from "@/components/home/Values";
import FocusAreas from "@/components/home/FocusAreas";
import Journal from "@/components/home/Journal";

export default function Home() {
  return (
    <div className="bg-cream">
      <Hero />
      <GroupPhoto />
      <Values />
      <FocusAreas />
      <Journal />
    </div>
  );
}
