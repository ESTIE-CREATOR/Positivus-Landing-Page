import { aboutUsHeroIllusion } from "../positivus-assets/images"


const Hero = () => {
  return (
<section className="w-full min-h-screen max-container md:padding-x px-4 mt-[20px]">
<div className="flex flex-col md:flex-row-reverse md:justify-between items-center md:bg-light-gray md:rounded-[45px] md:pt-[60px] pb-[80px] md:px-[70px] gap-2 md:border-rich-black md:border-[1px] md:border-b-[4px]">
    
    {/* Left Text Section */}
    <div className="flex flex-col xl:w-[531px] xl:h-[481px] gap-[35px] order-1 md:order-none">
      <h1 className="text-[60px] font-medium font-grotesk  max-sm:text-[40px]">
        Together for <br /> Success
      </h1>
      
      {/* Image appears here on mobile */}
      <div className="block md:hidden">
        <img
          src={aboutUsHeroIllusion}
          alt="Illustration"
          width={800}
          height={700}
          className="object-contain bg-light-gray"
        />
      </div>
      
      <p className="text-[20px] font-grotesk leading-[28px]  max-sm:text-[18px]">
        At Positivus, we help businesses grow by combining creativity, innovation and data-driven strategies. Together, we build a future of shared success.
      </p>
    </div>

    {/* Right Image for desktop */}
    <div className="hidden md:block">
      <img
        src={aboutUsHeroIllusion}
        alt="Illustration"
        width={800}
        height={700}
        className="object-contain bg-light-gray"
      />
    </div>

  </div>
    </section>
  )
}

export default Hero
