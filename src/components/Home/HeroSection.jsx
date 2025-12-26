import { useEffect, useState, useRef } from "react";
const slides = [
  {
    title: "Smart Data Cleaning Solutions",
    description:
      "Accurate, organized, and error-free data cleaning for Excel and business databases",
    buttonText: "Our Services",
    buttonUrl: "/services",
    image: "/HomeHero.webp",
  },
  {
    title: "Professional Data Analytics",
    description:
      "Transform raw data into meaningful insights for better business decisions",
    buttonText: "About Us",
    buttonUrl: "/about",
    image: "/serviceslider2.webp",
  },
  {
    title: "Excel Automation & IT Consulting",
    description:
      "Advanced Excel solutions, reports, dashboards, and IT consulting services",
    buttonText: "Contact Us",
    buttonUrl: "/contact",
    image: "/serviceslider3.webp",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [autoplay]);

  return (
    <section
      className="relative w-screen min-h-screen overflow-hidden"
      onMouseEnter={() => setAutoplay(true)}
      onMouseLeave={() => setAutoplay(true)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out
            ${
              current === index
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-105 z-0"
            }
          `}
        >
          {/* Background Image */}
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover opacity-100"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-950/60"></div>

          {/* Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
            <div
              className={`max-w-2xl text-white transition-all duration-700
                ${
                  current === index
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }
              `}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl mb-8 text-gray-200">
                {slide.description}
              </p>
              <a
                href={slide.buttonUrl}
                className="
    inline-block px-8 py-3 rounded-lg text-lg font-semibold text-white
    bg-gradient-to-r from-red-400 via-red-500 to-red-800
    shadow-lg shadow-red-600/35
    hover:shadow-xl hover:shadow-red-600/45
    hover:-translate-y-0.5
    transition-all duration-300 ease-in-out
  "
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all
              ${current === index ? "bg-white w-6" : "bg-white/50 w-2"}
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      {/* Bottom Extra Curvy Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
        <svg
          className="relative block w-full h-[120px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="
        M0,20
        C200,120 400,120 600,60
        C800,0 1000,0 1200,60
        L1200,120
        L0,120
        Z
      "
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}
