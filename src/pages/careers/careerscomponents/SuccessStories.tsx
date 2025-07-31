import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur. Consequat magna sit amet vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed.",
    author: "John Wilson",
    role: "Business Owner",
    image: "/public/assets/men.jpeg",
    bgColor: "bg-blue-600",
    textColor: "text-white",
  },
  {
    id: 2,
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur. Consequat magna sit amet vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed.",
    author: "Sarah Johnson",
    role: "Entrepreneur",
    image: "/public/assets/women.jpeg",
    bgColor: "bg-cyan-400",
    textColor: "text-white",
    subtitle: "What are they say",
  },
]

export default function SuccessStories() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? "text-white fill-white" : "text-white/50"}`} />
    ))
  }

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Sit proin eros ac bibendum amet vulputate
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
            See More
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex h-64">
                {/* Left Content Side */}
                <div
                  className={`${testimonial.bgColor} ${testimonial.textColor} p-8 flex-1 flex flex-col justify-between`}
                >
                  {/* Rating */}
                  <div className="flex items-center mb-4">{renderStars(testimonial.rating)}</div>

                  {/* Testimonial Text */}
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed mb-4">{testimonial.text}</p>
                  </div>

                  {/* Author Info */}
                  <div>
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs opacity-90">{testimonial.role}</p>
                  </div>

                  {/* Subtitle if exists */}
                  {testimonial.subtitle && (
                    <div className="mt-4">
                      <p className="text-xs opacity-75 font-medium">{testimonial.subtitle}</p>
                    </div>
                  )}
                </div>

                {/* Right Image Side */}
                <div className="w-64 relative bg-black">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-content"
                    onError={(e) => {
                      console.log("Image failed to load:", testimonial.image)
                      // Keep the black background if image fails to load
                      e.currentTarget.style.display = 'none'
                    }}
                    onLoad={() => console.log("Image loaded successfully:", testimonial.image)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
