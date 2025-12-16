'use client';
import Herobg from "@/assets/Frame 8.svg";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative pt-10 pb-4 md:pt-20 md:pb-10 overflow-hidden">
            <div className="container px-4 mx-auto inset-0">
                <div className="flex flex-col items-center lg:text-center md:text-left">


                    <div className="relative mb-2 inline-flex  md:justify-start">
                        <div className="rounded-full p-[2px] bg-gradient-to-r from-[#0560E8] via-[#7000FF] to-[#0560E8]">
                            <div className="flex items-center justify-center px-4 py-1.5 rounded-full bg-[#030014]">
                                <span className="text-sm font-medium text-white tracking-tight">
                                    ✨ Your Workspace, Perfected
                                </span>
                            </div>
                        </div>
                    </div>

                    <h1 className="max-w-5xl mb-5 text-5xl font-bold tracking-tight text-[#B6B2FF] md:text-7xl lg:text-6xl">
                        All-In-One Collaboration and Productivity Platform
                    </h1>

                    <div className="mt-16 gap-8 inline-flex items-center justify-center inset-0">
                        <div className="mb-16">
                            <button className="relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-lg group mt-2">
                                <span className="absolute inset-0 bg-gradient-to-br from-[#0560E8] to-[#7000FF] group-hover:from-[#0560E8] group-hover:to-[#7000FF] opacity-100 transition-opacity duration-300"></span>
                                <span className="relative px-6 py-2 transition-all ease-out bg-[#030014] rounded-md group-hover:bg-opacity-0 duration-300">
                                    <span className="relative text-sm font-medium text-white">Get cypress Free</span>
                                </span>
                            </button>
                            <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-[#0560E8] to-[#7000FF] [mask-image:radial-gradient(50%_50%_at_16.8%_18.3%,white,transparent_65%)] [mask-image:radial-gradient(50%_50%_at_16.8%_18.3%,white,transparent_65%)] shadow-[0_0_50px_rgb(140,69,255)]"></div>
                            <div className="flex items-center justify-center w-1145px h-541px">
                                <Image src={Herobg} alt="Herobg" />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;