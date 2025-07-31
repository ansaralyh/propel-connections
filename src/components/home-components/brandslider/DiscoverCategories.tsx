import { Home, Heart, Calendar, Briefcase, Dumbbell, MoreHorizontal } from "lucide-react"

const categories = [
  {
    icon: Home,
    title: "Home &\nGarden",
  },
  {
    icon: Heart,
    title: "Health &\nWellbegin",
  },
  {
    icon: Calendar,
    title: "Weddings &\nEvent",
  },
  {
    icon: Briefcase,
    title: "Business &\nServices",
  },
  {
    icon: Dumbbell,
    title: "Lesson &\nTraining",
  },
  {
    icon: MoreHorizontal,
    title: "Other\nServices",
  },
]

export default function DiscoverCategories() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Centered */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Discover All Categories</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Sit proin eros ac bibendum amet vulputate
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className="text-center cursor-pointer group bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200"
              >
                {/* Icon with rounded rectangular background */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl border border-blue-100 group-hover:bg-blue-100 transition-all duration-200">
                    <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-200" />
                  </div>
                </div>

                {/* Category Title */}
                <div className="space-y-1">
                  <h3 className="text-gray-900 font-medium text-sm leading-tight whitespace-pre-line group-hover:text-blue-600 transition-colors duration-200">
                    {category.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
