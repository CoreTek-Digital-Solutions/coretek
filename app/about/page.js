// app/about/page.js
import React from "react";
import dynamic from "next/dynamic";
import Team from "/components/Team"; // ✅ Correct Team import

// Dynamic import for TechStackFlow (client-only)
const TechStackFlow = dynamic(() => import("/components/TechStackFlow"), { ssr: false });

/* ---------------------------
   Why CoreTek
--------------------------- */
export function WhyCoretek({ title = "Why CoreTek Solutions?" }) {
  return (
    <section id="why-coretek" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h2>

        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            At CoreTek, we believe technology should simplify — not complicate. Founded by engineers
            and product builders, we help ambitious teams move faster by delivering pragmatic,
            well-engineered digital products.
          </p>

          <p>
            Our approach balances speed and quality: we design with user-first thinking, iterate
            quickly, and ship maintainable systems. We don't chase buzzwords — we pick tools that fit
            the problem and scale with your business.
          </p>

          <h3 className="text-xl font-semibold mt-4">What makes us unique</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product-first engineering:</strong> we care about outcomes, not just code.</li>
            <li><strong>Small-team impact:</strong> cross-functional teams that move fast.</li>
            <li><strong>DevOps + Security:</strong> CI/CD, monitoring, and clean production hygiene.</li>
            <li><strong>Transparent pricing:</strong> no surprises, clear deliverables.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------
   Mission & Vision
--------------------------- */
export function MissionVision({ mission = null, vision = null }) {
  const m =
    mission ||
    "To empower businesses with thoughtful software that solves real problems and unlocks growth.";
  const v =
    vision ||
    "Become the trusted technology partner for growth-stage companies across the region, known for speed, reliability, and strong product sense.";

  return (
    <section id="mission-vision" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 grid gap-8 md:grid-cols-2 items-start">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Mission</h3>
          <p className="mt-3 text-gray-700 dark:text-gray-300">{m}</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Vision</h3>
          <p className="mt-3 text-gray-700 dark:text-gray-300">{v}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------
   ABOUT PAGE (FINAL)
--------------------------- */

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      {/* HERO */}
      <div className="fade-in text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-3 dark:text-white">About CoreTek</h1>
        <p className="text-gray-600 max-w-2xl mx-auto dark:text-white">
          We build secure, scalable software for fast-moving teams.
        </p>
      </div>

      {/* TWO COLUMN SECTION */}
      <div className="fade-in grid md:grid-cols-2 gap-14">
        <div>
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Who we are</h2>
          <p className="text-gray-700 leading-relaxed dark:text-white">
            CoreTek Digital Solutions is a small team of engineers focused on SaaS, e-commerce and
            API-driven systems. We help companies ship faster without compromising reliability.
          </p>

          <h3 className="font-semibold mt-8 mb-3 dark:text-white">Our Values</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-white">
            <li>User-first product design</li>
            <li>Secure by design</li>
            <li>Observability & reliability</li>
            <li>Iterative delivery</li>
          </ul>
        </div>

        <div className="fade-in bg-white p-6 rounded-xl shadow-sm border border-gray-100 dark:bg-gray-900 dark:border-gray-900">
          <h3 className="font-semibold mb-2 dark:text-white">What we do best</h3>
          <ul className="space-y-2 text-gray-700 dark:text-white">
            <li>• SaaS architecture & development</li>
            <li>• E-commerce performance & headless builds</li>
            <li>• API design, automation & internal tools</li>
            <li>• Technical audits & modernization</li>
          </ul>
        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="mt-20">
        <Team />
      </div>

      {/* OPTIONAL: TechStack Animation */}
      <div className="mt-20">
        <TechStackFlow />
      </div>

      {/* WHY + MISSION */}
      <div className="mt-20">
        <WhyCoretek />
        <MissionVision />
      </div>
    </main>
  );
}
