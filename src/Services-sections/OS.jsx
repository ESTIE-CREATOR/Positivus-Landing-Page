import { services } from "../constants"
import { ArrowUpRight } from "lucide-react";
import { AboutUsCoreValues1 } from "../positivus-assets/images"
import Button from "../homePage-components/Button"

const Services = () => {
  return (
    <section className="w-full mt-[40px] md:mt-[140px] max-container  ">
    <div className="md:padding-x p-2 flex flex-col ">
      <div className="flex max-lg:justify-center max-lg:items-center flex-col lg:flex-row gap-10 ">
        <h2 className="flex items-center justify-center text-center text-[40px] bg-lime-green font-grotesk py-[10px] rounded-md border-[5px] border-lime-green px-[7px] font-medium  max-sm:text-[30px]">Our Other Services</h2>
        <p className="font-grotesk flex items-center text-lg max-sm:text-center md:w-[580px]  max-sm:text-[16px]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] mt-[80px]">
        {services.map((service) => (
       <div className={`flex justify-between items-center gap-[30px] md:gap-[75px] border-rich-black border-[1px] border-b-[4px] rounded-[45px] bg-light-gray text-black w-full p-[50px]`}>
       <div className="flex flex-col">
           <h3 className="text-[30px] font-grotesk font-medium max-sm:text-[25px]">{service.label}</h3>
           <button className="flex justify-between items-center w-[164px] h-[41px] md:mt-[90px] transition-transform duration-200 hover:-translate-y-2  max-sm:hover:-translate-y-1 ">
           <span className={`p-2 rounded-full text-black  max-sm:bg-rich-black`}>
             <ArrowUpRight className={`stroke-current text-black  max-sm:text-white`} />
           </span>
               <span className="max-sm:hidden font-grotesk text-[20px] hover:underline">Learn more</span>
           </button>
           </div>
   
           <img
     src={service.src}
     alt="illustration"
     className="w-full max-w-[115px] sm:max-w-[210px] h-auto object-contain mx-auto sm:mx-0"
   />
         
       </div>

        ))}
      </div>
      <div className="flex flex-row justify-between items-center flex-1 w-full bg-white border-rich-black border-[1px] border-b-[4px] rounded-[45px] mt-[123px] px-[60px] mb-[23]">
        <div className="flex flex-col gap-[26px] py-[60px] max-w-[500px]">
          <h3 className="font-grotesk text-[30px] font-bold max-sm:text-[25px]">Ready to Elevate Your Search Rankings?</h3>
          <div className="w-full h-[1px] bg-rich-black mb-[30px] "></div>
          <p className="font-grotesk text-[18px] max-sm:text-[16px]">Our proven SEO strategies are designed to help your business acheive long-lasting success in search engines. Whether you want to boost organic traffic, improve keyword rankings, or increase conversions, we're here to make it happen.</p>
          <p className="font-grotesk text-[18px] font-semibold max-sm:text-[16px]">Let's work together to grow your online presence.</p>
          <button className="bg-lime-green text-black flex items-center justify-center px-4 py-2 rounded-[14px] hover:bg-[#A6E65C] transition-transform duration-200 hover:-translate-y-2 max-sm:text-[18px] text-[20px]">Start My SEO Journey</button>
        </div>
        <div className="max-sm:hidden">
          <img src={AboutUsCoreValues1} alt="Illustration" width={359} height={394} />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Services
