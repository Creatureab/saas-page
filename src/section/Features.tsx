'use client';
import Image from "next/image";
import Featuresbg from "@/assets/Desktop - 8.svg";

const Features = () => {
    return (
        <section className="relative py-20 md:py-24 overflow-hidden">
            <div className="container relative">
                <div className="absolute -z-10" />
                <div className="flex justify-center mb-2">
                    <div className="rounded-full p-[1px] bg-gradient-to-r from-[#0560E8] via-[#7000FF] to-[#0560E8]">
                        <div className="flex items-center justify-center px-6 py-2 rounded-full bg-[#030014]">
                            <span className="text-sm font-medium text-white tracking-tight">
                                Features
                            </span>
                        </div>
                    </div>
                </div>

                <div className="px-4 sm:px-6 lg:px-0">
                    <h2 className="text-5xl md:text-6xl max-w-2xl font-medium text-[#B6B2FF] tracking-tighter text-left md:text-center mx-auto">
                        Keep track of your meetings all in one place
                    </h2>
                    <p className="mt-6 text-lg text-[#9C99C1] max-w-2xl text-left md:text-center mx-auto">
                        Capture your ideas, thought, and meeting notes in a structured
                        and organized manner.
                    </p>
                </div>

                {/* Feature Image */}
                <div className="relative p-2.5 rounded-xl mt-14 flex items-center justify-center">
                    <Image
                        src={Featuresbg}
                        alt="Features background"
                        className="max-w-full h-auto rounded-xl"
                    />
                </div>
            </div>

        </section>
    );
};

export default Features;