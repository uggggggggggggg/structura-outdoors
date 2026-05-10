"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, GripVertical } from "lucide-react";

interface BeforeAfterProps {
  beforeUrl: string;
  afterUrl: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfter({
  beforeUrl,
  afterUrl,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      handleMove(e.clientX);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-lg select-none"
    >
      <img
        src={afterUrl}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeUrl}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            width: `${100 / (sliderPosition / 100)}%`,
          }}
          draggable={false}
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-dark/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {beforeLabel}
        </span>
      </div>

      <span className="absolute right-3 top-3 rounded-full bg-brand-cta/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
        {afterLabel}
      </span>

      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg border border-brand-border">
          <GripVertical size={16} className="text-brand-dark" />
        </div>
      </div>
    </div>
  );
}
