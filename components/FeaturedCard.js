// components/FeaturedCard.js
export default function FeaturedCard({ subdued = false }) {
  // subdued = true => smaller/ghost CTA (used in hero)
  const primaryBtnClass = subdued
    ? "inline-flex items-center px-3 py-2 rounded-md bg-gradient-to-r from-blue-600 to-teal-400 text-white text-sm shadow-sm"
    : "inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-teal-400 text-white shadow-sm";

  return (
    <aside className="bg-white p-6 rounded-xl">
      <h4 className="text-sm font-semibold text-gray-700 mb-2">Featured offering</h4>

      <p className="text-sm text-gray-600 mb-4">
        SaaS MVP in 60 days — hosted, secured, and integrated with payment and analytics.
      </p>

      <ul className="space-y-3 text-sm text-gray-700 mb-6">
        <li className="flex items-start gap-3">
          <span className="mt-1 w-2 h-2 rounded-full bg-blue-600/90" />
          <div>
            <div className="font-semibold">Rapid MVP</div>
            <div className="text-sm text-gray-500">Product design, backend, and frontend in a sprint-based flow.</div>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-1 w-2 h-2 rounded-full bg-blue-600/90" />
          <div>
            <div className="font-semibold">Secure by design</div>
            <div className="text-sm text-gray-500">OWASP-aware architecture and regular audits.</div>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-1 w-2 h-2 rounded-full bg-blue-600/90" />
          <div>
            <div className="font-semibold">Scale-ready</div>
            <div className="text-sm text-gray-500">Microservices-ready APIs, CI/CD and cloud deployment.</div>
          </div>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        {/* smaller CTA (subdued in hero) */}
        <a href="#start" className={primaryBtnClass} aria-label="Start a project">
          Start a Project
        </a>
      </div>
    </aside>
  );
}
