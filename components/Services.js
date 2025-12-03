// components/Services.js
import ServiceCard from "./ServiceCard";

const SERVICES = [
  {
    key: "saas",
    title: "SaaS Development",
    subtitle: "Multi-tenant platforms, subscription billing, analytics, security.",
    href: "/services/saas",
    // optional: pass an icon JSX
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M3 13h18M3 6h18M3 20h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    key: "ecommerce",
    title: "E-commerce",
    subtitle: "Headless stores, payment integrations, performance optimization.",
    href: "/services/ecommerce",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M3 3h2l.4 2M7 13h10l3-8H6.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="20" r="1" fill="currentColor" />
        <circle cx="18" cy="20" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    key: "software",
    title: "Software & API",
    subtitle: "APIs, integrations, bespoke software, automation.",
    href: "/services/software",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold dark:text-white">Services</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">From ideation to production — we deliver full-stack solutions, cloud infrastructure, and e-commerce platforms.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.key}
              href={s.href}
              title={s.title}
              subtitle={s.subtitle}
              icon={s.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
