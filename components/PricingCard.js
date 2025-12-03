// components/PricingCard.js
import Link from "next/link";

export default function PricingCard({
  title = "Plan",
  price = "Custom",
  subtitle = "",
  features = [],
  href = "/pricing",
  highlighted = false,
}) {
  return (
    <Link
      href={href}
      className={
        "block p-6 rounded-lg transform transition will-change-transform " +
        (highlighted
          ? "bg-white border-2 border-blue-300 shadow-lg hover:-translate-y-1 focus:ring-2 focus:ring-blue-400"
          : "bg-white border border-gray-100 shadow-sm hover:-translate-y-1 focus:ring-2 focus:ring-blue-400")
      }
      aria-label={`${title} pricing — ${price}. Click to view details`}
    >
      <h3 className="text-sm font-medium text-gray-700">{title}</h3>

      <div className="text-3xl font-extrabold mt-3">{price}</div>

      {subtitle && <p className="text-sm text-gray-600 mt-3">{subtitle}</p>}

      {features?.length > 0 && (
        <ul className="mt-4 text-sm text-gray-700 space-y-2">
          {features.map((f, i) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-blue-600 font-medium">View details</span>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
