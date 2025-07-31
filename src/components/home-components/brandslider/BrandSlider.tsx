
import { useState } from "react";


const logos = [
  {
    name: "Figma",
    src: "/placeholder.svg?height=40&width=120&text=Figma",
    alt: "Figma logo",
  },
  {
    name: "Adobe",
    src: "/placeholder.svg?height=40&width=120&text=Adobe",
    alt: "Adobe logo",
  },
  {
    name: "Sketch",
    src: "/placeholder.svg?height=40&width=120&text=Sketch",
    alt: "Sketch logo",
  },
  {
    name: "Webflow",
    src: "/placeholder.svg?height=40&width=120&text=Webflow",
    alt: "Webflow logo",
  },
  {
    name: "Framer",
    src: "/placeholder.svg?height=40&width=120&text=Framer",
    alt: "Framer logo",
  },
  {
    name: "InVision",
    src: "/placeholder.svg?height=40&width=120&text=InVision",
    alt: "InVision logo",
  },
  {
    name: "Notion",
    src: "/placeholder.svg?height=40&width=120&text=Notion",
    alt: "Notion logo",
  },
  {
    name: "Canva",
    src: "/placeholder.svg?height=40&width=120&text=Canva",
    alt: "Canva logo",
  },
];

const BrandSlider = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="w-full bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-500 text-sm font-medium">
            Trusted by leading companies worldwide
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling container */}
        <div
          className={`flex space-x-16 ${isPaused ? "" : "animate-scroll"}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}>
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <img
                src=""
                alt={logo.alt}
                width={120}
                height={40}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <img
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={120}
                height={40}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}

          {/* Third set for extra smoothness */}
          {logos.map((logo, index) => (
            <div
              key={`third-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <img
                src={logo.src || "/placeholder.svg"}
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
