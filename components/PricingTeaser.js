// components/PricingTeaser.js
export default function PricingTeaser() {
  return (
    <div className="p-6 rounded-lg bg-gradient-to-br from-white/80 to-white/60 dark:from-transparent dark:to-transparent border border-gray-100 dark:border-gray-800 shadow-sm">
      <h4 className="text-lg font-semibold dark:text-white">Pricing starting plans</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Starter SaaS MVP — fixed-fee packages for early-stage teams.</p>

      <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
        <li>• MVP Sprint — 60 days</li>
        <li>• E-commerce starter — integrations & payments</li>
        <li>• API & integrations — from $Xk</li>
      </ul>

      <div className="mt-4">
        <a href="/start" className="inline-flex items-center px-3 py-2 bg-white dark:bg-blue-600 text-blue-600 dark:text-white rounded-md text-sm border border-gray-200 dark:border-transparent">
          View Pricing
        </a>
      </div>
    </div>
  );
}
