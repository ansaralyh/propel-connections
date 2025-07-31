import {
  Palette,
  PenTool,
  Search,
  Layers,
  Smartphone,
  Monitor,
  Music,
  Server,
  Play,
  Headphones,
  Video,
  Megaphone,
  Calculator,
  Bot,
  Shield,
  Globe,
  User,
  ShoppingCart,
} from "lucide-react"

const categories = [
  // First Row
  { icon: Palette, name: "Logo Design" },
  { icon: PenTool, name: "Content writing" },
  { icon: Search, name: "SEO" },
  { icon: Layers, name: "UI UX Design" },
  { icon: Smartphone, name: "App Development" },
  { icon: Monitor, name: "Website Design" },

  // Second Row
  { icon: Music, name: "Music" },
  { icon: Server, name: "IT" },
  { icon: Play, name: "Animation" },
  { icon: Headphones, name: "Audio" },
  { icon: Video, name: "Video Editing" },
  { icon: Megaphone, name: "Digital Marketing" },

  // Third Row
  { icon: Calculator, name: "Bookkeeping" },
  { icon: Bot, name: "AI & Chatbots" },
  { icon: Shield, name: "Cybersecurity" },
  { icon: Globe, name: "Web3" },
  { icon: User, name: "Software" },
  { icon: ShoppingCart, name: "E-commerce" },
]

export default function CategoriesYouCanJoin() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Centered */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Categories You Can Join</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Sit proin eros ac bibendum amet vulputate
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div key={index} className="p-4 text-center cursor-pointer group transition-all duration-200 hover:scale-105 rounded-2xl border border-gray-300">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl p-1 group-hover:border-blue-300 transition-all duration-200">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                </div>

                {/* Category Name */}
                <div className="space-y-1">
                  <h3 className="text-gray-900 font-medium text-sm leading-tight group-hover:text-blue-600 transition-colors duration-200">
                    {category.name}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            See More
          </button>
        </div>
      </div>
    </section>
  )
}
