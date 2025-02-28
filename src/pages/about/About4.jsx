import { useState, useEffect } from 'react';
import backgroundImage from "../../assets/aboutback41.png";
import boy from "../../assets/boy.jpg";
import girl from "../../assets/girl.jpg";

const TestimonialsSection = () => {
  // Expanded testimonials array with 4 entries
  const testimonials = [
    {
      id: 1,
      name: "Bonnie Tolbet",
      role: "Customer",
      text: "There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.",
      imageSrc: boy,
    },
    {
      id: 2,
      name: "Sarah Albert",
      role: "Customer",
      text: "There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.",
      imageSrc: girl,
    },
    {
      id: 3,
      name: "John Davis",
      role: "Customer",
      text: "There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.",
      imageSrc: boy,
    },
    {
      id: 4,
      name: "Emma Wilson",
      role: "Customer",
      text: "There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.",
      imageSrc: girl,
    },
    {
      id: 5,
      name: "John Davis",
      role: "Customer",
      text: "There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.",
      imageSrc: boy,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / 2);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  // Get current testimonials to display (2 at a time)
  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * 2;
    return testimonials.slice(startIndex, startIndex + 2);
  };

  return (
    <div>
      <div
        className="bg-cover mx-auto max-w-7xl bg-center bg-no-repeat w-full h-[600px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center py-16 px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h3 className="text-yellow-500 font-medium text-xl mb-2">
              Our Testimonials
            </h3>
            <h2 className="text-5xl font-bold text-gray-900">What They Say</h2>
          </div>

          {/* Testimonials Grid - Always show 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {getCurrentTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg p-8 shadow-lg"
              >
                <div className="flex items-start">
                  {/* Profile Image */}
                  <div className="mr-6">
                    <img
                      src={testimonial.imageSrc}
                      alt={testimonial.name}
                      className="w-32 h-32 rounded-lg object-cover"
                    />
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {testimonial.text}
                    </p>

                    <div className="flex items-center">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500">{testimonial.role}</p>
                      </div>

                      {/* Green Circle with Dash */}
                      <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                        <span className="text-xl">—</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Navigation - Show 4 dots */}
          <div className="flex justify-center mt-8">
            {[0, 1].map((index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 w-3 mx-1 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-green-500 w-6" : "bg-gray-300"
                }`}
                aria-label={`View testimonials ${index * 2 + 1}-${index * 2 + 2}`}
              />
            ))}
            {/* Add two more non-functional dots for visual appearance */}
            {[2, 3].map((index) => (
              <button
                key={index + 100}
                className="h-3 w-3 mx-1 rounded-full bg-gray-300"
                aria-label={`Decorative dot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;