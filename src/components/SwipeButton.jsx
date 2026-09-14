"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function SwipeButton() {
  const router = useRouter();
  const trackRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);

  const updateProgress = (clientX) => {
    if (!trackRef.current) return;

    const rect = trackRef.current.getBoundingClientRect();

    const handleSize = 52;
    const maxDistance = rect.width - handleSize - 8;

    let distance = clientX - rect.left - 4 - handleSize / 2;

    distance = Math.max(0, Math.min(distance, maxDistance));

    const percentage = (distance / maxDistance) * 100;

    setProgress(percentage);
  };

  const handlePointerDown = (e) => {
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updateProgress(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;
    updateProgress(e.clientX);
  };

  const handlePointerUp = () => {
    setDragging(false);

    if (progress >= 85) {
      setProgress(100);

      setTimeout(() => {
        router.push("/induction");
      }, 250);
    } else {
      setProgress(0);
    }
  };

  const handlePosition =
    progress === 0
      ? 4
      : `calc(${progress}% - ${progress * 0.52}px)`;

  return (
    <div
      ref={trackRef}
      className="
        relative
        h-14
        w-full
        max-w-[360px]
        overflow-hidden
        rounded-full
        border
        border-white/15
        bg-white/[0.08]
        backdrop-blur-md
        sm:h-16
        sm:max-w-[400px]
      "
    >
      {/* Progress glow */}
      <div
        className="
          absolute
          inset-y-1
          left-1
          rounded-full
          bg-purple-500/20
          transition-[width]
          duration-100
        "
        style={{
          width: `calc(${progress}% + 52px)`,
        }}
      />

      {/* Text */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          flex
          items-center
          justify-center
          pl-8
          text-[10px]
          font-medium
          uppercase
          tracking-[0.25em]
          text-white/70
          sm:text-xs
        "
      >
        {progress >= 85 ? "Entering..." : "Let's go....."}
      </div>

      {/* Swipe handle */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          left: handlePosition,
        }}
        className="
          absolute
          top-1/2
          flex
          h-12
          w-12
          -translate-y-1/2
          cursor-grab
          touch-none
          select-none
          items-center
          justify-center
          rounded-full
          bg-white
          text-black
          shadow-[0_0_25px_rgba(168,85,247,0.35)]
          transition-[left,transform,box-shadow]
          duration-200
          active:cursor-grabbing
          active:scale-95
          sm:h-14
          sm:w-14
        "
      >
        {/* <span
          className={`text-lg transition-transform duration-300 ${
            progress > 10 ? "translate-x-1" : ""
          }`}
        >
          →
        </span> */}

        <span
  className={`text-xl font-semibold transition-transform duration-300 ${
    progress > 10 ? "translate-x-1" : ""
  }`}
>
  ⟶
</span>
      </div>
    </div>
  );
}