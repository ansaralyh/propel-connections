const features = [
  {
    image: "/assets/system (4).png",
    title: "Certified Professionals",
    description: "Verified & skilled experts",
  },
  {
    image: "/assets/system (3).png",
    title: "Affordable Pricing",
    description: "Transparent and fair costs",
  },
  {
    image: "/assets/system (2).png",
    title: "Quick Booking",
    description: "Easy & fast service request",
  },
  {
    image: "/assets/system (1).png",
    title: "24/7 Support",
    description: "Assistance whenever you need",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose US
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Sit proin eros ac bibendum
            amet vulputate
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            return (
              <div key={index} className="text-center">
                {/* Icon - Image instead of Lucide icon */}
                <div className="flex justify-center mb-6">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={`${feature.title} icon`}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
