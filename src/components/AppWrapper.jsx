"use client";

// components/AppWrapper.js

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import MouseIndicator from "./MouseIndicator";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function AppWrapper({ children }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-in-out",
      duration: 1000,
    });
  }, []);

  return (
    <>
      <SpeedInsights />
      <MouseIndicator />
      <div>{children}</div>
    </>
  );
}
