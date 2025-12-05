// components/CoreTekSections.jsx
import React from "react";

/* FAQ component */
export function FAQ({ faqs = null }) {
  const defaultFaqs = [
    {
      q: "How do we start a project with CoreTek?",
      a: "Send us a message through the contact form or email. We'll schedule a discovery chat, scope the project, then provide a proposal and timeline.",
    },
    {
      q: "What technologies do you specialize in?",
      a: "We build modern web apps with Next.js, React, Node.js, serverless functions, and cloud infrastructure. We also integrate third-party APIs, payment gateways, and analytics.",
    },
    {
      q: "Do you offer maintenance after launch?",
      a: "Yes — we offer flexible support and maintenance packages including updates, monitoring, and feature add-ons.",
    },
  ];

  const list = faqs || defaultFaqs;

  return (
    <section id="faq" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {list.map((item, idx) => (
            <details
              key={idx}
              className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800 border-gray-100 dark:border-gray-700"
            >
              <summary className="cursor-pointer font-medium text-gray-800 dark:text-gray-100">{item.q}</summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Portfolio component */
export function Portfolio({ projects = null }) {
  const sample = [
    {
      title: "CU — Wellness Services Reservation System",
      description:
        "A unified reservation and management system designed for the university’s wellness services—featuring seamless bookings, automated workflows, and real-time reporting.",
      tags: ["Javascript", "Postgres", "PHP"],
      link: "/work/wsrs",
      image: "/projects/CU-WSRS/ss5.jpg",
    },
    {
      title: "CU — Alcohol Level Monitoring System",
      description:
        "A reliable alcohol monitoring solution with live scanning, audit-ready records, and streamlined incident tracking.",
      tags: ["Laravel", "Node.js", "Real-time scanning", "Arduino Integration"],
      link: "/work/alms",
      image: "/projects/CU-WSRS/lms.jpg",
    },
    {
      title: "eCommerce — TheMarketPlace",
      description:
        "Custom eCommerce solution featuring API-driven product management, rate-limited endpoints, and developer-friendly documentation.",
      tags: ["Node.js", "OpenAPI", "Serverless", "Javascript"],
      link: "/work/apiconnect",
      image: "/projects/CU-WSRS/ss6.jpg",
    },
  ];

  const list = projects || sample;

  return (
    <section id="portfolio" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Portfolio</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Selected projects — shipped products and prototypes that demonstrate our capabilities.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {list.map((p, i) => (
            <article
              key={i}
              className="flex flex-col h-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm"
            >
              <a href={p.link} className="block">
                <div className="h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  {p.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.image} alt={p.title} className="object-cover w-full h-40" />
                  ) : (
                    <div className="text-gray-500">Screenshot</div>
                  )}
                </div>
              </a>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 flex-grow">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags &&
                    p.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
                      >
                        {t}
                      </span>
                    ))}
                </div>

                <div className="mt-auto pt-4">
                  <a href={p.link} className="text-sm font-medium text-coreBlue hover:underline">
                    View case study →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* optional composed default export (not required) */
export default function CoreTekSections({ projects, faqs }) {
  return (
    <div>
      <Portfolio projects={projects} />
      <FAQ faqs={faqs} />
    </div>
  );
}
