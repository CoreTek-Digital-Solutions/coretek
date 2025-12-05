// app/tech/page.jsx
"use client";
import TechStackFlow from "@/components/TechStackFlow";

export default function TechPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Our Tech Stack</h1>
      <TechStackFlow width={980} height={420} />
    </main>
  );
}
