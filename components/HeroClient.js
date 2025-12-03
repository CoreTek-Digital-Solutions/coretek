// components/HeroClient.js
"use client";

import { useState, useEffect } from "react";
import HeroCTAs from "./HeroCTAs";

export default function HeroClient() {
  // simple visibility state to trigger fade-in
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-start`}>
      {/* Left column (main headline + CTA) */}
      <div
        className={`lg:col-span-2 transition-opacity duration-600 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
        }`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Build modern software &amp; digital experiences
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mb-8">
          CoreTek Digital Solutions builds secure SaaS platforms, scalable e-commerce, and
          enterprise-grade software tailored to your needs. Reliable engineering. Faster
          time-to-market.
        </p>

        {/* CTA group — single primary CTA for the hero (no duplicate below) */}
        <HeroCTAs />
      </div>

      {/* Right column: feature card */}
      <aside
        className={`w-full lg:col-span-1 transition-opacity duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Featured offering</h4>
          <p className="text-sm text-gray-600 mb-4">
            SaaS MVP in 60 days — hosted, secured, and integrated with payments & analytics.
          </p>

          <ul className="space-y-3 text-sm text-gray-700 mb-4">
            <li className="flex gap-3 items-start">
              <span className="mt-1 w-2 h-2 rounded-full bg-blue-500/90" />
              <div>
                <div className="font-semibold">Rapid MVP</div>
                <div className="text-sm text-gray-500">Product design, backend & frontend in a sprint flow.</div>
              </div>
            </li>

            <li className="flex gap-3 items-start">
              <span className="mt-1 w-2 h-2 rounded-full bg-blue-500/90" />
              <div>
                <div className="font-semibold">Secure by design</div>
                <div className="text-sm text-gray-500">OWASP-aware architecture and regular audits.</div>
              </div>
            </li>

            <li className="flex gap-3 items-start">
              <span className="mt-1 w-2 h-2 rounded-full bg-blue-500/90" />
              <div>
                <div className="font-semibold">Scale-ready</div>
                <div className="text-sm text-gray-500">Microservices-ready APIs, CI/CD and cloud deployment.</div>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
