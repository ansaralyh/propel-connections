
import { useState } from "react"
import { ChevronDown, User } from "lucide-react"

export default function Navbar() {
  const [isExploreOpen, setIsExploreOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-6 pb-6">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo and Explore */}
          <div className="flex items-center space-x-6">
            {/* Logo Section - Space reserved for image */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8">{/* Space reserved for logo image */}</div>
              ,<img src="/assets/logo.png" alt="" />
            </div>

            {/* Explore Button */}
            <div className="relative">
              <button
                onClick={() => setIsExploreOpen(!isExploreOpen)}
                className="flex items-center space-x-1 px-3 py-1.5 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200 text-sm"
              >
                <span>Explore</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isExploreOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu */}
              {isExploreOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Browse Services
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Categories
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Top Professionals
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      How it Works
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Login and CTA */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200">
              <User className="w-5 h-5" />
              <span>Login</span>
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200">
              Join as a Professional
            </button>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isExploreOpen && <div className="fixed inset-0 z-40" onClick={() => setIsExploreOpen(false)} />}
    </nav>
  )
}
