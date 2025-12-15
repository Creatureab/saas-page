import Image from "next/image";
import pricing1 from "@/assets/Pricing1.svg";
import pricing2 from "@/assets/Pricing2.svg";


const Pricing = () => {
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
                <div className="flex items-center justify-center max-w-5xl mx-auto mb-2 font-bold text-[#B6B2FF] text-5xl md:text-7xl lg:text-6xl">
                    The Perfect Plan For You
                </div>
                <span className="block max-w-3xl mx-auto text-center text-lg md:text-2xl font-bold text-[#B6B2FF] px-5 py-2 mb-5">Join thousands of satisfied users who rely on our platform for their
                    personal and professional productivity needs.</span>
                <div className="flex justify-center gap-5">
                    <Image src={pricing2} alt="pricing" className="w-auto h-auto max-h-[500px]" />
                    <Image src={pricing1} alt="pricing" className="w-auto h-auto max-h-[500px]" />
                </div>
            </div>
        </section>
    )
}
export default Pricing