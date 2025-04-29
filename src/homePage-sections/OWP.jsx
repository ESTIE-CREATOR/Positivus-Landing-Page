import { useState } from "react";
import { OWPS } from "../constants";

const OWP = () => {

    // State to track the active (expanded) step
    const [activeStep, setActiveStep] = useState(0); // Default to first step expanded
  
    // Toggle function to expand/collapse steps
    const toggleStep = (index) => {
      setActiveStep(activeStep === index ? null : index); // Collapse if already active, otherwise expand
    };


  return (
    <section>
      <div className="max-container p-2 md:padding-x mt-[40px] md:mt-[140px]">
      <div className="flex max-lg:justify-center max-lg:items-center flex-col lg:flex-row gap-10 ">
        <h2 className="flex items-center justify-center text-center text-[40px] bg-lime-green font-grotesk py-[10px] rounded-md border-[5px] border-lime-green px-[7px] font-medium">Our Working Process</h2>
        <p className="font-grotesk flex items-center text-lg w-[292px]">Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>

      <div className="w-full space-y-4 sm:space-y-6 mt-[80px]">
          {OWPS.map((step, index) => (
            <div key={index} className="w-full">
              {/* Step Header (Clickable) */}
              <div className={` w-full p-4 sm:p-6 rounded-[45px] 
                  ${activeStep === index ? "bg-lime-green text-black" : "bg-gray-100 text-black"}`}>
              <button
                onClick={() => toggleStep(index)}
                className={`
                  flex 
                  justify-between 
                  items-center 
                  w-full 
                  
                `}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-[60px] sm:text-[24px] font-grotesk font-medium">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[30px] sm:text-[24px] font-grotesk font-medium text-left">
                    {step.title}
                  </h3>
                </div>
                <span className="text-[20px]">
                  {activeStep === index ? "−" : "+"}
                </span>

                 

              </button>
                {/* Description (Visible when active) */}
                   {activeStep === index && (
                <div className="mt-2 p-4 sm:p-6 ">
                  <div className="h-[1px] w-full bg-rich-black mb-[30px]"></div>
                  <p className="font-grotesk text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )}
            </div>

              
             
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default OWP
