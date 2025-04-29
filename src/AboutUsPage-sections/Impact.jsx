import { roadmap } from "../constants"



const Impact = () => {
  return (
    <section className="max-container mt-[40px] md:mt-[140px]">
      <div className="p-2 md:padding-x ">
      <div className="flex max-lg:justify-center max-lg:items-center flex-col lg:flex-row gap-10 ">
        <h2 className="flex items-center justify-center text-center text-[40px] bg-lime-green font-grotesk py-[10px] rounded-md border-[5px] border-lime-green  font-medium">Our Impact in Numbers</h2>
        <p className="font-grotesk flex items-center text-lg w-[450px]">A snapshot of the milestones and acheivements that drive our success</p>
      </div>

      <div className="relative flex flex-col items-center mt-[80px]">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-rich-black max-lg:hidden"></div>

          {/* Milestones */}
          {roadmap.map((milestone, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center w-full mb-12 sm:mb-16 lg:mb-20 last:mb-0"
            >
              {/* Year (Left Side on Desktop, Top on Mobile) */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end pr-0 lg:pr-8">
                <h3 className="text-[32px] sm:text-[40px] font-grotesk font-bold text-lime-green">
                  {milestone.year}
                </h3>
              </div>

              {/* Marker (Hidden on Mobile) */}
              <div className="hidden lg:flex items-center justify-center w-12 h-12 bg-white rounded-full border-[2px] border-rich-black">
                <div className="w-6 h-6 bg-lime-green rounded-full"></div>
              </div>

              {/* Card (Right Side on Desktop, Bottom on Mobile) */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-start pl-0 lg:pl-8 mt-4 lg:mt-0">
                <div className="bg-rich-black rounded-[45px] p-6 sm:p-8 w-full max-w-[400px]">
                  <h4 className="text-[24px] sm:text-[30px] font-grotesk font-medium text-white">
                    {milestone.heading}
                  </h4>
                  <p className="text-[16px] sm:text-[18px] font-grotesk text-white mt-4">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      
    </div>
    </section>
  )
}

export default Impact
