'use client'
import Image from "next/image";
import Logo from "@/assets/Frame 1.svg";

const footerLinks = [
    {
        title: "About",
        links: ["Company", "Careers", "Press", "Blog"],
    },
    {
        title: "Support",
        links: ["Help Center", "Contact Us", "Status", "Accessibility"],
    },
    {
        title: "FAQ",
        links: ["General", "Pricing", "Security", "Integrations"],
    },
    {
        title: "About",
        links: ["Our Story", "Leadership", "Partners", "News"],
    },
    {
        title: "Support",
        links: ["Documentation", "API Reference", "Community", "Guides"],
    },
    {
        title: "Account",
        links: ["Login", "Register", "Billing", "Settings"],
    },
];

export default function Footer() {
    return (
        <footer className="py-12">
            <div className="container mx-auto px-6">
                {/* Top Section */}
                <div className="mb-10 max-w-xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-2">
                            <Image src={Logo} alt="Logo" width={28} height={28} />
                            <span className="text-white gap-2 font-semibold text-lg">cypress.</span>
                        </div>
                    </div>
                    <p className="text-sm leading-relaxed text-neutral-400">
                        Building modern digital experiences with a focus on performance,
                        accessibility, and great design.
                    </p>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                    {footerLinks.map((column, idx) => (
                        <div key={idx}>
                            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-100">
                                {column.title}
                            </h4>
                            <ul className="space-y-2">
                                {column.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <a
                                            href="#"
                                            className="text-sm text-neutral-400 transition-colors hover:text-neutral-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}
