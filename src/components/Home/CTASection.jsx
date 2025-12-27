import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Transform Your Data Into Business Growth
          </h2>

          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert IT consulting, data cleaning, analytics, and hands-on
            coaching to help you make smarter decisions and scale with
            confidence.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="
    inline-flex items-center justify-center
    px-4 py-2 text-sm
    sm:px-6 sm:py-2.5 sm:text-base
    md:px-10 md:py-4 md:text-lg
    rounded-lg sm:rounded-xl
    font-semibold text-white
    bg-gradient-to-r from-red-400 via-red-500 to-red-800
    hover:shadow-2xl hover:-translate-y-1
    transition-all duration-300
  "
            >
              Get a Free Consultation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
