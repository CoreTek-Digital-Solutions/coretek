// components/Hero.js  (server component)
import dynamic from "next/dynamic";

// load client-only hero to avoid hydration mismatches
const HeroClient = dynamic(() => import("./HeroClient"), { ssr: false });

export default function Hero() {
  return (
    // slightly reduced vertical padding to avoid a large gap below hero
    <section className="relative bg-gray-50 py-12 dark:bg-[#0D1E40]">
      <div className="max-w-7xl mx-auto px-6 dark:bg-[#0D1E40]">
        <HeroClient />
      </div>
    </section>
  );
}
