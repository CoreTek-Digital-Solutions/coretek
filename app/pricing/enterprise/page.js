// app/pricing/enterprise/page.js
import Link from "next/link";

export default function EnterprisePage() {
  return (
    <main className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Enterprise</h1>
          <p className="mt-2 text-gray-600">
            Dedicated teams and SLAs for large systems and regulated environments.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 space-y-4">
            <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Engagement model</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Dedicated engineering & delivery team</li>
                <li>Formal SLAs, support windows and escalation</li>
                <li>Enterprise integrations & on-prem options</li>
              </ul>
            </div>

            <div className="rounded-xl p-6">
              <h3 className="font-semibold mb-2">Process</h3>
              {/* replace raw -> with an escaped arrow or entity to avoid JSX parse issues */}
              <p className="text-gray-700">
                Discovery → Architecture → Delivery → Handover &amp; support.
              </p>
            </div>
          </div>

          <aside className="rounded-xl bg-white p-6 shadow-sm border">
            <div className="text-sm text-gray-500">Pricing</div>
            <div className="mt-2 text-2xl font-extrabold">Custom</div>
            <p className="mt-3 text-gray-600">
              Large scale systems, integrations, SLAs — priced per engagement.
            </p>

            <div className="mt-6">
              <Link href="/pricing" className="inline-block text-sm text-blue-600 hover:underline mr-4">
                Back
              </Link>
              <Link
                href="#contact"
                className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-teal-400 text-white"
              >
                Contact sales
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
