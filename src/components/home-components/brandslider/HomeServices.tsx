import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "House Cleaning",
    description: "Lorem ipsum dolor sit amet",
    image: "/placeholder.svg?height=400&width=320&text=House+Cleaning", // Using placeholder for now
  },
  {
    title: "Gardening",
    description: "Lorem ipsum dolor sit amet",
    image: "/placeholder.svg?height=320&width=256&text=Gardening",
  },
  {
    title: "Painting",
    description: "Lorem ipsum dolor sit amet",
    image: "/placeholder.svg?height=256&width=208&text=Painting",
  },
  {
    title: "Decorating",
    description: "Lorem ipsum dolor sit amet",
    image: "/placeholder.svg?height=208&width=176&text=Decorating",
  },
]

export default function HomeServices() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Home Services</h2>
            <p className="text-lg text-gray-500 max-w-2xl">
              Lorem ipsum dolor sit amet consectetur. Sit proin eros ac bibendum amet vulputate
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
            Views all
          </button>
        </div>

        {/* Services in horizontal line with decreasing sizes */}
        <div className="flex gap-10 items-center overflow-x-hidden overflow-y-hidden">
          {/* House Cleaning - Largest */}
          <div className="flex-shrink-0 relative overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105">
            <div className="w-80 h-96 relative">
              <img
                src={services[0].image || "/placeholder.svg"}
                alt={services[0].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.log("Image failed to load:", services[0].image)
                  e.currentTarget.src = "/placeholder.svg?height=400&width=320&text=Error"
                }}
                onLoad={() => console.log("Image loaded successfully:", services[0].image)}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-50 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">{services[0].title}</h3>
                    <p className="text-white/80 text-sm">{services[0].description}</p>
                  </div>
                  <div className="ml-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gardening - Second largest */}
          <div className="flex-shrink-0 relative overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105">
            <div className="w-64 h-80 relative">
              <img
                src={services[1].image || "/placeholder.svg"}
                alt={services[1].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-50 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-white text-lg font-bold mb-2">{services[1].title}</h3>
                    <p className="text-white/80 text-sm">{services[1].description}</p>
                  </div>
                  <div className="ml-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Painting - Third largest */}
          <div className="flex-shrink-0 relative overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105">
            <div className="w-52 h-64 relative">
              <img
                src={services[2].image || "/placeholder.svg"}
                alt={services[2].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-50 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-white text-lg font-bold mb-2">{services[2].title}</h3>
                    <p className="text-white/80 text-sm">{services[2].description}</p>
                  </div>
                  <div className="ml-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorating - Smallest */}
          <div className="flex-shrink-0 relative overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105">
            <div className="w-44 h-52 relative">
              <img
                src={services[3].image || "/placeholder.svg"}
                alt={services[3].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-50 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-white text-base font-bold mb-2">{services[3].title}</h3>
                    <p className="text-white/80 text-sm">{services[3].description}</p>
                  </div>
                  <div className="ml-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
