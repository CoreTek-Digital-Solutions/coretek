export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      {/* HERO */}
      <div className="fade-in text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-3">About CoreTek</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We build secure, scalable software for fast-moving teams.
        </p>
      </div>

      {/* TWO COLUMN SECTION */}
      <div className="fade-in grid md:grid-cols-2 gap-14">
        <div>
          <h2 classname="text-xl font-semibold mb-4">Who we are</h2>
          <p className="text-gray-700 leading-relaxed">
            CoreTek Digital Solutions is a small team of engineers focused on SaaS,
            e-commerce and API-driven systems. We help companies ship faster
            without compromising on reliability or security.
          </p>

          <h3 className="font-semibold mt-8 mb-3">Our Values</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>User-first product design</li>
            <li>Secure by design</li>
            <li>Observability & reliability</li>
            <li>Iterative delivery</li>
          </ul>
        </div>

        <div className="fade-in bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold mb-2">What we do best</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• SaaS architecture & development</li>
            <li>• E-commerce performance & headless builds</li>
            <li>• API design, automation & internal tools</li>
            <li>• Technical audits & modernization</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
