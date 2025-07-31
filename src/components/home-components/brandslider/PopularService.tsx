const services = [
  {
    title: "House Cleaning",
    image: "/placeholder.svg?height=400&width=350&text=House+Cleaning",
    alt: "Professional house cleaning service",
  },
  {
    title: "Web Design",
    image: "/placeholder.svg?height=350&width=280&text=Web+Design",
    alt: "Web design and development service",
  },
  {
    title: "Personal Training",
    image: "/placeholder.svg?height=300&width=240&text=Personal+Training",
    alt: "Personal fitness training service",
  },
  {
    title: "Accounting",
    image: "/placeholder.svg?height=250&width=200&text=Accounting",
    alt: "Professional accounting service",
  },
]

export default function PopularServices() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Left aligned */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Popular Services</h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Sit proin eros ac bibendum amet vulputate
          </p>
        </div>

        {/* Services in horizontal line with decreasing sizes */}
        <div className="flex gap-10 items-center overflow-x-auto">
          {/* House Cleaning - Largest */}
          <div className="flex-shrink-0 relative overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
            <div className="w-80 h-80 relative">
              <img
                src={services[0].image || "/placeholder.svg"}
                alt={services[0].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-50 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold">{services[0].title}</h3>
              </div>
            </div>
          </div>

          {/* Web Design - Second largest */}
          <div className="flex-shrink-0 relative overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
            <div className="w-70 h-70 relative">
              <img
                src={services[1].image || "/placeholder.svg"}
                alt={services[1].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-50 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-lg font-bold">{services[1].title}</h3>
              </div>
            </div>
          </div>

          {/* Personal Training - Third largest */}
          <div className="flex-shrink-0 relative overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
            <div className="w-60 h-60 relative">
              <img
                src={services[2].image || "/placeholder.svg"}
                alt={services[2].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-50 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-lg font-bold">{services[2].title}</h3>
              </div>
            </div>
          </div>

          {/* Accounting - Smallest */}
          <div className="flex-shrink-0 relative overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
            <div className="w-50 h-50 relative">
              <img
                src={services[3].image || "/placeholder.svg"}
                alt={services[3].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-50 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-base font-bold">{services[3].title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
