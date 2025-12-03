// app/services/saas/page.js
import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
          SaaS Development
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Multi-tenant platforms, subscription billing, analytics and security —
          we build scalable SaaS products designed to grow with your business.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="bg-white dark:bg-[#071029] rounded-xl shadow p-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What we build</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            From MVP to multi-tenant platforms — hosted, instrumented, and
            secured with best practices. Architecture, CI/CD, metrics and
            billing integrations.
          </p>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Multi-tenant architecture</strong> — secure isolation & per-tenant customisation.
            </li>
            <li>
              <strong>Subscription billing</strong> — recurring plans, coupons, invoices.
            </li>
            <li>
              <strong>Telemetry & analytics</strong> — product and usage metrics.
            </li>
            <li>
              <strong>Enterprise readiness</strong> — SSO, RBAC, audits.
            </li>
          </ul>

          <div className="mt-8">
            <Link href="/#contact" className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-coreBlue to-digitalTeal text-white font-medium">
              Get a SaaS Consultation
            </Link>
          </div>
        </div>

        <aside className="bg-white dark:bg-[#071029] rounded-xl shadow p-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Typical engagement</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            8–12 week discovery & MVP sprints followed by iterative delivery.
            We handle discovery, platform design, and a deployable MVP.
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <dt className="font-semibold">Discovery</dt>
              <dd>Requirements, user stories, roadmap</dd>
            </div>
            <div>
              <dt className="font-semibold">Security</dt>
              <dd>OWASP, threat modelling, audits</dd>
            </div>
            <div>
              <dt className="font-semibold">Delivery</dt>
              <dd>CI/CD, infra-as-code, monitoring</dd>
            </div>
            <div>
              <dt className="font-semibold">Support</dt>
              <dd>SLA, runbooks, cloud ops</dd>
            </div>
          </dl>

          <div className="mt-6">
            <Link href="/services/saas" className="inline-block text-sm text-coreBlue hover:underline">
              Learn more about our SaaS practice →
            </Link>
          </div>
        </aside>
      </section>

      <section className="mt-16">
        <h4 className="text-center text-xl font-semibold text-gray-900 dark:text-white mb-6">Client success</h4>
        <div className="grid gap-6 md:grid-cols-3">
          <blockquote className="bg-white dark:bg-[#071029] rounded-lg p-6 text-gray-700 dark:text-gray-300">
            “CoreTek delivered our SaaS MVP — secure, reliable, and shipped fast.”
            <div className="mt-4 text-sm font-semibold">Product Lead, LogisticsCo</div>
          </blockquote>

          <blockquote className="bg-white dark:bg-[#071029] rounded-lg p-6 text-gray-700 dark:text-gray-300">
            “Their subscription billing implementation reduced churn and saved ops time.”
            <div className="mt-4 text-sm font-semibold">Head of Product, FintechCo</div>
          </blockquote>

          <blockquote className="bg-white dark:bg-[#071029] rounded-lg p-6 text-gray-700 dark:text-gray-300">
            “We went from concept to paying customers in 10 weeks.”
            <div className="mt-4 text-sm font-semibold">Founder, SaaS Startup</div>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
