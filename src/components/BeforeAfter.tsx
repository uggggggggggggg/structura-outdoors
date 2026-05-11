"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { GripVertical } from "lucide-react";

interface BeforeAfterProps {
  beforeUrl: string;
  afterUrl: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfter({
  beforeUrl,
  afterUrl,
  beforeLabel = "Before",
  afterLabel = "After",
  beforeAlt = "Before renovation",
  afterAlt = "After renovation",
}: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startPos = useRef(50);
  const velocity = useMotionValue(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);

  const getPosition = useCallback((clientX: number): number => {
    if (!containerRef.current) return 50;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    return Math.max(2, Math.min(98, (x / rect.width) * 100));
  }, []);

  const handleStart = useCallback(
    (clientX: number) => {
      dragging.current = true;
      startX.current = clientX;
      startPos.current = sliderPosition;
      lastX.current = clientX;
      lastTime.current = Date.now();
      velocity.set(0);
    },
    [sliderPosition],
  );

  const handleMove = useCallback(
    (clientX: number) => {
      if (!dragging.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dx = clientX - startX.current;
      const dp = (dx / rect.width) * 100;
      const newPos = Math.max(2, Math.min(98, startPos.current + dp));
      setSliderPosition(newPos);

      const now = Date.now();
      const dt = now - lastTime.current;
      if (dt > 0) {
        const v = (clientX - lastX.current) / dt;
        velocity.set(v);
      }
      lastX.current = clientX;
      lastTime.current = now;
    },
    [startX, startPos],
  );

  const handleEnd = useCallback(() => {
    dragging.current = false;
    const v = velocity.get();
    if (Math.abs(v) > 0.1 && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const targetDp = (v * 300) / rect.width * 100;
      const target = Math.max(2, Math.min(98, sliderPosition + targetDp));
      animate(0, 1, {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        onUpdate: (progress) => {
          setSliderPosition(sliderPosition + (target - sliderPosition) * progress);
        },
      });
    }
  }, [sliderPosition, velocity]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-lg select-none touch-none"
      role="img"
      aria-label={`Before and after comparison: ${afterAlt}`}
      onMouseDown={(e) => handleStart(e.clientX)}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onMouseMove={(e) => { e.preventDefault(); handleMove(e.clientX); }}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onMouseUp={handleEnd}
      onTouchEnd={handleEnd}
      onMouseLeave={handleEnd}
    >
      <img
        src={afterUrl}
        alt={afterAlt}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeUrl}
          alt={beforeAlt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${100 / (sliderPosition / 100)}%` }}
          draggable={false}
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-dark/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {beforeLabel}
        </span>
      </div>

      <span className="absolute right-3 top-3 rounded-full bg-brand-cta/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
        {afterLabel}
      </span>

      <motion.div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
        animate={{ left: `${sliderPosition}%` }}
        transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.3 }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg border border-brand-border">
          <GripVertical size={16} className="text-brand-dark" />
        </div>
      </motion.div>
    </div>
  );
}
