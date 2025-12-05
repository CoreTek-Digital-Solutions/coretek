// components/FAQ.jsx
import React from "react";

export default function FAQ() {
  const faqs = [
    { q: "How do users book a session?", a: "Users choose time slots and confirm via the portal; admins can approve or reject." },
    { q: "Can we export reports?", a: "Yes — CSV and PDF export are available per date range." },
    { q: "Does it support multi-tenant auth?", a: "Yes — role-based access is supported for staff and admins." },
  ];

  return (
    <section aria-labelledby="faq-heading" className="mt-12">
      <h2 id="faq-heading" className="text-2xl font-semibold mb-6">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className="bg-white/80 rounded-md p-4 shadow-sm">
            <div className="font-medium">{f.q}</div>
            <div className="text-sm text-slate-600 mt-1">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
