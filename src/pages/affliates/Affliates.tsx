import { useState } from 'react'
import WebDevelopmentModal from "../../components/modals/WebDevelopmentModal";
import WebsiteNeedsModal from "../../components/modals/WebsiteNeedsModal";
import BusinessTypeModal from "../../components/modals/BusinessTypeModal";
import IndustryModal from "../../components/modals/IndustryModal";
import TimelineModal from "../../components/modals/TimelineModal";

const Affliates = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null); // No FAQ open by default
  const [showWebDevModal, setShowWebDevModal] = useState(false);
  const [showWebsiteNeedsModal, setShowWebsiteNeedsModal] = useState(false);
  const [showBusinessTypeModal, setShowBusinessTypeModal] = useState(false);
  const [showIndustryModal, setShowIndustryModal] = useState(false);
  const [showTimelineModal, setShowTimelineModal] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleShowWebsiteNeeds = () => {
    setShowWebDevModal(false);
    setShowWebsiteNeedsModal(true);
  };

  const handleWebsiteNeedsContinue = (needs: string[]) => {
    console.log('Website needs:', needs);
    setShowWebsiteNeedsModal(false);
    setShowBusinessTypeModal(true);
  };

  const handleWebsiteNeedsBack = () => {
    setShowWebsiteNeedsModal(false);
    setShowWebDevModal(true);
  };

  const handleBusinessTypeContinue = (businessType: string) => {
    console.log('Business type:', businessType);
    setShowBusinessTypeModal(false);
    setShowIndustryModal(true);
  };

  const handleBusinessTypeBack = () => {
    setShowBusinessTypeModal(false);
    setShowWebsiteNeedsModal(true);
  };

  const handleIndustryContinue = (industry: string) => {
    console.log('Industry:', industry);
    setShowIndustryModal(false);
    setShowTimelineModal(true);
  };

  const handleIndustryBack = () => {
    setShowIndustryModal(false);
    setShowBusinessTypeModal(true);
  };

  const handleTimelineContinue = (timeline: string) => {
    console.log('Timeline:', timeline);
    setShowTimelineModal(false);
    // Here you can handle the final step (Contact Information modal)
  };

  const handleTimelineBack = () => {
    setShowTimelineModal(false);
    setShowIndustryModal(true);
  };

  return (
    <>
      <div>
      {/* Hero Section */}
      <div className="h-[599px] bg-white flex items-center justify-center px-4">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 h-[599px]">
          {/* Left Side Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
              Discover skilled professionals for any <span className="text-blue-600">task offers</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-md">
              Discover skilled professionals for any task, compare offers, and get your project completed with ease
            </p>
            <button 
              onClick={() => setShowWebDevModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base font-medium transition"
            >
              Find a Professional
            </button>
          </div>

          {/* Right Side - Visual Graphic with Overlays */}
          <div className="relative w-full max-w-xl mx-auto">
            {/* Main Profile Image */}
            <div className="relative z-10 flex justify-center">
              <img 
                src="/assets/360_F_322533850_Lz5JL2K0nVqL48gjCiRLSa2ssxpdfyer-removebg-preview 2.png" 
                alt="Professional" 
                className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>

            {/* Overlay Cards */}
            {/* Top Right Card - Top Rate */}
            <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg z-20">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Top Rate</span>
              </div>
              <p className="text-xs text-blue-600 font-semibold mt-1">UI UX DESIGNER</p>
            </div>

            {/* Middle Left Card - Rating */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-3 rounded-lg shadow-lg z-20">
              <div className="text-sm font-medium text-gray-700 mb-1">Rating</div>
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-900">5.0</span>
              </div>
            </div>

            {/* Bottom Left Card - Name */}
            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg z-20">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold text-gray-900">Jhone</span>
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xs text-gray-600 mt-1">Jhone@234</p>
            </div>

            {/* Bottom Right Card - Project */}
            <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg z-20">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-yellow-100 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Project</span>
              </div>
              <p className="text-lg font-bold text-gray-900 mt-1">290</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Step-by-Step Guide */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">Step-by-Step Guide</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Sit proin eros ac bibendum amet vulputate
            </p>
          </div>

          {/* Steps Grid */}
          <div className="space-y-8">
            {/* Top Row - 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-[#FFFFFF] p-8 rounded-2xl border border-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <h3 className="text-2xl font-bold text-black mb-6">Showcase Your Skills</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start text-base">
                    <span className="text-black mr-3 font-bold">•</span>
                    Sign up and set up your profile
                  </li>
                  <li className="flex items-start text-base">
                    <span className="text-black mr-3 font-bold">•</span>
                    Add experience, skills, and portfolio samples
                  </li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="bg-[#FFFFFF] p-8 rounded-2xl border border-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <h3 className="text-2xl font-bold text-black mb-6">Check Offers & Packages</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start text-base">
                    <span className="text-black mr-3 font-bold">•</span>
                    Choose a service category (e.g., Design, Development, Marketing, etc.)
                  </li>
                  <li className="flex items-start text-base">
                    <span className="text-black mr-3 font-bold">•</span>
                    Set pricing, delivery time, and package details
                  </li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="bg-[#FFFFFF] p-8 rounded-2xl border border-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <h3 className="text-2xl font-bold text-black mb-6">Get Discovered & Receive Orders</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start text-base">
                    <span className="text-black mr-3 font-bold">•</span>
                    Your service will be visible to thousands of buyers
                  </li>
                  <li className="flex items-start text-base">
                    <span className="text-black mr-3 font-bold">•</span>
                    Receive job requests and direct orders
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Row - 3 Cards (with empty bottom-right) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 4 */}
              <div className="bg-[#FFFFFF] p-8 rounded-2xl border border-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <h3 className="text-2xl font-bold text-black mb-6">Work with Clients Seamlessly</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start text-base">
                    <span className="text-black mr-3 font-bold">•</span>
                    Communicate with clients via chat
                  </li>
                  <li className="flex items-start text-base">
                    <span className="text-black mr-3 font-bold">•</span>
                    Submit work securely through the platform
                  </li>
                </ul>
              </div>

              {/* Step 5 */}
              <div className="bg-[#FFFFFF] p-8 rounded-2xl border border-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <h3 className="text-2xl font-bold text-black mb-6">Earn & Withdraw Easily</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start text-base">
                    <span className="text-black mr-3 font-bold">•</span>
                    Receive payments after order completion
                  </li>
                  <li className="flex items-start text-base">
                    <span className="text-black mr-3 font-bold">•</span>
                    Withdraw earnings via secure payment methods
                  </li>
                </ul>
              </div>

              {/* Empty space for bottom-right position */}
              <div className="hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section - Why Choose Us */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">Why Choose Us</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Providing tools and educational content helps professionals improve their services
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Feature 1 - No Upfront Fees */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer text-center">
              <div className="mb-6">
                <img src="/assets/Vector (2).png" alt="No Upfront Fees" className="w-[29px] h-[29px] mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">No Upfront Fees</h3>
              <p className="text-gray-600 text-sm">Start for free, pay only when you earn</p>
            </div>

            {/* Feature 2 - Global Client Base */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer text-center">
              <div className="mb-6">
                <img src="/assets/Vector (3).png" alt="Global Client Base" className="w-[29px] h-[29px] mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Global Client Base</h3>
              <p className="text-gray-600 text-sm">Get access to thousands of potential customers</p>
            </div>

            {/* Feature 3 - Secure Payments */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer text-center">
              <div className="mb-6">
                <img src="/assets/Vector (4).png" alt="Secure Payments" className="w-[29px] h-[29px] mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Secure Payments</h3>
              <p className="text-gray-600 text-sm">Guaranteed payouts after successful order completion</p>
            </div>

            {/* Feature 4 - Growth Opportunities */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer text-center">
              <div className="mb-6">
                <img src="/assets/Vector (5).png" alt="Growth Opportunities" className="w-[29px] h-[29px] mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Growth Opportunities</h3>
              <p className="text-gray-600 text-sm">Earn more with experience and top ratings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fifth Section - FAQ */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Sit proin eros ac bibendum amet vulputate
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
                  <h3 className="text-lg font-bold text-black">How long until we deliver your first blog post?</h3>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-200 ${openFAQ === 0 ? 'text-green-500 rotate-45' : 'text-black'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                {openFAQ === 0 && (
                  <div className="mt-4 text-gray-600">
                    <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                  </div>
                )}
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFAQ(1)}
                >
                  <h3 className="text-lg font-bold text-black">How long until we deliver your first blog post?</h3>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-200 ${openFAQ === 1 ? 'text-green-500 rotate-45' : 'text-black'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                {openFAQ === 1 && (
                  <div className="mt-4 text-gray-600">
                    <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                  </div>
                )}
              </div>
              {/* FAQ Item 2 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFAQ(1)}
                >
                  <h3 className="text-lg font-bold text-black">How long until we deliver your first blog post?</h3>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-200 ${openFAQ === 1 ? 'text-green-500 rotate-45' : 'text-black'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                {openFAQ === 1 && (
                  <div className="mt-4 text-gray-600">
                    <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* FAQ Item 3 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFAQ(2)}
                >
                  <h3 className="text-lg font-bold text-black">How long until we deliver your first blog post?</h3>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-200 ${openFAQ === 2 ? 'text-green-500 rotate-45' : 'text-black'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                {openFAQ === 2 && (
                  <div className="mt-4 text-gray-600">
                    <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                  </div>
                )}
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFAQ(3)}
                >
                  <h3 className="text-lg font-bold text-black">How long until we deliver your first blog post?</h3>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-200 ${openFAQ === 3 ? 'text-green-500 rotate-45' : 'text-black'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                {openFAQ === 3 && (
                  <div className="mt-4 text-gray-600">
                    <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                  </div>
                )}
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFAQ(4)}
                >
                  <h3 className="text-lg font-bold text-black">How long until we deliver your first blog post?</h3>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-200 ${openFAQ === 4 ? 'text-green-500 rotate-45' : 'text-black'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                {openFAQ === 4 && (
                  <div className="mt-4 text-gray-600">
                    <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
         {/* Seventh Section - Call to Action */}
         <div className="bg-gradient-to-r from-[#3FF3FC] to-[#256CF9] py-20 px-[500px] rounded-tl-[181px] rounded-br-[181px]">
         <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-5xl font-bold text-black mb-6">Ready to Get Started</h2>
           <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
             Sign up now and turn your skills into a steady income
           </p>
           <button 
             onClick={() => setShowWebDevModal(true)}
             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200"
           >
             Find a Professional
           </button>
         </div>
       </div>
      </div>

      {/* Web Development Modal */}
      <WebDevelopmentModal
        isOpen={showWebDevModal}
        onClose={() => setShowWebDevModal(false)}
        onShowWebsiteNeeds={handleShowWebsiteNeeds}
      />

      {/* Website Needs Modal */}
      <WebsiteNeedsModal
        isOpen={showWebsiteNeedsModal}
        onClose={() => setShowWebsiteNeedsModal(false)}
        onContinue={handleWebsiteNeedsContinue}
        onBack={handleWebsiteNeedsBack}
      />

      {/* Business Type Modal */}
      <BusinessTypeModal
        isOpen={showBusinessTypeModal}
        onClose={() => setShowBusinessTypeModal(false)}
        onContinue={handleBusinessTypeContinue}
        onBack={handleBusinessTypeBack}
      />

      {/* Industry Modal */}
      <IndustryModal
        isOpen={showIndustryModal}
        onClose={() => setShowIndustryModal(false)}
        onContinue={handleIndustryContinue}
        onBack={handleIndustryBack}
      />

      {/* Timeline Modal */}
      <TimelineModal
        isOpen={showTimelineModal}
        onClose={() => setShowTimelineModal(false)}
        onContinue={handleTimelineContinue}
        onBack={handleTimelineBack}
      />
    </>
  )
}

export default Affliates