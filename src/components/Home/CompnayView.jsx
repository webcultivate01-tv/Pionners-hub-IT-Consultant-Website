import { Check } from "lucide-react";

const CompanyOverview = () => {
  return (
    <section className="py-10 sm:py-16 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            About Pioneershub
          </h2>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Empowering businesses through IT consulting, data analytics, and
            professional coaching.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Driving Growth with Technology & Data
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              Pioneershub delivers reliable data cleaning, analytics solutions,
              and IT consulting that help businesses make confident decisions.
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              We also provide hands-on coaching for individuals to build
              real-world technology skills.
            </p>

            {/* Features */}
            <div className="space-y-3">
              {[
                "Data Cleaning & Analytics",
                "IT Consulting Services",
                "Professional Tech Coaching",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=60"
              alt="Pioneershub Team"
              loading="lazy"
              decoding="async"
              className="h-64 sm:h-80 w-full object-cover"
            />

            {/* Stats */}
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 p-4 backdrop-blur dark:bg-gray-900/90">
              <div className="grid grid-cols-3 text-center gap-2">
                {[
                  { value: "6+", label: "Years" },
                  { value: "50+", label: "Projects" },
                  { value: "25+", label: "Clients" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
