'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/assets/Frame 1.svg';
import MenuIcon from '@/assets/icon-menu.svg';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-20 border-b border-white/15 bg-[#070019]/80">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="Cypress Logo" width={28} height={28} priority />
            <span className="text-white font-semibold text-base lg:text-lg">
              cypress.
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 rounded-full border border-white/15 bg-black/20 px-6 py-2">
            {['Product', 'Pricing', 'About', 'Resources', 'Download'].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm text-white/80 hover:text-white transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-gradient-to-t from-[#201F30] to-[#464553] px-4 py-2 text-sm text-white"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <Link href="/login" className="text-sm text-white/80">
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-gradient-to-t from-[#201F30] to-[#464553] px-3 py-1.5 text-sm text-white"
            >
              Sign Up
            </Link>
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="p-2"
            >
              <Image src={MenuIcon} alt="Menu" width={22} height={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-white/15 bg-[#070019] transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-5 px-6 py-6 text-white">
          {['Product', 'Pricing', 'About', 'Resources', 'Download'].map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block text-white/80 hover:text-white"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
