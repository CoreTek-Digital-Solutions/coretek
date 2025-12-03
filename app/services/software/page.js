// app/services/software/page.js
import Link from "next/link";

export default function SoftwarePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold">Software & API</h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">APIs, integrations and automation for internal systems and partners.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <article className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transform transition hover:-translate-y-1">
          <h3 className="font-semibold">Public & private APIs</h3>
          <p className="text-gray-600 mt-2">Design, versioning and developer experience for reliable integrations.</p>
        </article>

        <article className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transform transition hover:-translate-y-1">
          <h3 className="font-semibold">Automation & tools</h3>
          <p className="text-gray-600 mt-2">Internal dashboards, job automation and observability.</p>
        </article>

        <article className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transform transition hover:-translate-y-1">
          <h3 className="font-semibold">CI/CD & infra</h3>
          <p className="text-gray-600 mt-2">Infrastructure as code, deployments and monitoring pipelines.</p>
        </article>
      </section>

      <div className="text-center">
        <Link href="/contact" className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-teal-400 text-white shadow hover:opacity-95 transition">
          Discuss architecture
        </Link>
      </div>
    </main>
  );
}
