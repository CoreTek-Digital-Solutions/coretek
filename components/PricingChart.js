// components/PricingChart.js
"use client";

import { useEffect, useState } from "react";

/*
 Simple animated bar chart comparing tiers across 3 dimensions:
 - Speed (time-to-market)
 - Robustness (ops / security)
 - Cost (relative)
*/
export default function PricingChart() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const data = [
    { key: "Speed", starter: 90, growth: 60, enterprise: 40 },
    { key: "Robustness", starter: 30, growth: 70, enterprise: 95 },
    { key: "Cost", starter: 20, growth: 60, enterprise: 90 },
  ];

  const colors = {
    starter: "#60A5FA",
    growth: "#3B82F6",
    enterprise: "#06B6D4",
  };

  return (
    <div className="w-full">
      <svg viewBox="0 0 600 200" className="w-full h-44">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor={colors.growth} stopOpacity="0.95" />
            <stop offset="1" stopColor={colors.enterprise} stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {data.map((d, i) => {
          const y = 20 + i * 56;
          const barHeight = 12;
          const spacing = 18;
          const wS = (d.starter / 100) * 240;
          const wG = (d.growth / 100) * 240;
          const wE = (d.enterprise / 100) * 240;

          return (
            <g key={d.key} transform={`translate(0, ${y})`} >
              <text x="8" y="-2" className="text-xs fill-gray-600" fontSize="12">{d.key}</text>

              {/* Starter */}
              <rect x="100" y="0" rx="6" ry="6" width={mounted ? wS : 0} height={barHeight} fill={colors.starter}
                style={{ transition: "width 700ms cubic-bezier(.2,.9,.2,1)" }} />
              {/* Growth */}
              <rect x="100" y={barHeight + spacing*0} rx="6" ry="6" width={mounted ? wG : 0} height={barHeight} fill="url(#g1)"
                style={{ transition: "width 800ms 100ms cubic-bezier(.2,.9,.2,1)" }} />
              {/* Enterprise */}
              <rect x="100" y={(barHeight + spacing)*1} rx="6" ry="6" width={mounted ? wE : 0} height={barHeight} fill={colors.enterprise}
                style={{ transition: "width 900ms 200ms cubic-bezier(.2,.9,.2,1)" }} />

              {/* labels */}
              <text x={100 + wS + 8} y="10" fontSize="11" fill="#0f172a">{d.starter ? `${d.starter}%` : ""}</text>
            </g>
          );
        })}
      </svg>

      <div className="mt-3 text-sm text-gray-600">
        <strong className="text-gray-800">Note:</strong> Chart is a quick visual guide — not exact metrics. Use it to compare tradeoffs.
      </div>
    </div>
  );
}
