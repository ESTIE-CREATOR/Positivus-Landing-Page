import { useState } from "react";
import { faqData } from "../constants";

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // First item expanded by default

  const toggleItem = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index); // Collapse if already expanded, otherwise expand
  };

  return (
    <section className="w-full mt-[40px] md:mt-[140px] max-container  ">
    <div className="md:padding-x p-2 flex flex-col ">
      <div className="flex max-lg:justify-center max-lg:items-center flex-col lg:flex-row gap-10 ">
        <h2 className="flex items-center justify-center text-center text-[40px] bg-lime-green font-grotesk py-[10px] rounded-md border-[5px] border-lime-green px-[7px] font-medium">Frequently Asked Questions</h2>
      </div>


        {/* Accordion */}
        <div className="flex flex-col gap-4 sm:gap-6 mt-[80px]">
          {faqData.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className={`border-[1px] border-b-[4px] border-rich-black rounded-[45px] p-6 sm:p-8 transition-all duration-300 ${
                  isExpanded ? "bg-lime-green" : "bg-[#E6E8E6]"
                }`}
              >
                {/* Question and Toggle Icon */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <h4 className="text-[18px] sm:text-[24px] font-grotesk font-medium text-rich-black">
                    {item.question}
                  </h4>
                  <div
                    className="w-8 h-8 flex items-center justify-center rounded-full border-[1px] border-rich-black bg-white"
                  >
                    <span className="text-rich-black text-[24px]">
                      {isExpanded ? "−" : "+"}
                    </span>
                  </div>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? "max-h-[500px] mt-4" : "max-h-0"
                  }`}
                >
                  <div className="h-[1px] w-full bg-rich-black mb-[30px]"></div>
                  <p className="text-[16px] sm:text-[18px] font-grotesk text-rich-black">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;