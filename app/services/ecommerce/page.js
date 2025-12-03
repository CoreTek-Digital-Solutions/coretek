// app/services/ecommerce/page.js
import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
          E-commerce & Headless Stores
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Headless storefronts, payment integrations and performance optimization
          focused on conversion and reliability.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="bg-white dark:bg-[#071029] rounded-xl shadow p-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Capabilities</h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li><strong>Headless storefronts</strong> — flexible frontend stacks (React, Next.js).</li>
            <li><strong>Payment & checkout</strong> — PCI-aware integrations, 3DS, merchant options.</li>
            <li><strong>Performance</strong> — CDN caching, smart image delivery, PWA optimizations.</li>
            <li><strong>Platform migrations</strong> — Shopify, BigCommerce, custom stores.</li>
          </ul>

          <div className="mt-8">
            <Link href="/#contact" className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-coreBlue to-digitalTeal text-white font-medium">
              Talk about e-commerce
            </Link>
          </div>
        </div>

        <aside className="bg-white dark:bg-[#071029] rounded-xl shadow p-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Typical projects</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            Migration to headless, performance rework, and checkout optimizations
            to increase conversion and reduce cart abandonment.
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <dt className="font-semibold">Migration</dt>
              <dd>Phased migrations with data sync and testing</dd>
            </div>
            <div>
              <dt className="font-semibold">Conversion</dt>
              <dd>A/B testing, analytics, and UX improvements</dd>
            </div>
            <div>
              <dt className="font-semibold">Payments</dt>
              <dd>Secure payment flows & reconciliation</dd>
            </div>
            <div>
              <dt className="font-semibold">Ops</dt>
              <dd>Monitoring, backup, and scalability</dd>
            </div>
          </dl>

          <div className="mt-6">
            <Link href="/services/ecommerce" className="inline-block text-sm text-coreBlue hover:underline">
              See ecommerce case studies →
            </Link>
          </div>
        </aside>
      </section>

      <section className="mt-16">
        <h4 className="text-center text-xl font-semibold text-gray-900 dark:text-white mb-6">Customer wins</h4>
        <div className="grid gap-6 md:grid-cols-3">
          <figure className="bg-white dark:bg-[#071029] rounded-lg p-6 text-gray-700 dark:text-gray-300">
            “Migration increased conversion and page speed across our catalog.”
            <figcaption className="mt-4 text-sm font-semibold">Head of Ecomm, RetailCo</figcaption>
          </figure>

          <figure className="bg-white dark:bg-[#071029] rounded-lg p-6 text-gray-700 dark:text-gray-300">
            “Cart abandonment dropped after checkout optimizations.”
            <figcaption className="mt-4 text-sm font-semibold">Growth Lead, ShopCo</figcaption>
          </figure>

          <figure className="bg-white dark:bg-[#071029] rounded-lg p-6 text-gray-700 dark:text-gray-300">
            “We launched a headless PWA and now sell more on mobile.”
            <figcaption className="mt-4 text-sm font-semibold">Product, DirectBrand</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
