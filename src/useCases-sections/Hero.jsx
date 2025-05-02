import { ArrowUpRight } from "lucide-react";
import { stories } from "../constants";

const Hero = () => {
  return (
    <section className="w-full min-h-screen max-container md:padding-x px-4 mt-[50px] ">
      <div className="flex flex-col">
      <div className="flex flex-1 xl:flex-row xl:justify-between items-center pt-[20px] lg:bg-light-gray lg:rounded-[45px] lg:pt-[60px] pb-[80px] px-[70px] gap-4 lg:border-rich-black lg:border-[1px] lg:border-b-[4px] max-md:flex-col-reverse">
      <img src="" alt="Illustration" width={800} height={700}  className=" flex flex-1 object-contain bg-light-gray" />
      <div className="flex flex-col xl:w-[531px] xl:h-[481] gap-[35px]">
        <h1 className="text-[50px] font-bold font-grotesk max-sm:text-center">Proven Success Stories</h1>
        <p className="text-[20px] font-grotesk leading-[28px] max-sm:text-center">The real-world impact of our strategies, showcasing how we've helped businesses across various industries achieve measurable growth, increase visibility, and reach their goals. These stories reflect our commitment to delivering results and building long-term partnerships grounded in trust, expertise, and performance.</p>
      </div>
      </div>

      

      <div className="bg-rich-black flex items-start max-md:flex-col pl-[40px] pr-[70px] py-[60px] gap-8 rounded-[45px] mt-[140px] ">
        <div className="hidden max-sm:flex w-6 h-6 bg-lime-green items-center justify-center font-bold text-lg" style={{clipPath: "polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)",}}></div>
          <div className="flex flex-col gap-8">
        <h2 className="text-[32px] bg-lime-green font-grotesk py-[10px] rounded-md font-bold sm:w-[380px]">Featured Sucess Stories</h2>
        <p className="font-medium font-grotesk text-white text-[25px] ">Scaling Success for a Leading E- Commerce Brand</p>
        <p className="font-grotesk text-white text-[20px]">Through a comprehensive SEO and PPC strategy, we helped this e-commerce brand increase visibility, drive traffic, and boost sales.</p>

        <button className="flex gap-[20px] items-center justify-start">
        <span className="p-2 rounded-full bg-lime-green flex items-center justify-center" >
          <ArrowUpRight className="stroke-current text-black" />
        </span>
       <span className="font-grotesk text-lime-green text-[18px]">Read</span>
        </button>
      
        </div> 
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] ">
          {stories.map((story, index) => (
            <div key={index} className="flex flex-col gap-[20px] bg-white p-[10px] rounded-[15px] ">
              <h2 className="font-semibold font-grotesk text-[30px] text-black ">{story.label}</h2>
              <p className="font-grotesk text-[18px] text-black ">{story.des}</p>
            </div>
          ))}
        </div>     
      </div>

      
      </div>
    </section>
  )
}

export default Hero
