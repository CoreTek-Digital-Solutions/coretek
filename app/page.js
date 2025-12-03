// app/page.js  (server component — do NOT add "use client" here)
<script src="http://localhost:8097"></script>
import Hero from "../components/Hero";
import HeroCTAs from "../components/HeroCTAs"; // client wrapper (must be a "use client" file)
import FeaturedCard from "../components/FeaturedCard";
import Services from "../components/Services";
import PricingTeaser from "../components/PricingTeaser";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Pricing from "../components/Pricing";


export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Server-rendered hero */}
      <Hero />

      {/* Client-only CTA area (modal + buttons) */}
      {/*<HeroCTAs />*/}

      <div className="mt-12">
        {/*<FeaturedCard />*/}
      </div>

      <Services />
      <Pricing />
      <Testimonials />
      <Team />
    </div>
  );
}
