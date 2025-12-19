"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import companyLogo from "@/assets/Company logo.png";
import companyLogo1 from "@/assets/Company logo (1).png";
import companyLogo2 from "@/assets/Company logo (2).png";
import companyLogo3 from "@/assets/Company logo (3).png";
import companyLogo4 from "@/assets/Company logo (4).png";

const logos = [
    companyLogo,
    companyLogo1,
    companyLogo2,
    companyLogo3,
    companyLogo4,
];

const Logoticker = () => {
    return (
        <section className="py-8 md:py-12">
            <div className="container max-w-7xl mx-auto">
                <div className="relative overflow-hidden flex justify-center
                    [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

                    <motion.div
                        className="flex items-center gap-14"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 45,
                            ease: "linear",
                        }}
                    >
                        {/* Duplicate logos for seamless loop */}
                        {[...logos, ...logos].map((logo, index) => (
                            <Image
                                key={index}
                                src={logo}
                                alt={`Company logo ${index + 1}`}
                                className="h-10 w-auto opacity-80 hover:opacity-100 transition"
                            />
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Logoticker;
