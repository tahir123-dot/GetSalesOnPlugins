import React, { useState } from "react";
import {
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

const faqData = [
  {
    question: "Can I Apply For a Refund After 2 Days?",
    answer:
      "Unfortunately, you cannot. We believe two days are enough to install the program and check for any issues.",
  },
  {
    question:
      "Can I Get Refund Without Providing Valid Proof & Don't Let Customer Support Resolve Problem?",
    answer:
      "We will only issue a refund when you provide us with valid proof (screenshot or screen-recorded clip) and our customer support is not able to resolve your issue.",
  },
  {
    question: "Can I Get a Refund For the Wrong Purchase?",
    answer:
      "Yes, but we can also exchange it for you if you did not download the product.",
  },
  {
    question: "Can I Get a Refund Before 2-7 Days?",
    answer:
      "We issue refunds as quickly as possible, but your card company or bank may take up to 15–17 days. This is out of our control.",
  },
  {
    question: "Can I Get a Refund If I Don't Like The Product?",
    answer:
      "Unfortunately, you cannot. Please do your research before purchase using Google or YouTube.",
  },
  {
    question:
      "Can I Get a Refund If My Product Is Not Compatible With My System?",
    answer:
      "Unfortunately, no. You should check system requirements on the product page or confirm compatibility with our 24/7 live chat support before buying.",
  },
  {
    question: "Can I Get a Refund For Duplicate Payment?",
    answer: "Yes, we offer a no-questions-asked refund for duplicate payments.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="bg-white rounded-xl shadow-md p-6  transition hover:shadow-lg">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left"
    >
      <h3 className="text-lg font-medium text-gray-800">{question}</h3>
      {isOpen ? (
        <ChevronUpIcon className="h-5 w-5 text-indigo-600" />
      ) : (
        <ChevronDownIcon className="h-5 w-5 text-gray-400" />
      )}
    </button>
    {isOpen && <p className="mt-4 text-sm text-gray-600">{answer}</p>}
  </div>
);

const Refund = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-24">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <QuestionMarkCircleIcon className="h-14 w-14 text-indigo-600 mx-auto" />
        <h1 className="text-4xl font-bold text-gray-900 mt-4">
          Refund & Return Policy
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          Clear and fair policies to keep your experience smooth. Know your
          rights and how our refund process works.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* LEFT - Refund Info */}
        <div className="bg-white rounded-2xl shadow p-8 ">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Refund Terms & Conditions
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
            <li>Product must not be working as described</li>
            <li>Valid proof (screenshot or recording) is required</li>
            <li>Customer support must have failed to resolve the issue</li>
            <li>You didn’t download the product after purchase</li>
            <li>You must claim the refund within 2 days of purchase</li>
          </ul>
          <p className="text-sm text-gray-500 mt-6">
            💡 Refunds may take 7–14 business days to appear depending on your
            bank or card provider.
          </p>
        </div>

        {/* RIGHT - FAQ Accordion */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-20 text-center text-sm text-gray-500">
        Still have questions? Reach us at{" "}
        <a
          href="mailto:support@extraplugins.com"
          className="text-indigo-600 underline"
        >
          support@extraplugins.com
        </a>{" "}
        or use live chat at the bottom-right.
      </div>
    </div>
  );
};

export default Refund;
