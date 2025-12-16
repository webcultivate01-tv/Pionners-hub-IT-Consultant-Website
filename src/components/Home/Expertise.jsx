// Expertise.jsx
import React from "react";

const services = [
  { icon: "🧹", label: "Data Cleaning" },
  { icon: "📊", label: "Data Analytics" },
  { icon: "📈", label: "Business Intelligence" },
  { icon: "🤝", label: "IT & Data Consulting" },
];

const Expertise = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left image */}
        <div className="w-full md:w-1/2">
          <img
            src="/serviceslider1.webp"
            alt="Pioneers Hub IT Consultant"
            className="rounded-2xl w-full h-full object-cover shadow-lg"
          />
        </div>

        {/* Right content */}
        <div className="w-full md:w-1/2">
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-600 mb-3">
            OUR EXPERTISE
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Powering Businesses with <br /> Clean & Actionable Data
          </h2>

          <p className="text-slate-600 mb-8 max-w-xl">
            Pioneers Hub IT Consultant helps organizations unlock the true value
            of their data through reliable analytics, clean datasets, and
            strategic IT consulting.
          </p>

          {/* Services (same design as before) */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            {services.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="text-blue-600 text-xl">{item.icon}</span>
                <span className="text-slate-800 text-sm font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-md hover:bg-blue-700 transition">
            View Our Services →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
