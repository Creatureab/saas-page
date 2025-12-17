'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/Frame 1.svg";
import MenuIcon from "@/assets/icon-menu.svg";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 lg:w-full z-20 border-b border-white/15 bg-[#070019]/80 backdrop-blur">
      <nav className="container max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-1">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" width={28} height={28} />
          <span className="text-white justify-between font-semibold md:text-sm lg:text-lg">
            cypress.
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 px-6 py-2 rounded-full border border-white/15 bg-black/20">
          <li><Link href="/product" className="text-white/90 hover:text-white">Product</Link></li>
          <li><Link href="/pricing" className="text-white/90 hover:text-white">Pricing</Link></li>
          <li><Link href="/about" className="text-white/90 hover:text-white">About</Link></li>
          <li><Link href="/resources" className="text-white/90 hover:text-white">Resources</Link></li>
          <li><Link href="/download" className="text-white/90 hover:text-white">Download</Link></li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-white/80 hover:text-white text-sm">
            Login
          </button>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-t from-[#201F30] to-[#464553] text-white">
            Sign Up
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-3">
            <button className="text-white/80 hover:text-white text-sm">
                Login
            </button>
        <button className="px-3 py-1.5 rounded-lg bg-gradient-to-t from-[#201F30] to-[#464553] text-white text-sm">
                Sign Up
        </button>

        <button
            onClick={() => setOpen(!open)}  className="p-2">
        <Image src={MenuIcon} alt="Menu" width={22} height={22} />
        </button>
    </div>

      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#070019] border-t border-white/15 px-6 py-6">
          <ul className="flex flex-col gap-5 text-white">
            <li><Link href="/product" onClick={() => setOpen(false)}>Product</Link></li>
            <li><Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link href="/resources" onClick={() => setOpen(false)}>Resources</Link></li>
            <li><Link href="/download" onClick={() => setOpen(false)}>Download</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
