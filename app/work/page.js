// app/work/page.js
import React from "react";
import * as CTS from "../../components/CoreTekSections"; // import everything for inspection

export default function WorkPage() {
  const { Portfolio, FAQ } = CTS;

  // Diagnostic: render a clear message instead of causing Next's runtime error
  if (!Portfolio || !FAQ) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-2xl font-semibold mb-4">Work</h1>
        <div className="prose">
          <p style={{ color: "crimson" }}>
            One or more required components are <strong>undefined</strong>.
          </p>
          <ul>
            <li>Portfolio: {Portfolio ? "OK" : "❌ undefined"}</li>
            <li>FAQ: {FAQ ? "OK" : "❌ undefined"}</li>
          </ul>
          <p>
            Check <code>components/CoreTekSections</code> for named exports:
            it must export <code>export const Portfolio = …</code> or <code>export function Portfolio()</code>
            (or export them at the bottom). If they are default exports, import them differently.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <Portfolio />
      <FAQ />
    </main>
  );
}
