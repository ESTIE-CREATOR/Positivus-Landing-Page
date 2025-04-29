import { ArrowUpRight } from "lucide-react"
import { caseStudies } from "../constants"

const Cases = () => {
  return (
    <section className="max-container mt-[40px] md:mt-[140px]">
      <div className="p-2 md:padding-x ">
      <div className="flex max-lg:justify-center max-lg:items-center flex-col lg:flex-row gap-10 ">
        <h2 className="flex items-center justify-center text-center text-[40px] bg-lime-green font-grotesk py-[10px] rounded-md border-[5px] border-lime-green px-[7px] font-medium">Case Studies</h2>
        <p className="font-grotesk flex items-center text-lg w-[580px]">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
      </div>

    
      <div className="w-full  mt-[80px] overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        <div className="flex flex-row lg:grid lg:grid-cols-3 gap-4 sm:gap-6 min-w-[840px] lg:min-w-0">
          {caseStudies.map((study, index) => (
            <div
            key={index}
            className="flex-shrink-0 w-[280px] lg:w-full bg-black rounded-[45px] p-6 sm:p-8 snap-center"
          >
               <p className="font-grotesk text-sm sm:text-base leading-relaxed text-white">
                  {study.des}
                </p>
                <button className="flex items-center gap-2 mt-4">
                  <span className="font-grotesk text-sm sm:text-base text-lime-green">
                    Learn more
                  </span>
                  <span>
                    <ArrowUpRight className="text-lime-green" />
                  </span>
                </button>
            </div>
        ))}
      </div>
      </div>

      </div>
    </section>
  )
}

export default Cases


