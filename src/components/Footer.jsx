import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-gray-800 dark:text-white pt-12 sm:pt-16 md:pt-20 mt-16 sm:mt-20 md:mt-24 relative border-t border-gray-200 dark:border-slate-700 overflow-hidden">
      {/* Decorative elements */}

      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-10 text-center sm:text-left">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-1 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Pioneers Hub
            </h3>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm font-semibold  tracking-widest text-gray-500 dark:text-gray-400 mb-4">
              IT Consultant & Training Institute
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed text-sm sm:text-base">
              Empowering businesses and professionals through expert IT
              consulting, data analytics, and practical coaching for real-world
              success.
            </p>

            <div className="flex gap-4 justify-center sm:justify-start">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/60 dark:bg-white/10 flex items-center justify-center transition hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg"
              >
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/60 dark:bg-white/10 flex items-center justify-center transition hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg"
              >
                <i className="fab fa-instagram text-sm"></i>
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-white/60 dark:bg-white/10 flex items-center justify-center transition hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg"
              >
                <i className="fab fa-youtube text-sm"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 font-semibold text-base sm:text-lg">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 items-center sm:items-start">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 font-semibold text-base sm:text-lg">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3 items-center sm:items-start">
              <li>
                <span className="footer-link">Data Cleaning & Processing</span>
              </li>
              <li>
                <span className="footer-link">Data Analytics & Insights</span>
              </li>
              <li>
                <span className="footer-link">Excel Automation</span>
              </li>
              <li>
                <span className="footer-link">IT & Analytics Coaching</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 font-semibold text-base sm:text-lg">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-4 items-center sm:items-start">
              <li className="flex gap-3">
                <i className="fas fa-envelope text-primary mt-1"></i>
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  info@pioneershub.in
                </span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-phone text-primary mt-1"></i>
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  +91 9343771276
                </span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-map-marker-alt text-primary mt-1"></i>
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Bhuranpur, (Remote Services Available)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 border-t border-gray-300 dark:border-slate-700 gap-3">
          <p className="text-sm text-gray-500 dark:text-gray-400 md:order-1">
            © {currentYear} Pioneers Hub. All rights reserved.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold md:order-0 text-center">
            Developed by <a href="https://webcultivate.com/">WebCultivate</a>
          </p>

          <div className="flex gap-2 md:order-2">
            <Link
              to="/privacy"
              className="text-sm text-gray-500 hover:text-primary"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              to="/terms"
              className="text-sm text-gray-500 hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
