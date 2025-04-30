import { aboutUsHeroIllusion } from "../positivus-assets/images"


const Hero = () => {
  return (
<section className="w-full min-h-screen max-container md:padding-x px-4 mt-[50px] ">
      <div className="flex flex-1 xl:flex-row xl:justify-between items-center pt-[20px] lg:bg-light-gray lg:rounded-[45px] lg:pt-[60px] pb-[80px] px-[70px] gap-4 lg:border-rich-black lg:border-[1px] lg:border-b-[4px] max-md:flex-col-reverse">
      <img src={aboutUsHeroIllusion} alt="Illustration" width={800} height={700}  className=" flex flex-1 object-contain bg-light-gray" />
      <div className="flex flex-col xl:w-[531px] xl:h-[481] gap-[35px]">
        <h1 className="text-[40px] font-medium font-grotesk max-sm:text-center">Navigating the <br /> digital landscape <br /> for success</h1>
        <p className="text-[20px] font-grotesk leading-[28px] max-sm:text-center">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
      </div>
      </div>
    </section>
  )
}

export default Hero
