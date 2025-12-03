export default function Careers(){
  return (
    <section id="careers" className="mt-20 mb-20">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">Careers</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Join us — we hire engineers, product managers and designers who love shipping quality software.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-semibold">Senior Backend Engineer</h3>
          <p className="text-sm text-gray-600 mt-2">Remote / Full-time — Experience with Node/Django/Golang.</p>
          <a className="mt-4 inline-block text-coreBlue" href="#apply">Apply →</a>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-semibold">Product Designer</h3>
          <p className="text-sm text-gray-600 mt-2">Remote / Full-time — UX & UI experience for SaaS products.</p>
          <a className="mt-4 inline-block text-coreBlue" href="#apply">Apply →</a>
        </div>
      </div>
    </section>
  )
}
