// components/ContactModal.js
"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ContactModal({ open = false, onClose = () => {} }) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  // ensure portal root exists and component only renders client-side
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted || !open) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;

    setError(null);
    setSuccess(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: (form.get("name") || "").toString(),
      email: (form.get("email") || "").toString(),
      summary: (form.get("summary") || "").toString(),
    };

    // within handleSubmit in ContactModal (client component)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      console.log("DEBUG: fetch finished, status:", res.status, res.statusText);

      // read text and attempt parse
      const text = await res.text();
      console.log("DEBUG: response text:", text);

      let json = null;
      try { json = JSON.parse(text); } catch (e) { json = null; }

      if (!res.ok || !(json && json.ok)) {
        const serverErr = json?.error || `HTTP ${res.status} ${res.statusText}`;
        setError(serverErr);
      } else {
        setSuccess("Thanks — we received your request. We'll be in touch within 1 business day.");
        e.currentTarget.reset();
        setTimeout(()=>{ setSuccess(null); onClose(); }, 1400);
      }
    } catch (err) {
      console.error("DEBUG: fetch exception:", err);
      setError("Network error — please try again.");
    }
    finally {
          setLoading(false);
        }
      }

  const modal = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop - full screen blur + dim */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => {
          setError(null);
          setSuccess(null);
          onClose();
        }}
      />

      {/* Modal card */}
      <div
        role="dialog"
        aria-modal="true"
        className="
          relative z-10 w-full max-w-2xl rounded-xl bg-white p-6 shadow-2xl
          transform opacity-0 scale-95 animate-[modalIn_180ms_ease-out_forwards]
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={() => { setError(null); setSuccess(null); onClose(); }}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold mb-2">Start a Project</h3>
        <p className="text-sm text-gray-600 mb-4">
          Tell us a bit about your project and we'll get back to you within 1 business day.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <div className="text-sm mb-1">Name</div>
              <input name="name" className="w-full px-3 py-2 border rounded-md" required />
            </label>

            <label className="block">
              <div className="text-sm mb-1">Email</div>
              <input name="email" type="email" className="w-full px-3 py-2 border rounded-md" required />
            </label>
          </div>

          <label className="block">
            <div className="text-sm mb-1">Short project summary</div>
            <textarea name="summary" rows="4" className="w-full px-3 py-2 border rounded-md" />
          </label>

          <div className="flex items-center gap-4 mt-2">
            <button
              type="submit"
              disabled={loading}
              className={`px-5 py-2 rounded-md text-white ${
                loading ? "bg-gray-400" : "bg-gradient-to-r from-blue-600 to-teal-400 hover:opacity-95"
              }`}
            >
              {loading ? "Sending..." : "Send request"}
            </button>

            <button
              type="button"
              onClick={() => { setSuccess(null); setError(null); onClose(); }}
              className="text-sm text-gray-600"
            >
              Cancel
            </button>

            <div className="ml-auto min-w-[200px]">
              {success && <div className="text-green-600 text-sm">{success}</div>}
              {!success && error && <div className="text-red-600 text-sm">{error}</div>}
            </div>
          </div>
        </form>
      </div>

      {/* small keyframe injected locally */}
      <style jsx>{`
        @keyframes modalIn {
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );

  return createPortal(modal, document.body);
}
