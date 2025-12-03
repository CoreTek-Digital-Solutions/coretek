// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-[#071226] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo (clickable) */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="CoreTek logo" className="w-16 h-16" />
            <div className="ml-3">
              <div className="text-lg font-semibold text-gray-800 dark:text-white">CoreTek</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Digital Solutions</div>
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex items-center space-x-6 text-sm">
          {/* Services with dropdown */}
          <div className="relative group">
            <button
              type="button"
              className="hover:text-coreBlue dark:hover:text-coreBlue transition-colors"
            >
              Services
            </button>

            {/* Dropdown panel (desktop) — no gap between button and menu */}
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

          {/* Other top-level nav links */}
          <Link href="/work" className="hover:text-coreBlue dark:hover:text-coreBlue">Work</Link>
          <Link href="/about" className="hover:text-coreBlue dark:hover:text-coreBlue">About</Link>
          <Link href="/contact" className="hover:text-coreBlue dark:hover:text-coreBlue">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
