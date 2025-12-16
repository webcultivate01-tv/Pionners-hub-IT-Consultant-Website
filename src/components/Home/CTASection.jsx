import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section
      className="relative min-h-[40vh] md:min-h-[60vh] lg:min-h-[70vh]
             bg-center bg-cover bg-fixed flex items-center"
      style={{ backgroundImage: "url('/HomeCTA1.webp')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Transform Your Data Into Business Growth
          </h2>

          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Expert IT consulting, data cleaning, analytics, and hands-on
            coaching to help you make smarter decisions and scale with
            confidence.
          </p>

          <Link to="/contact" className="inline-flex px-10 py-4 rounded-xl text-lg font-semibold text-white
        bg-gradient-to-r from-primary to-primary-dark
        hover:-translate-y-1 transition-all duration-300">Get a Free Consultation</Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
