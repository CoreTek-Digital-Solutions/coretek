import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("../../components/ContactForm"), { ssr: false });

export default function ContactPage() {
  return (
    <main className="px-6 py-20 max-w-3xl mx-auto">

      {/* HERO */}
      <div className="text-center fade-in mb-12">
        <h1 className="text-4xl font-extrabold mb-3">Contact Us</h1>
      </div>

      {/* FORM CARD */}
      <div className="fade-in bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <ContactForm />
      </div>
    </main>
  );
}
