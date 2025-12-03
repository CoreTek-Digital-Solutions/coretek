// app/pricing/growth/page.js
import Link from "next/link";

export default function GrowthPage() {
  return (
    <main className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Growth</h1>
          <p className="mt-2 text-gray-600">Production-ready SaaS: solid architecture, security and performance.</p>
        </header>

        <section className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 space-y-4">
            <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Scope</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Production-grade architecture & CI/CD</li>
                <li>Performance & security tuning</li>
                <li>Integrations: payments, analytics, auth</li>
                <li>Ongoing maintenance & monitoring</li>
              </ul>
            </div>

            <div className="rounded-xl p-6">
              <h3 className="font-semibold mb-2">Typical timeline</h3>
              <p className="text-gray-700">8–12 weeks depending on scope and integrations.</p>
            </div>
          </div>

          <aside className="rounded-xl bg-white p-6 shadow-sm border">
            <div className="text-sm text-gray-500">Pricing</div>
            <div className="mt-2 text-2xl font-extrabold">Starts at ₱120k</div>
            <p className="mt-3 text-gray-600">For SaaS and e-commerce apps ready for scale.</p>

            <div className="mt-6">
              <Link href="/pricing" className="inline-block text-sm text-blue-600 hover:underline mr-4">Back</Link>
              <Link href="#contact" className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-teal-400 text-white">Get a quote</Link>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
