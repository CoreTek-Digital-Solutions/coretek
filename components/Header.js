// components/Header.js
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DarkToggle from "./DarkToggle";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Server / first render placeholder (keeps same outer <header> tag)
  if (!mounted) {
    return (
      <header className="bg-white dark:bg-[#071226] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="CoreTek home">
            <div className="w-16 h-16 bg-gray-100 dark:bg-[#071829] rounded" />
            <div className="ml-3">
              <div className="text-lg font-semibold text-gray-800 dark:text-white">
                CoreTek
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Digital Solutions
              </div>
            </div>
          </Link>

          <nav className="flex items-center space-x-6 text-sm" aria-hidden>
            <span className="w-8 h-4 inline-block" />
            <span className="w-8 h-4 inline-block" />
            <span className="w-8 h-4 inline-block" />
          </nav>
        </div>
      </header>
    );
  }

  // Real header after hydration
  return (
    <header className="bg-white dark:bg-[#071226] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="CoreTek home">
          <img src="/logo.png" alt="CoreTek logo" className="w-16 h-16 object-contain" />
          <div className="ml-3">
            <div className="text-lg font-semibold text-gray-800 dark:text-white">
              CoreTek
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Digital Solutions
            </div>
          </div>
        </Link>

        {/* Nav */}
        <nav className="flex items-center space-x-6 text-sm" aria-label="Primary">
          {/* Services dropdown (kept simple here) */}
          <div className="relative group">
            <button
              type="button"
              className="dark:text-white hover:text-coreBlue dark:hover:text-coreBlue transition-colors"
            >
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
                <Link
                  href="/services/saas"
                  className="block px-3 py-2 rounded hover:bg-gray-50 dark:hover:bg-[#071829] text-gray-700 dark:text-gray-200"
                >
                  SaaS Development
                </Link>
                <Link
                  href="/services/ecommerce"
                  className="block px-3 py-2 rounded hover:bg-gray-50 dark:hover:bg-[#071829] text-gray-700 dark:text-gray-200"
                >
                  E-commerce
                </Link>
                <Link
                  href="/services/software"
                  className="block px-3 py-2 rounded hover:bg-gray-50 dark:hover:bg-[#071829] text-gray-700 dark:text-gray-200"
                >
                  Software & API
                </Link>
              </div>
            </div>
          </div>

          <Link href="/work" className="dark:text-white hover:text-coreBlue dark:hover:text-coreBlue">
            Work
          </Link>
          <Link href="/about" className="dark:text-white hover:text-coreBlue dark:hover:text-coreBlue">
            About
          </Link>
          <Link href="/contact" className="dark:text-white hover:text-coreBlue dark:hover:text-coreBlue">
            Contact
          </Link>
                    {/* Dark mode toggle */}
          <DarkToggle />
        </nav>
      </div>
    </header>
  );
}
