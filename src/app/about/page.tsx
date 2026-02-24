import AboutHero from "@/components/about/Hero";
import AboutHistory from "@/components/about/History";
import MembersGrid from "@/components/about/MembersGrid";

export default function AboutPage() {
    return (
        <div className="bg-cream">
            <AboutHero />
            <AboutHistory />
            <MembersGrid />
        </div>
    );
}
