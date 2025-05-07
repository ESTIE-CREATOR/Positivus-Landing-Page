import { logos } from "../constants"
import Button from "../homePage-components/Button"
import { homepageIllustration } from "../positivus-assets/images"

const Hero = () => {
  return (
    <section className="w-full min-h-screen max-container md:padding-x px-4 mt-[30px] ">
      <div className="flex flex-col ">
      <div className="flex flex-1 xl:flex-row flex-col xl:justify-between items-center ">
      <div className="flex flex-col xl:w-[531px] xl:h-[481] gap-[35px]">
        <h1 className="text-[60px] font-medium font-grotesk max-sm:text-center max-sm:text-[40px]">Navigating the <br /> digital landscape <br /> for success</h1>
        <p className="text-xl font-grotesk leading-[28px] max-sm:text-center max-sm:text-[16px]">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
        <div className=" h-[68px] pb-[34px] flex max-sm:justify-center items-center ">
        <Button label="Book a consultation"  />
        </div>
      </div>
        <img src={homepageIllustration} alt="Illustration" width={600} height={515} className=" flex flex-1 bg-white object-contain" />
      </div>

      <div className="w-full overflow-hidden pt-[70px]">
        <div className="flex space-x-10 animate-scroll">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="object-contain inline-block "
            height={48}
          />
        ))}
      </div>
      </div>
      </div>
    </section>
  )
}

export default Hero
