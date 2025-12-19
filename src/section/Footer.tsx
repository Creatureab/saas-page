'use client';

import Image from "next/image";
import Logo from "@/assets/Frame 1.svg";

const footerLinks = [
  { title: "About", links: ["Company", "Careers", "Press", "Blog"] },
  { title: "Support", links: ["Help Center", "Contact Us", "Status", "Accessibility"] },
  { title: "FAQ", links: ["General", "Pricing", "Security", "Integrations"] },
  { title: "About", links: ["Our Story", "Leadership", "Partners", "News"] },
  { title: "Support", links: ["Documentation", "API Reference", "Community", "Guides"] },
  { title: "Account", links: ["Login", "Register", "Billing", "Settings"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/15 bg-[#070019]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 xl:px-24 2xl:px-32">

        {/* Top Section */}
        <div className="mb-12 max-w-md">
          <div className="flex items-center gap-2 mb-4">
            <Image src={Logo} alt="Logo" width={28} height={28} />
            <span className="text-white font-semibold text-lg">cypress.</span>
          </div>

          <p className="text-sm leading-relaxed text-neutral-400">
            Building modern digital experiences with a focus on performance,
            accessibility, and great design.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
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
                      className="text-sm text-neutral-400 transition hover:text-white"
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
