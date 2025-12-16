'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/Frame 1.svg";
import MenuIcon from "@/assets/icon-menu.svg";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <section>
            <header className="fixed w-full border-b border-white/15 top-0 z-10 bg-[#070019]">
                <nav className="max-w-7xl md:px-12 px-6 mx-auto flex items-center justify-between py-1">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Image src={Logo} alt="Logo" width={28} height={28} />
                        <span className="text-white font-semibold md:text-sm lg:text-lg">
                            cypress.
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-8 px-6 py-2 rounded-full border border-white/15 bg-black/20">
                        <li><Link className="text-white/90 hover:text-white" href="/product">Product</Link></li>
                        <li><Link className="text-white/90 hover:text-white" href="/pricing">Pricing</Link></li>
                        <li><Link className="text-white/90 hover:text-white" href="/about">About</Link></li>
                        <li><Link className="text-white/90 hover:text-white" href="/resources">Resources</Link></li>
                        <li><Link className="text-white/90 hover:text-white" href="/download">Download</Link></li>
                    </ul>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4 md:gap-6">
                        <button className="text-white/80 hover:text-white text-sm">
                            Login
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-gradient-to-t from-[#201F30] to-[#464553] text-white">
                            Sign Up
                        </button>
                    </div>
                    <div className="md:hidden flex items-center gap-4">
                        <button className="text-white/80 hover:text-white text-sm">
                            Login
                        </button>
                        <button className="px-2 py-1 rounded-lg bg-gradient-to-t from-[#201F30] to-[#464553] text-white">
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Menu Icon */}
                    <button
                        className="md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        <Image src={MenuIcon} alt="Menu" width={20} height={20} />
                    </button>
                </nav>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden bg-[#070019] border-t border-white/15 px-6 py-6">
                        <ul className="flex flex-col gap-5 text-white">

                            {/* Nav Links */}
                            <li><Link href="/product" onClick={() => setOpen(false)}>Product</Link></li>
                            <li><Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link></li>
                            <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
                            <li><Link href="/resources" onClick={() => setOpen(false)}>Resources</Link></li>
                            <li><Link href="/download" onClick={() => setOpen(false)}>Download</Link></li>

                            {/* Divider */}
                            <div className="h-px bg-white/15 my-2" />

                            {/* Mobile Actions */}

                        </ul>
                    </div>
                )}
            </header>
        </section>
    );
};

export default NavBar;
