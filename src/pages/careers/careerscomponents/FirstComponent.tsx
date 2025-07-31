export default function FirstComponent() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Work with Clients Worldwide & Get Paid for <span className="text-blue-600">Your Skills!</span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Join thousands of professionals offering services in design, writing, development, and
            </p>

            {/* CTA Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Get Started Now
            </button>
          </div>

          {/* Right Side - Profile Photos Collage */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-96 h-100">
              <img className="w-80 h-100" src="/assets/team.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
