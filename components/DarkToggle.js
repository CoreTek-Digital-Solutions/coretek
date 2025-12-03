// components/DarkToggle.js
"use client";

import { useEffect, useState } from "react";

export default function DarkToggle() {
  // mounted guards client-only rendering so server and client match
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // run on client only
  useEffect(() => {
    setMounted(true);

    try {
      // load saved preference
      const saved = localStorage.getItem("coretek-theme");
      if (saved === "dark") {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      } else if (saved === "light") {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
      } else {
        // no saved preference — prefer OS setting
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDark(prefersDark);
        if (prefersDark) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
      }
    } catch (e) {
      // ignore storage errors
      console.warn("Theme read error", e);
    }

    // sync if OS preference changes while the page is open
    const mq = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (ev) => {
      // only change if user hasn't explicitly chosen a theme
      const saved = localStorage.getItem("coretek-theme");
      if (!saved) {
        const nowDark = ev.matches;
        setIsDark(nowDark);
        if (nowDark) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
      }
    };
    if (mq && mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq && mq.addListener) mq.addListener(onChange);

    return () => {
      if (mq && mq.removeEventListener) mq.removeEventListener("change", onChange);
      else if (mq && mq.removeListener) mq.removeListener(onChange);
    };
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    try {
      localStorage.setItem("coretek-theme", next ? "dark" : "light");
    } catch (e) {}
    if (next) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }

  // Prevent server/client mismatch by not rendering differing text on the server.
  // While not mounted we return a neutral button that matches the server's initial output.
  if (!mounted) {
    return (
      <button
        aria-pressed="false"
        aria-label="Toggle color theme"
        className="p-2 rounded-full focus:outline-none"
        // no onClick until mounted
      >
        {/* use the server-rendered symbol (choose one for consistency)*/}
        <span aria-hidden="true">🌞</span>
      </button>
    );
  }

  // when mounted, render interactive toggle
  return (
    <button
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 rounded-full focus:outline-none hover:opacity-90 transition-colors"
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {/* show different icons client-side only (safe because we are mounted) */}
      <span aria-hidden="true">{isDark ? "🌙" : "🌞"}</span>
    </button>
  );
}