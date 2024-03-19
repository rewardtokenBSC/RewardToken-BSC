// components/MouseIndicator.js
"use client";
import { useState, useEffect } from "react";

export default function MouseIndicator() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 pointer-events-none">
      <div
        className="w-14 h-14 rounded-full bg-yellow-400 text-center font-bold flex justify-center items-center overflow-hidden shadow-md"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        RWD
        {/* <img src="/logo2.jpg" className="w-full h-full" alt="" /> */}
      </div>
    </div>
  );
}
