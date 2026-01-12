
"use client";
import { FC } from "react";

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When is the best time for exterior painting in Boston?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ideal time for exterior painting in the Boston area is during the late spring, summer, and early fall (typically May through October). We need consistent temperatures above 50°F and low humidity for the paint to cure properly. We avoid painting during the winter months due to cold, wet weather.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible to do interior remodeling during the winter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Winter is a great time for interior projects like kitchen and bathroom remodeling or interior painting. Since all the work is done indoors, we are not affected by the weather. It can also be a slower season for contractors, which can sometimes mean more scheduling flexibility.",
      },
    },
    {
      "@type": "Question",
      name: "How can I prepare my home for a Boston winter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can help with a variety of winterization services, including ensuring proper insulation, checking for and sealing air leaks around windows and doors, and inspecting your roof and gutters to help prevent ice dams, which are a common issue in New England.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle all permits required for a remodeling project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we handle all necessary permits for the projects we manage. We are familiar with the permitting process in Boston and surrounding municipalities, ensuring your project is fully compliant with local building codes.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical kitchen or bathroom remodel take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The timeline can vary significantly based on the scope of the project. A simple bathroom update might take 1-2 weeks, while a full kitchen gut renovation could take 6-8 weeks or more. We provide a detailed project timeline with our quote so you know exactly what to expect.",
      },
    },
  ],
};

const Faq: FC = () => {
  return (
    <div className="container px-4 py-5" id="faq">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2 className="pb-2 border-bottom text-center">Frequently Asked Questions</h2>
          <div className="accordion accordion-flush" id="faq-accordion">
              {faqData.mainEntity.map((item, index) => (
              <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`flush-heading-${index}`}>
                  <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse-${index}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse-${index}`}
                  >
                      {item.name}
                  </button>
                  </h2>
                  <div
                  id={`flush-collapse-${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`flush-heading-${index}`}
                  data-bs-parent="#faq-accordion"
                  >
                  <div className="accordion-body text-start">{item.acceptedAnswer.text}</div>
                  </div>
              </div>
              ))}
          </div>
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
