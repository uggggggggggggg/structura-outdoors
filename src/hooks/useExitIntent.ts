"use client";

import { useEffect, useState, useRef } from "react";

const STORAGE_KEY = "structura_popup_shown";
const DELAY_MS = 3000;

export function useExitIntent() {
  const [showPopup, setShowPopup] = useState(false);
  const fired = useRef(false);

  const dismiss = () => setShowPopup(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const trigger = () => {
      if (fired.current) return;
      fired.current = true;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setShowPopup(true);
      cleanup();
    };

    const handleExit = (e: MouseEvent) => {
      if (e.clientY <= 50 && e.movementY < 0) trigger();
      if (e.relatedTarget === null && e.clientY <= 5) trigger();
    };

    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight;
      if (scrollPercent >= 0.5) trigger();
    };

    const cleanup = () => {
      document.removeEventListener("mouseleave", handleExit);
      document.removeEventListener("mousemove", handleExit);
      window.removeEventListener("scroll", handleScroll);
    };

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleExit);
      document.addEventListener("mousemove", handleExit);
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, DELAY_MS);

    return () => {
      clearTimeout(timer);
      cleanup();
    };
  }, []);

  return { showPopup, dismiss };
}
