import Image from "next/image";
import Logo from "@/assets/Frame 1.svg";

const NavBar = () => {
    return (
        <section>
            <header className="w-full border-b border-white/15 sticky top-0 z-10 relative md:backdrop-blur-none bg-[#070019]">

                <nav className="max-w-7xl mx-auto flex items-center justify-between px-3 py-2">


                    <div className="flex items-center gap-2">
                        <Image src={Logo} alt="Logo" width={28} height={28} />
                        <span className="text-white gap-2 font-semibold text-lg">cypress.</span>
                    </div>


                    <ul className="hidden md:flex items-center gap-8 px-6 py-2 rounded-full border border-white/15 bg-black/20">
                        <li className="text-white/90 hover:text-white cursor-pointer">Product</li>
                        <li className="text-white/90 hover:text-white cursor-pointer">Pricing</li>
                        <li className="text-white/90 hover:text-white cursor-pointer">About</li>
                        <li className="text-white/90 hover:text-white cursor-pointer">Resources</li>
                        <li className="text-white/90 hover:text-white cursor-pointer">Download</li>
                    </ul>


                    <div className="flex items-center gap-4">
                        <button className="text-white/80 hover:text-white text-16px cursor-pointer">Login</button>
                        <button className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 bg-gradient-to-t from-[#201F30] to-[#464553] cursor-pointer">
                            Sign Up
                        </button>
                    </div>

                </nav>
            </header>
        </section>
    );
};

export default NavBar;
