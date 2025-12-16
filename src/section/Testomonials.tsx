'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import testomonial1 from "@/assets/Testimonial Card.svg";

const testimonialData = {
    title: "Web Prodigies",
    hashtag: "@webprodigies",
    imageSrc: testomonial1,
    text:
        "This platform has revolutionized the way I work. It's intuitive, flexible, and has made me more productive than ever before",
};

const Testomonials = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-0">
            <div className="container">
                {/* Badge */}
                <div className="relative w-fit mx-auto mb-3 rounded-full p-[1px] bg-gradient-to-r from-[#0560E8] via-[#7000FF] to-[#0560E8]">
                    <div className="flex items-center justify-center px-4 py-1.5 rounded-full bg-[#030014] backdrop-blur-[1px]">
                        <span className="text-sm font-medium text-white tracking-tight">
                            Testimonials
                        </span>
                    </div>
                </div>

                {/* Heading */}
                <div className="max-w-5xl mx-auto mb-4 font-bold text-[#B6B2FF] text-5xl md:text-7xl lg:text-6xl text-left md:text-center">
                    Trusted by all
                </div>

                <span className="block w-fit mx-auto text-center text-sm text-[#B6B2FF]">
                    Join thousands of satisfied users who rely on our platform for their
                    personal and professional productivity needs.
                </span>

                {/* Row 1 → Left */}
                <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <motion.div
                        className="flex gap-5 pr-5 flex-none"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 45,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...Array(2)].flatMap(() =>
                            [testimonialData, testimonialData, testimonialData, testimonialData]
                        ).map((card, index) => (
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
                        {[...Array(2)].flatMap(() =>
                            [testimonialData, testimonialData, testimonialData, testimonialData]
                        ).map((card, index) => (
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

export default Testomonials;
