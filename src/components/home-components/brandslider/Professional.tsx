import { Plus, User, CheckSquare } from "lucide-react";

const steps = [
  {
    icon: Plus,
    title: "Choose a Service",
    description:
      "Browse from various home services and find the perfect match for your needs",
  },
  {
    icon: User,
    title: "Book a Professional",
    description:
      "Select a trusted service provider from our verified network of experts",
  },
  {
    icon: CheckSquare,
    title: "Get It Done",
    description:
      "Sit back and relax while our certified professionals complete your project",
  },
];

export default function Professional() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Centered */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
            Join as a Professional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Sit proin eros ac bibendum
            amet vulputate
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="group text-center p-10 rounded-3xl transition-all duration-500 cursor-pointer transform hover:scale-105 bg-white text-gray-900 shadow-lg hover:shadow-2xl hover:bg-blue-600 hover:text-white border border-gray-100">
                

                {/* Icon */}
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 flex items-center justify-center rounded-2xl transition-all duration-500 bg-blue-50 text-blue-600 group-hover:bg-white/20 group-hover:text-white group-hover:shadow-lg">
                    <IconComponent className="w-10 h-10" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold transition-all duration-500 text-gray-900 group-hover:text-white">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed transition-all duration-500 text-gray-600 group-hover:text-white/90">
                    {step.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="mt-8 w-12 h-1 mx-auto rounded-full transition-all duration-500 bg-blue-100 group-hover:bg-white/30"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
