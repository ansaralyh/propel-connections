import { Search, MapPin } from "lucide-react"
import BrandSlider from "../../components/home-components/brandslider/BrandSlider"
import WhyChooseUs from "../../components/home-components/brandslider/WhyChooseUs"
import PopularServices from "../../components/home-components/brandslider/PopularService"
import DiscoverCategories from "../../components/home-components/brandslider/DiscoverCategories"
import HomeServices from "../../components/home-components/brandslider/HomeServices"
import Events from "../../components/home-components/brandslider/Events"
import HealthServices from "../../components/home-components/brandslider/HealthServices"
import BusinessServices from "../../components/home-components/brandslider/BusinessServices"
import Professional from "../../components/home-components/brandslider/Professional"
import HappyClients from "../../components/home-components/brandslider/HappyClients"
import GetStarted from "../../components/home-components/brandslider/GetStarted"

const Home = () => {
  return (
    <div>
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Find the Best Freelancers for Any Job, <span className="text-blue-600">Online.</span>
                </h1>
                <p className="text-lg text-gray-600">
                  Where to grow your business as a photographer: site or social media?
                </p>
              </div>

              {/* Search Form */}
              <div className="space-y-4">
                <div className="flex gap-0">
                  {/* Service Input */}
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="What service are you looking for"
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-700 bg-white"
                    />
                  </div>

                  {/* Zip Code Input */}
                  <div className="relative w-48">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Zip Code"
                      className="w-full pl-12 pr-4 py-4 border-t border-b border-r border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-700 bg-white"
                    />
                  </div>

                  {/* Search Button */}
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-r-lg font-semibold transition-colors duration-200">
                    Search
                  </button>
                </div>

                {/* Popular Section */}
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-gray-700 font-medium">Popular :</span>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Logo Design,
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Web Design,
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Development
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Space for Illustration */}
            <div className="relative">
              {/* Space reserved for your illustration */}
              <div className="w-full h-96 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                    <img src="/assets/Illustration.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BrandSlider />
      <WhyChooseUs />
      <PopularServices />
      <DiscoverCategories />
      <HomeServices />
      <HealthServices />
      <Events />
      <BusinessServices />
      <Professional />
      <HappyClients />
      <GetStarted />
    </div>
  )
}

export default Home
