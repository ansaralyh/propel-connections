import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === services.length - 4 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      id: 1,
      title: "Personal Training",
      description: "Lorem ipsum dolor sit amet",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      title: "Counselling",
      description: "Lorem ipsum dolor sit amet",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      title: "Massage Therapy",
      description: "Lorem ipsum dolor sit amet",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      title: "Health Care",
      description: "Lorem ipsum dolor sit amet",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 5,
      title: "Nutrition Consultation",
      description: "Lorem ipsum dolor sit amet",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 6,
      title: "Mental Health",
      description: "Lorem ipsum dolor sit amet",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === services.length - 4 ? 0 : prevIndex + 1
  //   );
  // };

  const handleCardClick = (index: any) => {
    // Navigate to the clicked card's service or perform action
    console.log(`Clicked on service: ${getVisibleServices()[index].title}`);
    // You can add navigation logic here
  };

  const getCardClasses = (position: any) => {
    switch (position) {
      case 0:
        return "h-100 w-95"; // large - first card
      case 1:
        return "h-85 w-75"; // medium - second card
      case 2:
        return "h-70 w-70"; // medium - third card
      case 3:
        return "h-60 w-60"; // small - fourth card
      default:
        return "h-64 w-56";
    }
  };

  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % services.length;
      visible.push(services[index]);
    }
    return visible;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Health Services
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Sit proin eros ac bibendum
            amet vulputate
          </p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
          Views all
        </button>
      </div>

      {/* Slider Container */}
      <div className="relative">
        <div className="flex items-center justify-center space-x-4 overflow-hidden">
          {getVisibleServices().map((service, index) => (
            <div
              key={`${service.id}-${currentIndex}`}
              className={`relative flex-shrink-0 rounded-2xl overflow-hidden bg-cover bg-center transition-all duration-500 cursor-pointer hover:scale-105 ${getCardClasses(
                index
              )}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${service.image})`,
                transform:
                  index === 1
                    ? "translateY(-8px)"
                    : index === 2
                    ? "translateY(-4px)"
                    : "translateY(0)",
                zIndex: index === 0 ? 3 : index === 1 ? 2 : 1,
              }}
              onClick={() => handleCardClick(index)}>
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-200 mb-4">
                  {service.description}
                </p>
                <button
                  className="self-start bg-gray bg-opacity-100 backdrop-blur-lg rounded-full p-2 hover:bg-opacity-30 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(index);
                  }}>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HomeSlider;
