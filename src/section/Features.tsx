"use client";
import companyLogo from "@/assets/Company logo.png";
import companyLogo1 from "@/assets/Company logo (1).png";
import companyLogo2 from "@/assets/Company logo (2).png";
import companyLogo3 from "@/assets/Company logo (3).png";
import companyLogo4 from "@/assets/Company logo (4).png";
import companyLogo5 from "@/assets/Company logo.png";
import Image from "next/image";

const Features = () => {
    return (
        <section>
            <div className="py-4 md:py-12">
                <div className="container">
                    <div className="flex overflow-hidden gap-14 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                        <Image
                            src={companyLogo}
                            alt="Layers Logo"
                            className="logo-ticker-image"
                        />
                        <Image
                            src={companyLogo1}
                            alt="catalog Logo"
                            className="logo-ticker-image"
                        />
                        <Image
                            src={companyLogo2}
                            alt="Quotient Logo"
                            className="logo-ticker-image"
                        />
                        <Image
                            src={companyLogo3}
                            alt="circooles Logo"
                            className="logo-ticker-image"
                        />
                        <Image
                            src={companyLogo4}
                            alt="Acme Logo"
                            className="logo-ticker-image"
                        />
                        <Image
                            src={companyLogo5}
                            alt="sysphus Logo"
                            className="logo-ticker-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Features;