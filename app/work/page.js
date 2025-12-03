export default function WorkPage() {
  const items = [
    {
      title: "SaaS Platform (Logistics)",
      desc: "Delivered multi-tenant billing and SSO in 12 weeks.",
    },
    {
      title: "Headless E-comm",
      desc: "Migrated to headless and improved mobile conversion.",
    },
    {
      title: "Internal Tools",
      desc: "Dashboard & automation to reduce ops toil by 30%.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      
      {/* HERO */}
      <div className="text-center fade-in">
        <h1 className="text-4xl font-extrabold mb-3">Our Work</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          A few examples of how we helped teams move faster and ship confidently.
        </p>
      </div>

      {/* CASE CARDS */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {items.map((item, i) => (
          <div
            key={i}
            className="fade-in bg-white rounded-xl p-6 shadow-sm border border-gray-100
                       hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16 fade-in">
        <a
          href="/contact"
          className="inline-block px-6 py-3 rounded-md shadow
                     bg-gradient-to-r from-blue-600 to-teal-400 text-white hover:opacity-90 transition"
        >
          Start a project with us
        </a>
      </div>
    </main>
  );
}
