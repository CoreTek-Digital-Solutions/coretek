// components/Team.js
"use client";

import Image from "next/image";

export default function Team(){
  return (
    <section id="team" className="mt-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold dark:text-white">Our Team</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
          A small, team of engineers, designers, and project manager.
        </p>
      </div>

      {/* grid: 1 column by default, 3 columns at md and above */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="p-6 text-center bg-white dark:bg-[#0d1a32] rounded-lg shadow flex flex-col items-center">
          <Image
            src="/humphrey.jpg"
            alt="Humphrey Gevero"
            width={96}
            height={96}
            className="rounded-full object-cover"
          />
          <div className="mt-4 font-semibold dark:text-white">Humphrey Gevero</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Founder & CEO<br/>Head of Project Management</div>
        </div>

        {/* Card 2 */}
        <div className="p-6 text-center bg-white dark:bg-[#0d1a32] rounded-lg shadow flex flex-col items-center">
          <Image
            src="/junrey.jpg"
            alt="Junrey Rivera"
            width={66}
            height={66}
            className="rounded-full object-cover"
          />
          <div className="mt-4 font-semibold dark:text-white">Junrey Rivera</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Co-Founder & CTO<br/> Head of Software Engineering</div>
        </div>

        {/* Card 3 */}
        <div className="p-6 text-center bg-white dark:bg-[#0d1a32] rounded-lg shadow flex flex-col items-center">
          <Image
            src="/kristian.jpg"
            alt="Kristian Bailo"
            width={96}
            height={96}
            className="rounded-full object-cover"
          />
          <div className="mt-4 font-semibold dark:text-white">Kristian Bailo</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">COO<br/>Head of Operations</div>
        </div>
      </div>
    </section>
  );
}
