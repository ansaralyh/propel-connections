import React, { useState } from "react";

interface Logo {
  name: string;
  src: string;
  alt: string;
}

const logos: Logo[] = [
  { name: "Figma", src: "/assets/Logo1.png", alt: "Figma logo" },
  { name: "Adobe", src: "/assets/Logo2.png", alt: "Adobe logo" },
  { name: "Sketch", src: "/assets/Logo3.png", alt: "Sketch logo" },
  { name: "Webflow", src: "/assets/Logo4.png", alt: "Webflow logo" },
  { name: "Framer", src: "/assets/Logo5.png", alt: "Framer logo" },
  { name: "InVision", src: "/assets/Logo6.png", alt: "InVision logo" },
  { name: "Notion", src: "/assets/Logo7.png", alt: "Notion logo" },
  { name: "Canva", src: "/assets/Logo1.png", alt: "Canva logo" },
];

const BrandSlider: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="w-full bg-#FAFAFA py-12 overflow-hidden">

      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling logos */}
        <div
          className={`flex space-x-16 whitespace-nowrap will-change-transform ${
            isPaused ? "" : "brand-scroll"
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
