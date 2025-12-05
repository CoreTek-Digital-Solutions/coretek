// components/HeaderClient.js  (client-side only)
"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function HeaderClient() {
  const [open, setOpen] = useState(false); // controls services dropdown
  const dropdownRef = useRef(null);

  // small handlers to keep dropdown open while mouse in area
  return (
    <div className="flex items-center space-x-6 text-sm">
      {/* Services (hover/open with mouse and focus with keyboard) */}
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          type="button"
          aria-expanded={open}
          className="hover:text-coreBlue dark:hover:text-coreBlue transition-colors"
          onClick={() => setOpen((s) => !s)}
        >
          Services
        </button>

        {/* Dropdown — keep mounted but toggle visibility for stable server HTML */}
        <div
          ref={dropdownRef}
          className={`absolute right-0 mt-3 w-56 rounded-md border bg-white dark:bg-[#071226] border-gray-100 dark:border-gray-800 shadow-lg transition-opacity duration-150
            ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          role="menu"
        >
          <div className="p-3">
            <Link href="/services/saas" className="block px-3 py-2 rounded hover:bg-gray-50 dark:hover:bg-gray-900">SaaS Development</Link>
            <Link href="/services/ecommerce" className="block px-3 py-2 rounded hover:bg-gray-50 dark:hover:bg-gray-900">E-commerce</Link>
            <Link href="/services/software" className="block px-3 py-2 rounded hover:bg-gray-50 dark:hover:bg-gray-900">Software & API</Link>
          </div>
        </div>
      </div>

      <Link href="/work" className="hover:text-coreBlue">Work</Link>
      <Link href="/about" className="hover:text-coreBlue">About</Link>
      <Link href="/contact" className="hover:text-coreBlue">Contact</Link>
    </div>
  );
}
