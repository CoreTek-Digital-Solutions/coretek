// components/HeroCTAs.js
"use client";

import { useState } from "react";
import Link from "next/link";
import ContactModal from "./ContactModal";
import CTAButton from "./CTAButton";

export default function HeroCTAs() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ContactModal open={open} onClose={() => setOpen(false)} />

      <div className="flex items-center gap-4">
        {/* Primary CTA: opens the modal */}
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center px-4 py-2 rounded-md text-white bg-gradient-to-r from-blue-600 to-teal-400 shadow transition-transform transform hover:-translate-y-0.5"
        >
          Get a Free Consultation
        </button>

        {/* Secondary CTA: anchor to work page */}
        <Link href="/work" className="inline-flex items-center px-4 py-2 rounded-md border text-sm text-gray-700 hover:bg-gray-100">
          See Our Work
        </Link>
      </div>
    </>
  );
}
