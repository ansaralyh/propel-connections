import { ChevronDown, Facebook, Instagram, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <div className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo and Country Selector */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <Link to="/">
                  <img src="/assets/logo.png" alt="" />
                </Link>
              </div>

              {/* Country Selector */}
              <div className="relative inline-block">
                <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors duration-200">
                  <div className="w-5 h-4 bg-red-500 relative overflow-hidden rounded-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-white to-red-500"></div>
                    <div className="absolute left-0 top-0 w-2 h-full bg-blue-600"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-2 bg-white opacity-80"></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">USA</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* For Customers */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">For Customers</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      Find a Professional
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      How it works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      Mobile App
                    </a>
                  </li>
                </ul>
              </div>

              {/* For Professionals */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">For Professionals</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      How it works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      Join as a Professional
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      Help center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      Mobile App
                    </a>
                  </li>
                </ul>
              </div>

              {/* About */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      About Bark
                    </a>
                  </li>
                  <li>
                    <Link to="/careers" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="/affliates" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      Affiliates
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      Blog
                    </a>
                  </li>
                  <li>
                    <Link to="/press" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      Press
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media and Contact Section */}
      <div className="bg-[#256CF9] px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Contact Section */}
          <div className="flex items-center space-x-3">
            <span className="text-white text-sm">Need a help ?</span>
            <button className="bg-transparent text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 border border-white">
              Contact us
            </button>
          </div>
        </div>
      </div>

      {/* Copyright and Legal Links */}
      <div className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-1 text-sm text-gray-600">
            <span>© 2025 Proprl Global Limited.</span>
            <div className="flex items-center space-x-1">
              <a href="#" className="hover:text-gray-900 transition-colors duration-200 underline">
                Terms & Conditions
              </a>
              <span>/</span>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200 underline">
                Cookie policy
              </a>
              <span>/</span>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200 underline">
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
