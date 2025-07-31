const steps = [
  {
    number: "01",
    title: "Create an Account",
    description: "Sign up and set up your profile",
    color: "blue",
  },
  {
    number: "02",
    title: "List Your Services",
    description: "Define your expertise and pricing",
    color: "cyan",
  },
  {
    number: "03",
    title: "Get Orders",
    description: "Receive job requests from clients",
    color: "purple",
  },
  {
    number: "04",
    title: "Deliver High-Quality Work",
    description: "Complete projects and satisfy clients",
    color: "cyan",
  },
  {
    number: "05",
    title: "Get Paid Securely",
    description: "Receive earnings safely through the platform",
    color: "blue",
  },
]

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return {
        innerRing: "border-blue-500",
        text: "text-blue-500",
      }
    case "cyan":
      return {
        innerRing: "border-cyan-400",
        text: "text-cyan-500",
      }
    case "purple":
      return {
        innerRing: "border-purple-600",
        text: "text-purple-600",
      }
    default:
      return {
        innerRing: "border-blue-500",
        text: "text-blue-500",
      }
  }
}

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Centered */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How It Works?</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Sit proin eros ac bibendum amet vulputate
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-start justify-between max-w-6xl mx-auto">
            {steps.map((step, index) => {
              const colors = getColorClasses(step.color)

              return (
                <div key={index} className="flex flex-col items-center relative flex-1">
                  {/* Step Circle */}
                  <div className="relative z-10 mb-8">
                    <div className="relative">
                      {/* Outer Gray Circle with Bigger Orbit Dots */}
                      <div className="w-28 h-28 rounded-full border-2 border-gray-300 bg-gray-100 flex items-center justify-center relative">
                        {/* Bigger Orbit Dots on Left and Right */}
                        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
                        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>

                        {/* Inner Circle with Very Thick Border and Transparent Background */}
                        <div
                          className={`w-20 h-20 rounded-full border-[12px] ${colors.innerRing} bg-transparent flex items-center justify-center`}
                        >
                          {/* Step Content */}
                          <div className="text-center">
                            <div className="text-xl font-bold text-gray-900">{step.number}</div>
                            <div className="text-xs text-gray-500 font-medium">STEP</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step Info */}
                  <div className="text-center max-w-44">
                    <h3 className={`text-base font-semibold mb-2 ${colors.text}`}>{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const colors = getColorClasses(step.color)

              return (
                <div key={index} className="flex items-center space-x-6">
                  {/* Step Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full border-2 border-gray-300 bg-gray-100 flex items-center justify-center relative">
                      {/* Bigger Orbit Dots on Left and Right */}
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
                      <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>

                      {/* Inner Circle with Very Thick Border and Transparent Background */}
                      <div
                        className={`w-16 h-16 rounded-full border-[10px] ${colors.innerRing} bg-transparent flex items-center justify-center`}
                      >
                        {/* Step Content */}
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-900">{step.number}</div>
                          <div className="text-xs text-gray-500 font-medium">STEP</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step Info */}
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 ${colors.text}`}>{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
