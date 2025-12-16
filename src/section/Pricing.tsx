import Diamond from "@/assets/Diamond.png";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const CheckIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
    ]

    return (
        <section className="py-8 md:py-12">
            <div className="container">
                <div className="relative w-fit mx-auto mb-3 rounded-full p-[1px] bg-gradient-to-r from-[#0560E8] via-[#7000FF] to-[#0560E8]">
                    <div className="flex items-center justify-center px-4 py-1.5 rounded-full bg-[#030014] backdrop-blur-[1px]">
                        <span className="text-sm font-medium text-white tracking-tight">
                            Pricing
                        </span>
                    </div>
                </div>
                <div className="px-4 sm:px-6 lg:px-0">
                    <h2 className="max-w-5xl mx-auto mb-4 font-bold text-[#B6B2FF]
                 text-5xl md:text-7xl lg:text-6xl
                 text-left md:text-center">
                        The Perfect Plan For You
                    </h2>

                    <p className="max-w-3xl mx-auto mb-10
                text-lg md:text-2xl font-bold text-[#B6B2FF]
                text-left md:text-center">
                        Join thousands of satisfied users who rely on our platform for their
                        personal and professional productivity needs.
                    </p>
                </div>


                <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
                    {pricingData.map((item, index) => {
                        const isPro = item.title === "Pro Plan";
                        // Force inverse to false to avoid white background, 
                        // while keeping the card logic simplified for the dark theme.
                        const inverse: boolean = false;

                        return (
                            <div
                                key={index}
                                className={twMerge(
                                    "p-10 rounded-3xl border border-[#F1F1F1] max-w-xs w-full",
                                    inverse && "border-black bg-white text-black",
                                    !inverse && "border-white/10 bg-white/5 text-white"
                                )}
                            >
                                <div className="flex justify-between items-center whitespace-nowrap">
                                    <h3
                                        className={twMerge(
                                            "text-lg font-bold text-black/50",
                                            inverse && "text-black/60",
                                            !inverse && "text-white/60"
                                        )}
                                    >
                                        {item.title}
                                    </h3>

                                    {isPro && (
                                        <div className="inline-flex text-sm px-4 py-1.5">
                                            <Image src={Diamond} alt="Diamond" className="w-6 h-6 object-contain" />
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-baseline gap-1 mt-[30px]">
                                    <span className="text-4xl font-bold tracking-tighter leading-none">
                                        {item.price}
                                    </span>
                                    <span
                                        className={twMerge(
                                            "tracking-tight font-bold text-black/50",
                                            !inverse && "text-white/50"
                                        )}
                                    >
                                        /month
                                    </span>
                                </div>

                                <p className={twMerge("mt-4 text-sm", inverse ? "text-black/70" : "text-white/70")}>
                                    {item.describe}
                                </p>

                                <button
                                    className={twMerge(
                                        "w-full mt-[30px] px-4 py-2 rounded-lg font-medium cursor-pointer transition-colors bg-white/10 text-white hover:bg-white/20 bg-gradient-to-t from-[#201F30] to-[#464553]",
                                    )}
                                >
                                    {item.buttonText}
                                </button>

                                <ul className="flex flex-col gap-5 mt-8">
                                    {item.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="text-sm flex items-center gap-4"
                                        >
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
    )
}
export default Pricing