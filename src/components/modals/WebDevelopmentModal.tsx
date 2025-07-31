import React, { useState } from 'react';

interface WebDevelopmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: (selection: string) => void;
}

const WebDevelopmentModal: React.FC<WebDevelopmentModalProps> = ({
  isOpen,
  onClose,
  onContinue
}) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-auto relative shadow-xl">
        {/* Header Banner */}
        <div className="bg-[#256CF9] text-white p-6 rounded-t-lg relative overflow-hidden">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">WEB DEVELOPMENT</h2>
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <img 
                src="/public/assets/Rectangle 1669.png" 
                alt="Laptop with programming languages" 
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          {/* Question and Instruction */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              What is your web design requirement?
            </h3>
            <p className="text-gray-600 text-sm">
              Once selected, please click 'continue'
            </p>
          </div>

          {/* Option Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Option 1: Create a new website */}
            <div
              className={`border-2 rounded-lg p-6 cursor-pointer transition-all duration-200 ${
                selectedOption === 'new-website'
                  ? 'border-[#256CF9] bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedOption('new-website')}
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img 
                    src="/public/assets/Rectangle 1670.png" 
                    alt="Desktop monitor with web design interface" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <p className="font-medium text-gray-900">Create a new website</p>
              </div>
            </div>

            {/* Option 2: Make changes to current website */}
            <div
              className={`border-2 rounded-lg p-6 cursor-pointer transition-all duration-200 ${
                selectedOption === 'update-website'
                  ? 'border-[#256CF9] bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedOption('update-website')}
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img 
                    src="/public/assets/Rectangle 1670.png" 
                    alt="Hands interacting with tablet/smartphone" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <p className="font-medium text-gray-900">Make changes to my current website</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={onClose}
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <span className="text-sm font-medium">Back</span>
            </button>

            <button
              onClick={() => selectedOption && onContinue(selectedOption)}
              disabled={!selectedOption}
              className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                selectedOption
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

export default WebDevelopmentModal; 