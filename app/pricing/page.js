// app/pricing/page.js
import PricingCard from "../../components/PricingCard";

export default function PricingPage() {
  return (
    <main className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Flexible pricing depending on scope — from MVPs to enterprise engagements.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          <PricingCard
            title="Starter"
            price="Starts at ₱10k"
            subtitle="Good for students, small MVPs and prototypes."
            features={["4–6 week delivery", "Basic monitoring", "Standard SLAs"]}
            href="/pricing/starter"
          />

          <PricingCard
            title="Growth"
            price="Starts at ₱120k"
            subtitle="For production-ready SaaS and e-commerce platforms."
            features={["8–12 week delivery", "Security & performance", "Monthly maintenance"]}
            highlighted
            href="/pricing/growth"
          />

          <PricingCard
            title="Enterprise"
            price="Custom"
            subtitle="Large scale systems, integrations, and SLAs."
            features={["Dedicated teams", "SLAs & support", "On-prem or hybrid"]}
            href="/pricing/enterprise"
          />
        </div>
      </div>
    </main>
  );
}
