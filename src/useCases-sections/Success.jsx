import { ArrowUpRight } from "lucide-react"
import { successStories } from "../constants"


const Success = () => {
  return (
    <section className="max-container mt-[40px] md:mt-[140px]">
    <div className="p-2 md:padding-x ">
    <div className="flex max-lg:justify-center max-lg:items-center flex-col lg:flex-row gap-10 ">
      <h2 className="flex items-center justify-center text-center text-[40px] bg-lime-green font-grotesk py-[10px] rounded-md border-[5px] border-lime-green px-[7px] font-medium max-sm:text-[30px]">All Success Stories</h2>
      <p className="font-grotesk flex items-center text-lg max-sm:text-center md:w-[580px] max-sm:text-[16px]">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3  rounded-[45px] border-rich-black border-[1px] mt-[80px] p-[30px] border-b-[4px] ">
      {successStories.map((study, index) => {
            const isLastRow = index >= 3;
            const isLastCol = (index + 1) % 3 === 0;

            return(
          <div
          key={index}
          className={`p-6 border-rich-black max-md:border-b-[1px] 
            ${!isLastRow ? 'md:border-b' : ''} 
            ${!isLastCol ? 'md:border-r' : ''}`}
            
        >
          <h3 className="text-[24px] font-semibold mb-2 max-sm:text-[20px]">{study.title}</h3>
          <p className="text-[18px] font-grotesk mb-4 max-sm:text-[16px]">{study.description}</p>
          <button className="flex items-center hover:underline gap-[10px] transition-transform duration-200 hover:-translate-y-2">
            <div className="bg-lime-green rounded-full flex items-center justify-center ">
            <ArrowUpRight className="mr-1 h-5 w-5" />
            </div>
           <span className="text-[18px] font-grotesk max-sm:text-[16px]"> Learn more</span>
          </button>
        </div>
      )
    }
    )}
    </div>
      
    </div>
    </section>
  )
}

export default Success
