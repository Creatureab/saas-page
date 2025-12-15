import Image from "next/image";
import testomonial1 from "@/assets/Testimonial Card.svg";

const testimonialData = {
    title: "Web Prodigies",
    hashtag: "@webprodigies",
    imageSrc: testomonial1,
    text: "This platform has revolutionized the way I work. It's intuitive, flexible, and has made me more productive than ever before"
};


const Testomonials = () => {

    return (
        <section className="py-8 md:py-12">
            <div className="container">
                <div className="relative w-fit mx-auto mb-3 rounded-full p-[1px] bg-gradient-to-r from-[#0560E8] via-[#7000FF] to-[#0560E8]">
                    <div className="flex items-center justify-center px-4 py-1.5 rounded-full bg-[#030014] backdrop-blur-[1px]">
                        <span className="text-sm font-medium text-white tracking-tight">
                            Testimonials
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-center max-w-5xl mx-auto mb-5 text-5xl font-bold tracking-tight text-[#B6B2FF] md:text-7xl text-center lg:text-6xl">
                    Trusted by all
                </div>
                <span className="block w-fit mx-auto text-center text-sm text-[#B6B2FF]">Join thousands of satisfied users who rely on our platform for their personal and professional productivity needs.</span>
                <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <div className="flex gap-5 pr-5 flex-none text-[#B6B2FF]">
                        {[testimonialData, testimonialData, testimonialData, testimonialData].map(
                            (card, index) => (
                                <Image
                                    key={index}
                                    src={card.imageSrc}
                                    alt={card.title}
                                    className="w-auto h-auto max-h-[300px]"
                                />
                            )
                        )}
                    </div>
                </div>
                <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <div className="flex gap-5 pr-5 flex-none text-[#B6B2FF]">
                        {[testimonialData, testimonialData, testimonialData, testimonialData].map(
                            (card, index) => (
                                <Image
                                    key={index}
                                    src={card.imageSrc}
                                    alt={card.title}
                                    className="w-auto h-auto max-h-[300px]"
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        </section >
    );
};
export default Testomonials;