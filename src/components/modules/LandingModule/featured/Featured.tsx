// Featured.tsx
import React from 'react';
import { FocusRail, type FocusRailItem, FallingPattern } from "../../../elements";

const FEATURED_ITEMS: FocusRailItem[] = [
    {
        id: 1,
        title: "M.S. at Tsinghua University",
        description: "Commenced M.S. at Tsinghua University focusing on Artificial Intelligence after graduating in 3.5 years from University of Indonesia.",
        meta: "Academic • Journey",
        imageSrc: "https://media.licdn.com/dms/image/v2/D5622AQFSfqtyaMB-lw/feedshare-shrink_1280/B56ZkIPbR5HcAs-/0/1756779890956?e=1773273600&v=beta&t=ubm-IITDPT6XIeynl27NvcUlqY0_ZtYEqKdp-mQyz-A",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7368468929901445120/",
    },
    {
        id: 2,
        title: "FrOG: Framework of Open GraphRAG",
        description: "Published Bachelor's Thesis at the TEXT2KG workshop & BiKE Challenge at ESWC 2025 in Slovenia.",
        meta: "Research • Publication",
        imageSrc: "https://media.licdn.com/dms/image/v2/D5622AQHR-yURP87AkA/feedshare-shrink_2048_1536/B56ZkPHPNqHUA4-/0/1756895181120?e=1773273600&v=beta&t=JqkK6lUuWWahKqTZUQ1f9l7ioabyJ1O48qnyuX4XbE8",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7368970289797345281/",
    },
    {
        id: 3,
        title: "Coaching Indonesian National AI Team",
        description: "Guided Indonesia's young talents at IOAI 2025 Beijing, bringing home 3 Silver and 1 Bronze medals.",
        meta: "Mentorship • IOAI",
        imageSrc: "https://media.licdn.com/dms/image/v2/D5622AQHSxSV-kcazqg/feedshare-shrink_1280/B56ZiuE714G4Aw-/0/1755267196135?e=1773273600&v=beta&t=TNQA0lbY0a0bw3ci_8DkD4kas4YnAvuZ0cEL6_IIgK0",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7362124231846846464/",
    },
    {
        id: 4,
        title: "GEMASTIK XVII Grand Champion",
        description: "Fasilkom UI wins Grand Champion Title at GEMASTIK 17. Secured 1st place in Data Mining category with team 'Three Outliers'.",
        meta: "Champion • Data Mining",
        imageSrc: "https://media.licdn.com/dms/image/v2/D562DAQFokVEYPjWlag/profile-treasury-image-shrink_480_480/profile-treasury-image-shrink_480_480/0/1727796583883?e=1772355600&v=beta&t=s96Zvpn37tMy9qXpuiiFc6c-GoZ5cf_SmawiSNxw4_w",
        href: "https://cs.ui.ac.id/2024/09/26/fakultas-ilmu-komputer-ui-raih-gelar-juara-umum-gemastik-17-membawa-pulang-9-medali/",
    },
    {
        id: 5,
        title: "Satria Data 2024 Silver Medal",
        description: "UI Students win Silver Medal at the Satria Data 2024 Big Data Challenge competition.",
        meta: "Victory • Big Data",
        imageSrc: "https://media.licdn.com/dms/image/v2/D5622AQHSCmAhkMSlMg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727533471601?e=1773273600&v=beta&t=IkONgaYthNokPrSudFY47T3tnTOJdxVQUiX_5tOSejc",
        href: "https://cs.ui.ac.id/2024/08/06/mahasiswa-ui-sabet-medali-di-kompetisi-satria-data-2024/",
    },
    {
        id: 6,
        title: "JOINTS 2023 Grand Champion",
        description: "UI wins Grand Champion at JOINTS 2023 IT Competition. Won 2nd place in first-ever external competition.",
        meta: "Milestone • IT",
        imageSrc: "https://media.licdn.com/dms/image/v2/D5622AQHETVW3NJVXXA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1704531858827?e=1773273600&v=beta&t=XeRGkmsUN_XeOt8mH1zkLNDUcnb29sQegMxCcOa85sU",
        href: "https://cs.ui.ac.id/2023/05/23/universitas-indonesia-raih-juara-umum-kompetisi-it-bergengsi-jogja-information-technology-session-joints-2023/",
    }
];

export default function Featured() {
    return (
        <section id="featured" className="relative w-full min-h-screen pb-24 flex flex-col justify-center items-center overflow-x-hidden text-white z-10">
            {/* Dark background fading out to transparent at the bottom */}
            <div className="absolute inset-0 z-0 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, black 5%, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, black 5%, black 70%, transparent 100%)' }}>
                <div className="absolute inset-0 z-0 pointer-events-none falling-pattern-mask hidden md:block">
                    <FallingPattern color="rgba(255, 255, 255, 1)" backgroundColor="#0A0A0B" duration={120} blurIntensity="1em" density={1} />
                </div>
            </div>

            {/* Title Container with local Falling Pattern Background */}
            <div className="relative w-full flex flex-col items-center justify-center py-20">

                {/* Title Content */}
                <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center md:px-6">
                    <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm ring-1 ring-white/20 backdrop-blur-md mb-6">
                        Featured Stories
                    </div>
                    <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                        Selected Highlights
                    </h2>
                    <p className="text-slate-400 text-sm max-w-xl mx-auto font-sans">
                        A glimpse into recent academic landmarks, research publications, and national competition victories.
                    </p>
                </div>
            </div>

            <div className="w-full max-w-6xl mx-auto px-4 md:px-6 relative z-20">
                <div className="relative rounded-2xl md:rounded-[32px] border border-white/[0.08] bg-[#09090b]/80 shadow-[0_0_100px_rgba(0,0,0,0.5)] backdrop-blur-xl overflow-hidden ring-1 ring-white/[0.02]">

                    {/* MacOS-style Window Header */}
                    <div className="absolute top-0 inset-x-0 h-12 flex items-center px-6 z-30 bg-transparent">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-white/20 border border-white/10" />
                            <div className="w-3 h-3 rounded-full bg-white/20 border border-white/10" />
                            <div className="w-3 h-3 rounded-full bg-white/20 border border-white/10" />
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 text-xs font-mono text-white/20 tracking-widest uppercase">
                            Gallery
                        </div>
                    </div>

                    {/* Window Lighting & Glare */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none z-10" />

                    <div className="pt-10 pb-4 relative z-20">
                        <FocusRail
                            items={FEATURED_ITEMS}
                            autoPlay={true}
                            interval={5000}
                            loop={true}
                            className="bg-transparent"
                        />
                    </div>
                </div>
            </div>

            {/* Decorative background styling to match site aura - hidden here to let the global background shine through the transparent bottom */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-50" style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}>
                <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 blur-[80px] rounded-full" style={{ willChange: "transform", transform: "translateZ(0) translate(-50%, -50%)" }} />
                <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[80px] rounded-full" style={{ willChange: "transform", transform: "translateZ(0) translate(50%, 50%)" }} />
            </div>
        </section>
    );
}
