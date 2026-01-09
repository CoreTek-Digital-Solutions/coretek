"use client";


import { useEffect } from "react";

export default function Testimonials(){
  useEffect(()=> {
    const el = document.querySelector("#testimonials");
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => e.target.setAttribute("data-visible", e.isIntersecting));
    }, { threshold: 0.2 });
    if (el) io.observe(el);
    return ()=> io.disconnect();
  }, []);

  return (
    <section id="testimonials" data-visible="false" className="mt-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold dark:text-white">Client Testimonials</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto dark:text-gray-400">What our clients say about working with CoreTek.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow dark:bg-[#071226] dark:border-gray-800">
          <p className="text-gray-700 dark:text-white">“CoreTek delivered our SaaS MVP in record time — the product shipped with security and performance built in.”</p>
          <div className="mt-4 text-sm font-semibold dark:text-gray-400">— Product Lead, LogisticsCo</div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow dark:bg-[#071226] dark:border-gray-800">
          <p className="text-gray-700 dark:text-white">“The e-commerce migration improved conversion and speed across our stores.”</p>
          <div className="mt-4 text-sm font-semibold dark:text-gray-400">— Head of Ecomm, RetailCo</div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow dark:bg-[#071226] dark:border-gray-800">
          <p className="text-gray-700 dark:text-white">“They built internal workflows and automation that saved us 30% of operational time.”</p>
          <div className="mt-4 text-sm font-semibold dark:text-gray-400">— Ops Manager, ServiceCo</div>
        </div>
      </div>
    </section>
  );
}

