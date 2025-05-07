import { useState } from "react";
import { testimonials } from "../constants";
import { ChevronLeft, ChevronRight } from "lucide-react";


const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation handlers
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Calculate visible testimonials (3 on laptop, 1 on mobile)
  const visibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      items.push(testimonials[index]);
    }
    return items;
  };

  return (
    <section>
       <div className="max-container p-2 md:padding-x mt-[40px] md:mt-[140px]">
      <div className="flex max-lg:justify-center max-lg:items-center flex-col lg:flex-row gap-10  mb-[80px]">
        <h2 className="flex items-center justify-center text-center text-[40px] bg-lime-green font-grotesk py-[10px] rounded-md border-[5px] border-lime-green px-[7px] font-medium">Testimonials</h2>
        <p className="font-grotesk flex items-center text-lg md:w-[473px] max-sm:text-center">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
      </div>

    

    <div className="bg-rich-black text-white rounded-[45px] p-6 sm:p-8">
      <div className="flex flex-col items-center gap-8 sm:gap-12">
        
        {/* Testimonials Carousel */}
        <div className="w-full">
          {/* Cards */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {visibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className="flex-1 min-w-[280px] lg:min-w-0 border-[1px] border-lime-300 rounded-[45px] p-6 sm:p-8"
              >
                <p className="font-grotesk text-sm sm:text-base leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
                <h4 className="text-lime-300 text-[18px] sm:text-[20px] font-grotesk font-medium">
                  {testimonial.name}
                </h4>
                <p className="text-[14px] sm:text-[16px] font-grotesk">
                  {testimonial.role}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
            <button onClick={handlePrev} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-lime-300" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <button onClick={handleNext} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>


      </div>
    </section>
  )
}

export default Testimonials
