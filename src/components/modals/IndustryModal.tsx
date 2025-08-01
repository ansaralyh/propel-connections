import React, { useState } from 'react';

interface IndustryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: (industry: string) => void;
  onBack: () => void;
}

const IndustryModal: React.FC<IndustryModalProps> = ({
  isOpen,
  onClose,
  onContinue,
  onBack
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [otherIndustry, setOtherIndustry] = useState<string>('');

  const industries = [
    'Business services',
    'Creative industries',
    'Entertainment & events',
    'Financial services',
    'Health & fitness',
    'Other'
  ];

  const handleContinue = () => {
    const finalIndustry =
      selectedIndustry === 'Other' && otherIndustry.trim()
        ? otherIndustry.trim()
        : selectedIndustry;

    onContinue(finalIndustry);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-auto relative shadow-xl">
        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-t-lg">
          <div className="w-3/5 h-full bg-[#256CF9] rounded-t-lg"></div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors z-10"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Main Content */}
        <div className="p-8">
          {/* Question */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-gray-900">
              What industry do you operate in?
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-4 mb-8">
            {industries.map((industry) => (
              <label key={industry} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="industry"
                  value={industry}
                  checked={selectedIndustry === industry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{industry}</span>
              </label>
            ))}

            {/* Show textarea if "Other" is selected */}
            {selectedIndustry === 'Other' && (
              <textarea
                value={otherIndustry}
                onChange={(e) => setOtherIndustry(e.target.value)}
                placeholder="Please specify your industry..."
                className="mt-2 w-full p-3 border border-gray-300 rounded-md text-sm resize-none focus:ring-blue-500 focus:border-blue-500"
                rows={3}
              />
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={onBack}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              onClick={handleContinue}
              disabled={
                !selectedIndustry || (selectedIndustry === 'Other' && otherIndustry.trim() === '')
              }
              className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                selectedIndustry && (selectedIndustry !== 'Other' || otherIndustry.trim())
                  ? 'bg-[#256CF9] text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryModal;
