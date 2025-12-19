'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Diamond from "@/assets/Diamond.png";

const CheckIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
};

const Pricing = () => {
    const pricingData = [
        {
            title: "Free Plan",
            price: "$0",
            describe: "Limited block trials for teams",
            buttonText: "Get Started",
            features: [
                "Unlimited Users",
                "Unlimited Storage",
                "Unlimited Bandwidth",
                "Basic Support",
            ],
        },
        {
            title: "Pro Plan",
            price: "$19",
            describe: "Unlimited access for scaling teams",
            buttonText: "Get Started",
            features: [
                "Unlimited Users",
                "Unlimited Storage",
                "Unlimited Bandwidth",
                "Priority Support",
            ],
            icon: Diamond,
        },
    ];

    return (
        <section className="py-4 md:py-12 overflow-hidden">
            <div className="container max-w-7xl mx-auto">
                <div className="relative w-fit mb-3 rounded-full p-[1px] bg-gradient-to-r from-[#0560E8] via-[#7000FF] to-[#0560E8] ml-4 sm:ml-6 md:mx-auto">
                    <div className="flex md:items-center md:justify-center px-4 py-1.5 rounded-full bg-[#030014] backdrop-blur-[1px]">
                        <span className="text-sm font-medium text-white tracking-tight">
                            Pricing
                        </span>
                    </div>
                </div>

                {/* Heading */}
                <div className="px-4 sm:px-6 lg:px-0">
                    <h2 className="max-w-5xl mx-auto mb-4 font-bold text-[#B6B2FF] text-5xl md:text-7xl lg:text-6xl xl:text-7xl text-left md:text-center">
                        The Perfect Plan For You
                    </h2>

                    <p className="max-w-3xl mx-auto mb-10 text-lg md:text-2xl text-[#B6B2FF] text-left md:text-center">
                        Join thousands of satisfied users who rely on our platform for their
                        personal and professional productivity needs.
                    </p>
                </div>

                {/* Cards */}
                <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
                    {pricingData.map((item, index) => {
                        const isPro = item.title === "Pro Plan";

                        return (
                            <div
                                key={index}
                                className={twMerge(
                                    "relative p-10 rounded-3xl border max-w-xs w-full",
                                    "border-white/10 bg-white/5 text-white"
                                )}
                            >
                                {/* 🔮 Figma Purple Glow (Pro only) */}
                                {isPro && (
                                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[618px] h-[529px] rounded-full bg-[#5000B5] opacity-[0.23] blur-[150px] pointer-events-none -z-10" />
                                )}

                                {/* Title */}
                                <div className="flex justify-between items-center whitespace-nowrap">
                                    <h3 className="text-lg font-bold text-white/60">
                                        {item.title}
                                    </h3>

                                    {isPro && (
                                        <motion.div
                                            animate={{ rotate: [-4, 4, -4] }}
                                            transition={{
                                                duration: 6,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <Image
                                                src={Diamond}
                                                alt="Diamond"
                                                className="w-6 h-6 object-contain drop-shadow-[0_0_10px_rgba(112,0,255,0.5)]"
                                            />
                                        </motion.div>
                                    )}
                                </div>

                                {/* Price */}
                                <div className="flex items-baseline gap-1 mt-8">
                                    <span className="text-4xl font-bold tracking-tighter">
                                        {item.price}
                                    </span>
                                    <span className="text-white/50 font-bold">
                                        /month
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="mt-4 text-sm text-white/70">
                                    {item.describe}
                                </p>

                                {/* Button */}
                                <button className="w-full mt-8 px-4 py-2 rounded-lg font-medium transition-colors bg-gradient-to-t from-[#201F30] to-[#464553] hover:opacity-90">
                                    {item.buttonText}
                                </button>

                                {/* Features */}
                                <ul className="flex flex-col gap-5 mt-8">
                                    {item.features.map((feature, i) => (
                                        <li key={i} className="text-sm flex items-center gap-4">
                                            <CheckIcon className="h-6 w-6" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
