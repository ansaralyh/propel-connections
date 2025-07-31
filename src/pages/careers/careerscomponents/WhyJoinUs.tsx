const features = [
  {
    image: "/assets/join (5).png",
    title: "Global Client Base",
    description: "Work with clients from all over the world",
  },
  {
    image: "/assets/join (4).png",
    title: "Secure Payments",
    description: "Get paid safely and on time.",
  },
  {
    image: "/assets/join (3).png",
    title: "Flexible Work Schedule",
    description: "Work from anywhere, anytime.",
  },
  {
    image: "/assets/join (2).png",
    title: "Zero Registration Fees",
    description: "Joining is completely free!",
  },
  {
    image: "/assets/join (1).png",
    title: "Boost Your Skills",
    description: "Gain experience, build a strong portfolio, and grow",
  },
]

export default function WhyJoinUs() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Join Us</h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Sit proin eros ac bibendum amet vulputate
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-12">
          {/* Top Row - 3 Features with Borders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="text-center relative">
                {/* Vertical Border - Only show between items, not after the last one */}
                {index < 2 && (
                  <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gray-300 transform translate-x-6"></div>
                )}

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={`${feature.title} icon`}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 Features Centered with Border */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-2xl mx-auto">
            {features.slice(3, 5).map((feature, index) => (
              <div key={index + 3} className="text-center relative">
                {/* Vertical Border - Only show between the two items */}
                {index === 0 && (
                  <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gray-300 transform translate-x-6"></div>
                )}

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={`${feature.title} icon`}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
