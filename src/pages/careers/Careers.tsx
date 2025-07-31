

import React, { useState } from 'react'
import CategoriesJoin from './careerscomponents/CategoriesJoin'
import FirstComponent from './careerscomponents/FirstComponent'
import HowItWorks from './careerscomponents/HowItWorks'
import SuccessStories from './careerscomponents/SuccessStories'
import WhyJoinUs from './careerscomponents/WhyJoinUs'

const Careers = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null); // No FAQ open by default

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  return (
    <div>
      <FirstComponent />
      <WhyJoinUs />
      <HowItWorks />
      <SuccessStories />
      <CategoriesJoin />
      
     
      
      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-[#3FF3FC] to-[#256CF9] py-20 px-[132px] rounded-tl-[181px] rounded-br-[181px]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-black mb-6">
            Ready to Start Earning
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Sign up now and turn your skills into a steady income
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200">
            Start Selling Now
          </button>
        </div>
      </div>

       {/* FAQ Section */}
       <div className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Sit proin eros ac
              bibendum amet vulputate
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFAQ(0)}
                >
                  <h3 className="text-lg font-bold text-black">
                    How long until we deliver your first blog post?
                  </h3>
                  <svg
                    className={`w-6 h-6 transition-transform duration-200 ${
                      openFAQ === 0
                        ? "text-green-500 rotate-45"
                        : "text-black"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                {openFAQ === 0 && (
                  <div className="mt-4 text-gray-600">
                    <p>
                      Really boy law county she unable her sister. Feet you
                      off its like like six. Among sex are leave law built
                      now. In built table in an rapid blush. Merits behind on
                      afraid or warmly.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFAQ(1)}
                >
                  <h3 className="text-lg font-bold text-black">
                    How long until we deliver your first blog post?
                  </h3>
                  <svg
                    className={`w-6 h-6 transition-transform duration-200 ${
                      openFAQ === 1
                        ? "text-green-500 rotate-45"
                        : "text-black"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                {openFAQ === 1 && (
                  <div className="mt-4 text-gray-600">
                    <p>
                      Really boy law county she unable her sister. Feet you
                      off its like like six. Among sex are leave law built
                      now. In built table in an rapid blush. Merits behind on
                      afraid or warmly.
                    </p>
                  </div>
                )}
              </div>
              {/* FAQ Item 3 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFAQ(2)}
                >
                  <h3 className="text-lg font-bold text-black">
                    How long until we deliver your first blog post?
                  </h3>
                  <svg
                    className={`w-6 h-6 transition-transform duration-200 ${
                      openFAQ === 2
                        ? "text-green-500 rotate-45"
                        : "text-black"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                {openFAQ === 2 && (
                  <div className="mt-4 text-gray-600">
                    <p>
                      Really boy law county she unable her sister. Feet you
                      off its like like six. Among sex are leave law built
                      now. In built table in an rapid blush. Merits behind on
                      afraid or warmly.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* FAQ Item 4 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFAQ(3)}
                >
                  <h3 className="text-lg font-bold text-black">
                    How long until we deliver your first blog post?
                  </h3>
                  <svg
                    className={`w-6 h-6 transition-transform duration-200 ${
                      openFAQ === 3
                        ? "text-green-500 rotate-45"
                        : "text-black"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                {openFAQ === 3 && (
                  <div className="mt-4 text-gray-600">
                    <p>
                      Really boy law county she unable her sister. Feet you
                      off its like like six. Among sex are leave law built
                      now. In built table in an rapid blush. Merits behind on
                      afraid or warmly.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFAQ(4)}
                >
                  <h3 className="text-lg font-bold text-black">
                    How long until we deliver your first blog post?
                  </h3>
                  <svg
                    className={`w-6 h-6 transition-transform duration-200 ${
                      openFAQ === 4
                        ? "text-green-500 rotate-45"
                        : "text-black"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                {openFAQ === 4 && (
                  <div className="mt-4 text-gray-600">
                    <p>
                      Really boy law county she unable her sister. Feet you
                      off its like like six. Among sex are leave law built
                      now. In built table in an rapid blush. Merits behind on
                      afraid or warmly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers