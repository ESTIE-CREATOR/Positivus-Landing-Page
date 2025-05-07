import { servicePage, servicesIllustration7 } from "../positivus-assets/images";
import { ArrowUpLeft } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen max-container md:padding-x px-4 mt-[50px] ">
      <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row-reverse lg:justify-between items-center pt-[20px] lg:bg-light-gray lg:rounded-[45px] lg:pt-[60px] pb-[80px] md:px-[70px] gap-2 lg:border-rich-black lg:border-[1px] lg:border-b-[4px]">

  {/* Text and Mobile Image Block */}
  <div className="flex flex-col xl:w-[531px] xl:h-[481px] gap-[35px] order-1 lg:order-none">
    <h1 className="text-[60px] font-medium font-grotesk  max-sm:text-[40px]">
      Expert Digital <br /> Marketing <br /> Services
    </h1>

    {/* Mobile Image in between */}
    <div className="block lg:hidden">
      <img
        src={servicesIllustration7}
        alt="Illustration"
        width={800}
        height={700}
        className="object-contain bg-light-gray"
      />
    </div>

    <p className="text-[20px] font-grotesk leading-[28px]  max-sm:text-[18px]">
      Unlock your business's full potential with tailored strategies designed to drive growth and deliver results.
    </p>
  </div>

  {/* Desktop Image */}
  <div className="hidden lg:block">
    <img
      src={servicesIllustration7}
      alt="Illustration"
      width={800}
      height={700}
      className="object-contain bg-light-gray"
    />
  </div>

</div>


      <div className="mt-[30px] mb-[50px] ">
        <button className="flex gap-[20px] items-center justify-center transition-transform duration-200 hover:-translate-y-2">
        <span className="p-2 rounded-full bg-rich-black flex items-center justify-center" >
          <ArrowUpLeft className="stroke-current text-lime-green" />
        </span>
       <span className="font-grotesk  max-sm:text-[18px]">Back</span>
        </button>
      </div>

      <div className="bg-rich-black flex items-start md:pl-[40px] pl-[20px] md:pr-[70px] pr-[40px] md:py-[60px] py-[30px] gap-[17px] md:gap-8 rounded-[45px] ">
      <div
  className="w-20 h-7 bg-lime-green flex items-center justify-center font-bold text-lg"
  style={{
    clipPath: "polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)",
  }}
>
 
</div>
  <div className="flex flex-row max-md:flex-col gap-8">
        <h2 className="flex items-center justify-center text-[30px] text-lime-green font-grotesk py-[10px] rounded-md font-medium  max-sm:text-[25px]">Search engine optimization</h2>
        <div className="flex flex-col gap-8">
          <p className="font-grotesk text-white text-[18px]  max-sm:text-[16px]">SEO is the process of improving a website's visibility on search engines like Google. By optimizing your content and site structure, we help your business rank higher in search results, driving more organic traffic and potential customers.</p>
          <button className="bg-white w-full text-[25px]  max-sm:text-[20px] rounded-[10px] p-[10px] flex items-center justify-center transition-transform duration-200 hover:-translate-y-2">
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
