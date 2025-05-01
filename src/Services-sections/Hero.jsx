import { servicePage, servicesIllustration7 } from "../positivus-assets/images";
import { ArrowUpLeft } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen max-container md:padding-x px-4 mt-[50px] ">
      <div className="flex flex-col">
      <div className="flex flex-1 xl:flex-row xl:justify-between items-center pt-[20px] lg:bg-light-gray lg:rounded-[45px] lg:pt-[60px] pb-[80px] px-[70px] gap-4 lg:border-rich-black lg:border-[1px] lg:border-b-[4px] max-md:flex-col-reverse">
      <img src={servicesIllustration7} alt="Illustration" width={800} height={700}  className=" flex flex-1 object-contain bg-light-gray" />
      <div className="flex flex-col xl:w-[531px] xl:h-[481] gap-[35px]">
        <h1 className="text-[40px] font-medium font-grotesk max-sm:text-center">Expert Digital <br />Marketing <br />Services</h1>
        <p className="text-[20px] font-grotesk leading-[28px] max-sm:text-center">Unlock your business's full potential with tailored stategies designed to drive growth and deliver results.</p>
      </div>
      </div>

      <div className="mt-[30px] mb-[50px]">
        <button className="flex gap-[20px] items-center justify-center">
        <span className="p-2 rounded-full bg-rich-black flex items-center justify-center" >
          <ArrowUpLeft className="stroke-current text-lime-green" />
        </span>
       <span className="font-grotesk">Back</span>
        </button>
      </div>

      <div className="bg-rich-black flex items-start pl-[40px] pr-[70px] py-[60px] gap-8 rounded-[45px] ">
      <div
  className="w-20 h-7 bg-lime-green flex items-center justify-center font-bold text-lg"
  style={{
    clipPath: "polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)",
  }}
>
 
</div>
  <div className="flex flex-row max-md:flex-col gap-8">
        <h2 className="flex items-center justify-center text-center text-[30px] bg-lime-green font-grotesk py-[10px] rounded-md font-medium">Search engine optimization</h2>
        <div className="flex flex-col gap-8">
          <p className="font-grotesk text-white">SEO is the process of improving a website's visibility on search engines like Google, with the goal of attracting more organic (non-paid) traffic.</p>
          <button className="bg-white w-full rounded-[10px] p-[10px] flex items-center justify-center">
            Boost My Rankings
          </button>
        </div>
        </div>      
      </div>

      
      </div>
    </section>
  )
}

export default Hero
