"use client";
import companyLogo from "@/assets/Company logo.png";
import companyLogo1 from "@/assets/Company logo (1).png";
import companyLogo2 from "@/assets/Company logo (2).png";
import companyLogo3 from "@/assets/Company logo (3).png";
import companyLogo4 from "@/assets/Company logo (4).png";
import companyLogo5 from "@/assets/Company logo.png";
import Image from "next/image";

const Logoticker = () => {
    return (
        <section className="py-8 md:py-12">
            <div className="container mx-auto">
                <div className="flex items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20px,black_80%,transparent)]">

                    <div className="flex items-center gap-14">
                        {[companyLogo, companyLogo1, companyLogo2, companyLogo3, companyLogo4, companyLogo5].map(
                            (logo, index) => (
                                <Image
                                    key={index}
                                    src={logo}
                                    alt={`Company logo ${index + 1}`}
                                    className="w-auto h-10"
                                />
                            )
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Logoticker;
