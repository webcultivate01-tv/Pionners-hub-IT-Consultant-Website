import React, { useState } from "react";

const PricingFAQ = () => {
  const faqs = [
    {
      question: "Who can benefit from Pioneers Hub services?",
      answer:
        "Our services are ideal for business owners, startups, working professionals, and students who want reliable data cleaning, insightful data analytics, or practical IT and Excel coaching.",
    },
    {
      question: "Do you provide customized IT consulting solutions?",
      answer:
        "Yes. We analyze your business requirements and offer fully customized data cleaning, Excel automation, and analytics solutions tailored to your goals.",
    },
    {
      question: "What tools and technologies do you use?",
      answer:
        "We work with Excel (advanced formulas & automation), Power BI, SQL, and industry-standard analytics tools to deliver accurate and actionable insights.",
    },
    {
      question: "Is your coaching practical or theoretical?",
      answer:
        "Our coaching is 100% practical and project-based. Learners work on real-world datasets to gain hands-on experience that is directly applicable to jobs and business use cases.",
    },
    {
      question: "Do you offer one-on-one coaching or corporate training?",
      answer:
        "Yes. We provide one-on-one coaching, group sessions, and corporate training programs tailored to teams and organizations.",
    },
    {
      question: "How do I get started with a consultation?",
      answer:
        "Simply contact us through our website. We offer an initial discussion to understand your needs and recommend the best solution or coaching plan.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto p-4">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-5xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about our IT consulting & coaching
            services
          </p>
          <div className="mt-6 w-24 h-1 mx-auto bg-gradient-to-r from-gray-300 to-gray-800 dark:from-gray-400 dark:to-gray-200 rounded-full shadow-md"></div>
        </div>

        {/* FAQ Items */}
        <div className="divide-y divide-gray-300 dark:divide-gray-700">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-6 font-medium text-slate-900 dark:text-gray-100 flex items-center hover:text-primary transition"
              >
                <span className="mr-4">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={`w-[14px] h-[14px] ml-auto transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                  fill="currentColor"
                >
                  <path d="M40.421 215.579H471.579C493.868 215.579 512 233.711 512 256s-18.132 40.421-40.421 40.421H40.421C18.132 296.421 0 278.289 0 256s18.132-40.421 40.421-40.421z" />
                  <path d="M215.579 40.421C215.579 18.132 233.711 0 256 0s40.421 18.132 40.421 40.421v431.158C296.421 493.868 278.289 512 256 512s-40.421-18.132-40.421-40.421V40.421z" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-6 text-[15px] text-slate-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
