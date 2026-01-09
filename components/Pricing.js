// app/pricing/page.js
import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="py-16 bg-white dark:bg-[#0D1E40]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-2xl font-semibold dark:text-white">Pricing</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto dark:text-gray-400">
            Flexible pricing depending on scope — from MVPs to enterprise engagements.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Starter */}
          <Link
            href="/pricing/starter"
            aria-label="Starter pricing — starts at ₱10k. Click to view details"
            className={`
              block p-6 dark:bg-[#071226] dark:border-gray-800 rounded-lg bg-white border border-gray-100 shadow-sm
              transition-transform transform will-change-transform duration-200 ease-in-out
              hover:-translate-y-1 hover:shadow-xl
              hover:border-blue-400 hover:ring-2 hover:ring-blue-100
              focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200
              cursor-pointer
            `}
          >
            <h3 className="text-sm font-medium text-gray-700 dark:text-white">Starter</h3>
            <div className="text-3xl font-extrabold mt-3 dark:text-white">Starts at ₱10k</div>
            <p className="text-sm text-gray-600 mt-3 dark:text-white">Good for students, small MVPs and prototypes.</p>

            <ul className="mt-4 text-sm text-gray-700 space-y-2 list-inside dark:text-white">
              <li>• 4–6 week delivery</li>
              <li>• Basic monitoring</li>
              <li>• Standard SLAs</li>
            </ul>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-blue-600 font-medium">View details</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Growth (featured) */}
          <Link
            href="/pricing/growth"
            aria-label="Growth pricing — starts at ₱120k. Click to view details"
            className={`
              block p-6 dark:bg-[#071226] dark:border-gray-800 rounded-lg bg-white border-2 border-transparent
              shadow-sm transform transition will-change-transform duration-200 ease-in-out
              hover:-translate-y-1 hover:shadow-xl
              hover:border-blue-400 hover:ring-2 hover:ring-blue-100
              focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200
              cursor-pointer
            `}
          >
            <h3 className="text-sm font-medium text-gray-700 dark:text-white">Growth</h3>
            <div className="text-3xl font-extrabold mt-3 dark:text-white">Starts at ₱120k</div>
            <p className="text-sm text-gray-600 mt-3 dark:text-white">For production-ready SaaS and e-commerce platforms.</p>

            <ul className="mt-4 text-sm text-gray-700 space-y-2 dark:text-white">
              <li>• 8–12 week delivery</li>
              <li>• Security & performance</li>
              <li>• Monthly maintenance</li>
            </ul>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-blue-600 font-medium">View details</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Enterprise */}
          <Link
            href="/pricing/enterprise"
            aria-label="Enterprise pricing — custom engagements. Click to view details"
            className={`
              block p-6 dark:bg-[#071226] dark:border-gray-800 rounded-lg bg-white border border-gray-100 shadow-sm
              transition-transform transform will-change-transform duration-200 ease-in-out
              hover:-translate-y-1 hover:shadow-xl
              hover:border-blue-400 hover:ring-2 hover:ring-blue-100
              focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200
              cursor-pointer
            `}
          >
            <h3 className="text-sm font-medium text-gray-700 dark:text-white">Enterprise</h3>
            <div className="text-3xl font-extrabold mt-3 dark:text-white">Custom</div>
            <p className="text-sm text-gray-600 mt-3 dark:text-white">Large scale systems, integrations, and SLAs.</p>

            <ul className="mt-4 text-sm text-gray-700 space-y-2 dark:text-white">
              <li>• Dedicated teams</li>
              <li>• SLAs & support</li>
              <li>• On-prem or hybrid</li>
            </ul>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-blue-600 font-medium">View details</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
