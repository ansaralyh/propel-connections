import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Istiak Ahmed",
    title: "CEO, Avito",
    rating: 5,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    name: "Jon Sari",
    title: "CEO, Avito",
    rating: 5,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam",
  },
  {
    name: "Rahul Deb",
    title: "CEO, Avito",
    rating: 5,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam",
  },
  {
    name: "Ahmed Saimoon",
    title: "CEO, Avito",
    rating: 5,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    name: "Sakib Mo",
    title: "CEO, Avito",
    rating: 5,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    name: "Nazmul Karim",
    title: "CEO, Avito",
    rating: 5,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt",
  },
]

export default function HappyClients() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Left aligned */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Happy Client</h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Sit proin eros ac bibendum amet vulputate
          </p>
        </div>

        {/* 3 Cards per Row - 2 Rows Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              {/* Profile Section */}
              <div className="flex items-start mb-4">
                <img
                  src="/assets/Ellipse 1.png"
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 flex-shrink-0"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs">{testimonial.title}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">{renderStars(testimonial.rating)}</div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
