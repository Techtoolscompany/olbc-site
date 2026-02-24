import PolicyHero from "@/components/policy/Hero";
import PolicySection from "@/components/policy/Section";

const sections = [
    {
        number: "01",
        title: <><span className="block">Economic</span><span className="block font-light italic text-brown-light">Justice</span></>,
        bgClassLeft: "bg-cream",
        bgClassRight: "bg-white",
        textClassLeft: "text-brown-dark",
        textClassRight: "text-brown-dark",
        imageSrc: "/images/priorities/economic_empowerment_black_1771881116371.png",
        articles: [
            {
                icon: "storefront",
                category: "Small Business Support",
                title: "Revitalizing Main Street Through Equitable Funding",
                description: "Minority-owned businesses face disproportionate challenges in securing capital. The Urban Development Grant (HB 2201) establishes a dedicated $15M fund specifically for zip codes historically underserved by traditional banking institutions.",
                extra: (
                    <div className="bg-cream p-8 shadow-card border border-brown/5">
                        <div className="flex justify-between items-end mb-4">
                            <span className="font-serif text-2xl text-brown-dark">Progress</span>
                            <span className="font-mono text-sm text-brown">Committee Review</span>
                        </div>
                        <div className="w-full bg-brown/10 h-1">
                            <div className="bg-brown h-1 w-1/3"></div>
                        </div>
                    </div>
                )
            },
            {
                icon: "home_work",
                category: "Housing Stability",
                title: "Tenant Protection & Ownership Pathways",
                description: "Home ownership remains the primary vehicle for generational wealth. We are proposing legislation that caps rental application fees and creates tax incentives for developers building affordable single-family starter homes.",
                extra: (
                    <ul className="space-y-4 mt-2">
                        <li className="flex items-baseline gap-4 text-brown/80">
                            <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></span>
                            <span>Cap on security deposits to 1x monthly rent</span>
                        </li>
                        <li className="flex items-baseline gap-4 text-brown/80">
                            <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></span>
                            <span>"Right to Cure" eviction prevention measures</span>
                        </li>
                    </ul>
                )
            }
        ]
    },
    {
        number: "02",
        title: <><span className="block">Education &</span><span className="block font-light italic text-brown-light">Opportunity</span></>,
        bgClassLeft: "bg-cream-dark",
        bgClassRight: "bg-cream",
        textClassLeft: "text-brown-dark",
        textClassRight: "text-brown-dark",
        imageSrc: "/images/priorities/educational_excellence_black_1771881149686.png",
        articles: [
            {
                icon: "school",
                category: "K-12 Investment",
                title: "Modernizing Classrooms for the Digital Age",
                description: "Every child deserves a world-class education regardless of their zip code. Our priority is increasing per-pupil funding to the regional average and ensuring high-speed broadband access in every rural and urban school district."
            },
            {
                icon: "engineering",
                category: "Workforce Development",
                title: "The Green Energy Jobs Initiative",
                description: "Preparing our workforce for the future. We are championing partnerships between technical colleges and renewable energy companies to create 5,000 new apprenticeships over the next three years.",
                extra: (
                    <div className="grid grid-cols-2 gap-6 mt-8">
                        <div className="bg-white p-6 shadow-soft">
                            <h4 className="text-brown-light text-xs font-bold uppercase tracking-widest mb-2">Apprenticeships</h4>
                            <p className="text-4xl font-serif text-brown-dark">5,000</p>
                        </div>
                        <div className="bg-white p-6 shadow-soft">
                            <h4 className="text-brown-light text-xs font-bold uppercase tracking-widest mb-2">Funding Goal</h4>
                            <p className="text-4xl font-serif text-brown-dark">$12M</p>
                        </div>
                    </div>
                )
            }
        ]
    },
    {
        number: "03",
        title: <><span className="block">Health</span><span className="block font-light italic text-cream/70">Equity</span></>,
        bgClassLeft: "bg-brown text-cream",
        bgClassRight: "bg-cream-dark",
        textClassLeft: "text-white",
        textClassRight: "text-brown-dark",
        imageSrc: "/images/priorities/health_equity_black_1771881174140.png",
        articles: [
            {
                icon: "child_care",
                category: "Maternal Health",
                title: "Ending the Maternal Mortality Crisis",
                description: "Black women are three times more likely to die from pregnancy-related causes. We are fighting to extend Medicaid coverage to 12 months postpartum and fund doula services for high-risk pregnancies.",
                extra: (
                    <div className="mt-4 bg-white p-8 shadow-card border-l-4 border-brown">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-serif text-xl text-brown-dark">SB 110: Doula Access</h4>
                            <span className="px-3 py-1 bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-widest">Passed</span>
                        </div>
                        <p className="text-sm text-brown/60">Effective July 1, 2024</p>
                    </div>
                )
            },
            {
                icon: "local_hospital",
                category: "Rural Healthcare",
                title: "Protecting Our Rural Hospitals",
                description: "Ensuring that rural communities have access to emergency care is non-negotiable. Our legislation proposes increased state subsidies for rural facilities and loan forgiveness programs for doctors serving in these critical areas."
            }
        ]
    }
];

export default function PolicyPage() {
    return (
        <div className="bg-cream">
            <PolicyHero />
            {sections.map(section => (
                <PolicySection key={section.number} {...section} />
            ))}
        </div>
    );
}
