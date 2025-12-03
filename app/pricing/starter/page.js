// app/pricing/starter/page.js
import Link from "next/link";
export default function StarterPage(){
  return (
    <main className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-extrabold mb-4">Starter</h1>
        <p className="text-gray-600 mb-6">Starts at ₱10k — perfect for students who need guidance with capstone projects, OJT system requirements, or small business owners looking for simple, reliable digital solutions. This package provides essential support to help you bring your ideas to life without overwhelming costs.</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>4–6 week delivery</li>
          <li>Basic monitoring</li>
          <li>Standard SLAs</li>
        </ul>

        <div className="mt-8">
          <Link href="/pricing" className="text-blue-600 hover:underline">← Back to pricing</Link>
        </div>
      </div>
    </main>
  );
}
