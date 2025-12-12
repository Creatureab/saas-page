const Hero = () => {
    return (
        <section className="relative pt-20 mb-1 pb-6 md:pt-32 md:pb-32 overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col items-center text-center">


                    <div className="relative mb-2 rounded-full p-[1px] bg-gradient-to-r from-[#0560E8] via-[#7000FF] to-[#0560E8]">
                        <div className="flex items-center justify-center px-4 py-1.5 rounded-full bg-[#030014] back">
                            <span className="text-sm font-medium text-white tracking-tight">
                                ✨ Your Workspace, Perfected
                            </span>
                        </div>
                    </div>


                    <h1 className="max-w-5xl mb-5 text-5xl font-bold tracking-tight text-[#B6B2FF] md:text-7xl lg:text-6xl">
                        All-In-One Collaboration and Productivity Platform
                    </h1>


                    <div className="mb-16">
                        <button className="relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-lg group">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0560E8] to-[#7000FF] group-hover:from-[#0560E8] group-hover:to-[#7000FF] opacity-100 transition-opacity duration-300"></span>
                            <span className="relative px-8 py-3 transition-all ease-out bg-[#030014] rounded-md group-hover:bg-opacity-0 duration-300">
                                <span className="relative text-lg font-medium text-white">Get cypress Free</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
