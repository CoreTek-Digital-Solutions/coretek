"use client"; 

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y24l8a6",   
        "template_mecbmls",  
        formRef.current,
        "rNoJy2c7P1uUERmjk"    
      )
      .then(() => {
        alert("Message sent successfully ✅");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send message ❌");
      });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8 dark:bg-gray-900">
      <h3 className="text-xl font-semibold dark:text-white">Let's talk about your project</h3>
      <p className="text-sm text-gray-600 mt-2 dark:text-gray-300">
        Tell us a bit about your needs and we'll reply within 1 business day.
      </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          name="name"
          className="p-3 border rounded bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
          placeholder="Full name"
          required
        />
        <input
          name="email"
          type="email"
          className="p-3 border rounded bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
          placeholder="Company email"
          required
        />
        <input
          name="company"
          className="p-3 border rounded md:col-span-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
          placeholder="Company / project name"
        />
        <textarea
          name="message"
          rows="4"
          className="p-3 border rounded md:col-span-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
          placeholder="Brief project description"
        />

        <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-300 break-words">
                Or email us at{" "}
            <a
              href="mailto:coretekdigitalsolutions@gmail.com"
              className="text-coreBlue break-words"
            >
              coretekdigitalsolutions@gmail.com
            </a>
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-5 py-3 rounded bg-gradient-to-r from-coreBlue to-digitalTeal text-white"
        >
              Send message
        </button>
        </div>

      </form>
    </div>
  );
}
