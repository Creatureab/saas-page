'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import testimonial1 from "@/assets/Testimonial Card.svg";

const testimonialData = {
    title: "Web Prodigies",
    hashtag: "@webprodigies",
    imageSrc: testimonial1,
    text:
        "This platform has revolutionized the way I work. It's intuitive, flexible, and has made me more productive than ever before",
};

const Testimonials = () => {
    return (
        <section className="relative px-4 sm:px-6 lg:px-0 py-20 overflow-hidden">
            <div className="container relative">
            <div className="absolute top-[220px] left-1/2 -translate-x-1/2 w-[956px] h-[529px] rounded-full bg-[#5000B5] opacity-[0.23] blur-[150px] pointer-events-none -z-10" />
                <div className="relative w-fit mx-auto mb-3 rounded-full p-[1px] bg-gradient-to-r from-[#0560E8] via-[#7000FF] to-[#0560E8] ml-0 md:mx-auto">
                <div className="flex items-start justify-start md:items-center md:justify-center px-4 py-1.5 rounded-full bg-[#030014] backdrop-blur-[1px]">
                    <span className="text-sm font-medium text-white tracking-tight">
                            Testimonials
                    </span>
                </div>

                </div>

                
                <h2 className="max-w-5xl mx-auto mb-4 font-bold text-[#B6B2FF] text-5xl md:text-7xl lg:text-6xl text-left md:text-center">
                    Trusted by all
                </h2>

                <p className="block w-fit mx-auto text-center text-sm text-[#B6B2FF]">
                    Join thousands of satisfied users who rely on our platform for their
                    personal and professional productivity needs.
                </p>

                {/* Row 1 → Left */}
                <div className="flex overflow-hidden mt-16 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <motion.div
                        className="flex gap-5 pr-5 flex-none"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 45,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...Array(2)]
                            .flatMap(() => Array(4).fill(testimonialData))
                            .map((card, index) => (
                                <Image
                                    key={index}
                                    src={card.imageSrc}
                                    alt={card.title}
                                    className="w-auto h-auto max-h-[300px]"
                                />
                            ))}
                    </motion.div>
                </div>

                {/* Row 2 → Right */}
                <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <motion.div
                        className="flex gap-5 pl-5 flex-none"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...Array(2)]
                            .flatMap(() => Array(4).fill(testimonialData))
                            .map((card, index) => (
                                <Image
                                    key={index}
                                    src={card.imageSrc}
                                    alt={card.title}
                                    className="w-auto h-auto max-h-[300px]"
                                />
                            ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
