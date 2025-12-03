// components/CTAButton.js
"use client";

import Link from "next/link";

export default function CTAButton({ children, onClick, href }) {
  const base =
    "inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium";
  const primary = `${base} bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow`;

  // If href exists → use Link (Next.js 13 supports this directly)
  if (href) {
    return (
      <Link href={href} className={primary}>
        {children}
      </Link>
    );
  }

  // Otherwise render a normal button
  return (
    <button onClick={onClick} className={primary}>
      {children}
    </button>
  );
}
