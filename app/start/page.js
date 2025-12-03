// app/start/page.js
export default function StartPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-4">Start a Project with CoreTek</h1>
      <p className="text-gray-600 mb-6">Choose a service, tell us about your priorities, and we’ll schedule a free scoping call.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg bg-white dark:bg-[#0d1a32]">
          <h3 className="font-semibold">Request a Consultation</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Fill the form to schedule a call with our team.</p>
        </div>

        <div className="p-6 rounded-lg bg-white dark:bg-[#0d1a32]">
          <h3 className="font-semibold">Fixed-price MVP</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Typical scope and pricing examples for startups.</p>
        </div>
      </div>
    </div>
  );
}
