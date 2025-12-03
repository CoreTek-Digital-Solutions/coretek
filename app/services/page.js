// app/services/page.js
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    { key: "saas", title: "SaaS Development", href: "/services/saas", subtitle: "Multi-tenant platforms, billing, analytics." },
    { key: "ecommerce", title: "E-commerce", href: "/services/ecommerce", subtitle: "Headless stores, payments, performance." },
    { key: "software", title: "Software & API", href: "/services/software", subtitle: "APIs, integrations, automation." },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Services</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
          From ideation to production — select a service to learn more.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <Link
            key={s.key}
            href={s.href}
            className="group block bg-white dark:bg-[#071226] border border-gray-100 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{s.title}</h2>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{s.subtitle}</p>
            <div className="mt-4 text-sm text-coreBlue group-hover:underline">Learn more →</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
