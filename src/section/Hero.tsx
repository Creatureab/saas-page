'use client';
import Herobg from "@/assets/Frame 8.svg";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative flex pt-10 pb-7 md:mt-10 md:pt-20 md:pb-10 overflow-hidden">
            <div className="container md:flex md:flex-col md:items-center md:text-center">
                <div className="flex w-fit flex-col px-2 md:px-3 items-start md:items-center text-left md:text-center">
                    <div className="mb-10 mt-10 px-3 md:px-0 justify-between">
                        <div className="rounded-full p-[2px] bg-gradient-to-r from-[#0560E8] via-[#7000FF] to-[#0560E8]">
                            <div className="flex px-3 py-2 gap-2.5 items-center rounded-full bg-[#030014]">
                                <span className="text-sm font-medium text-white tracking-tight">
                                    ✨ Your Workspace, Perfected
                                </span>
                            </div>
                        </div>
                    </div>
                    <h1 className="max-w-5xl mb-3 text-5xl md:text-7xl text-left md:text-center font-bold tracking-tight text-[#B6B2FF]">
                        All-In-One Collaboration and Productivity Platform
                    </h1>
                    <div className="mt-16 gap-8 inline-flex items-center justify-center inset-0 mb-5">
                        <div className="relative flex flex-col items-center gap-10 md:gap-14">
                            <button className="relative inline-flex items-center justify-center p-[2px] rounded-xl group mt-2 overflow-hidden">
                                <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#0560E8] to-[#7000FF]"></span>
                                <span className="relative z-10 px-10 py-3 md:px-10 md:py-2 rounded-xl bg-[#030014]">
                                    <span className="relative text-sm font-medium text-white">Get cypress Free</span>
                                </span>
                            </button>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0560E8] to-[#7000FF] opacity-10 blur-3xl [mask-image:linear-gradient(100%_100%_at_0%_0%,white_75%,transparent)]"/>
                            <div className="flex items-center justify-center w-full max-w-[393px] md:max-w-[900px] lg:max-w-[1145px] h-auto overflow-hidden">
                                <Image
                                    src={Herobg}
                                    alt="Collaboration platform dashboard preview"
                                    width={1145}
                                    height={541}
                                    priority
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;