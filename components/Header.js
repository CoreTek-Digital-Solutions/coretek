// components/Header.js
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DarkToggle from "./DarkToggle";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  // Server / first render placeholder
  if (!mounted) {
    return (
      <header className="bg-white dark:bg-[#071226] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="w-32 h-8 bg-gray-100 dark:bg-[#071829] rounded" />
          <div className="w-8 h-8 bg-gray-100 dark:bg-[#071829] rounded" />
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white dark:bg-[#071226] shadow-sm relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="CoreTek home">
          <img
            src="/logo.png"
            alt="CoreTek logo"
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
          />
          <div className="ml-3">
            <div className="text-lg font-semibold text-gray-800 dark:text-white">
              CoreTek
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Digital Solutions
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          {/* Services */}
          <div className="relative group">
            <button className="dark:text-white hover:text-coreBlue dark:hover:text-coreBlue transition-colors">
              Services
            </button>

            <div
              className="
                absolute right-0 top-full mt-0 w-48
                bg-white dark:bg-[#071226] border border-gray-100 dark:border-gray-800
                rounded-lg shadow-lg z-20
                opacity-0 translate-y-1 pointer-events-none
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                transition-all duration-150 ease-out
              "
            >
              <div className="p-2">
                <Link href="/services/saas" className="block px-3 py-2 rounded hover:bg-gray-50 dark:hover:bg-[#071829] dark:text-white">
                  SaaS Development
                </Link>
                <Link href="/services/ecommerce" className="block px-3 py-2 rounded hover:bg-gray-50 dark:hover:bg-[#071829] dark:text-white">
                  E-commerce
                </Link>
                <Link href="/services/software" className="block px-3 py-2 rounded hover:bg-gray-50 dark:hover:bg-[#071829] dark:text-white">
                  Software & API
                </Link>
              </div>
            </div>
          </div>

          <Link href="/work" className="dark:text-white hover:text-coreBlue dark:hover:text-coreBlue">Work</Link>
          <Link href="/about" className="dark:text-white hover:text-coreBlue dark:hover:text-coreBlue">About</Link>
          <Link href="/contact" className="dark:text-white hover:text-coreBlue dark:hover:text-coreBlue">Contact</Link>
          <DarkToggle />
        </nav>

        {/* Burger Button (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-gray-800 dark:bg-white transition ${menuOpen && "rotate-45 translate-y-2"}`} />
          <span className={`h-0.5 w-6 bg-gray-800 dark:bg-white transition ${menuOpen && "opacity-0"}`} />
          <span className={`h-0.5 w-6 bg-gray-800 dark:bg-white transition ${menuOpen && "-rotate-45 -translate-y-2"}`} />
        </button>
      </div>

{/* Mobile Menu */}
<div
  className={`
    md:hidden overflow-hidden transition-all duration-300
    ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
  `}
>
  <nav className="px-6 pb-6 flex flex-col gap-4 text-sm dark:text-white">

    {/* Services Dropdown */}
    <button
      onClick={() => setServicesOpen(!servicesOpen)}
      className="flex items-center justify-between font-medium dark:hover:text-coreBlue"
    >
      <span>Services</span>
      <span
        className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
      >
        ▼
      </span>
    </button>

    <div
      className={`
        pl-4 overflow-hidden transition-all duration-300
        ${servicesOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
      `}
    >
      <Link
        href="/services/saas"
        onClick={() => {
          setMenuOpen(false);
          setServicesOpen(false);
        }}
        className="block py-2 dark:hover:text-coreBlue"
      >
        SaaS Development
      </Link>

      <Link
        href="/services/ecommerce"
        onClick={() => {
          setMenuOpen(false);
          setServicesOpen(false);
        }}
        className="block py-2 dark:hover:text-coreBlue"
      >
        E-commerce
      </Link>

      <Link
        href="/services/software"
        onClick={() => {
          setMenuOpen(false);
          setServicesOpen(false);
        }}
        className="block py-2 dark:hover:text-coreBlue"
      >
        Software & API
      </Link>
    </div>

    <Link className="dark:hover:text-coreBlue" onClick={() => setMenuOpen(false)} href="/work">
      Work
    </Link>
    <Link className="dark:hover:text-coreBlue" onClick={() => setMenuOpen(false)} href="/about">
      About
    </Link>
    <Link className="dark:hover:text-coreBlue" onClick={() => setMenuOpen(false)} href="/contact">
      Contact
    </Link>

    <div className="pt-2">
      <DarkToggle />
    </div>
  </nav>
</div>

    </header>
  );
}
