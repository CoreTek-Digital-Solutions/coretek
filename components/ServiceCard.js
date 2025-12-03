// components/ServiceCard.js
import Link from "next/link";

/*
 Reusable clickable service card. Link wraps the whole card for full click area.
 Props:
 - href (string)  – where the card links to
 - title (string) – card title
 - subtitle (string) – small description
 - icon (JSX) – optional icon node
*/

export default function ServiceCard({ href = "#", title, subtitle, icon = null }) {
  return (
    <Link
      href={href}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-coreBlue rounded-lg"
      aria-label={`Open ${title} service`}
    >
      <div className="relative h-full rounded-lg bg-white dark:bg-[#070129] border border-gray-100 dark:border-gray-800 p-6 transition-transform transform hover:-translate-y-1 hover:shadow-lg group-focus:-translate-y-1">
        
        {/* ICON AREA */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-md bg-gradient-to-r from-coreBlue to-digitalTeal inline-flex items-center justify-center text-white">
              {icon ? (
                icon
              ) : (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>

          {/* TEXT AREA */}
          <div className="min-w-0">
            <h3 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          </div>
        </div>

        {/* RIGHT-SIDE CHEVRON */}
        <div className="absolute top-6 right-6 text-gray-300 group-hover:text-coreBlue transition-colors" aria-hidden="true">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
