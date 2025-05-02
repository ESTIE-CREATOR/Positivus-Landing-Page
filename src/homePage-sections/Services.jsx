import ServiceCard from "../homePage-components/ServiceCard"
import { services } from "../constants"
import { servicesIllustration7 } from "../positivus-assets/images"
import Button from "../homePage-components/Button"

const Services = () => {
  return (
    <section className="w-full mt-[40px] md:mt-[140px] max-container  ">
    <div className="md:padding-x p-2 flex flex-col ">
      <div className="flex max-lg:justify-center max-lg:items-center flex-col lg:flex-row gap-10 ">
        <h2 className="flex items-center justify-center text-center text-[40px] bg-lime-green font-grotesk py-[10px] rounded-md border-[5px] border-lime-green px-[7px] font-medium">Services</h2>
        <p className="font-grotesk flex items-center text-lg w-[580px]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] mt-[80px]">
        {services.map((service, index) => (
        <ServiceCard key={index} label={service.label} src={service.src} index={index} />

        ))}
      </div>
      <div className="flex flex-row justify-between items-center flex-1 w-full bg-gray-100 rounded-[45px] mt-[123px] px-[60px] mb-[23]">
        <div className="flex flex-col gap-[26px] py-[60px] max-w-[500px]">
          <h3 className="font-grotesk text-[30px]">Let's make things happen</h3>
          <p className="font-grotesk text-[18px]">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
           <div className="py-[20px] ">
                  <Button label="Get your free proposal"  />
            </div>
        </div>
        <div className="max-sm:hidden">
          <img src={servicesIllustration7} alt="Illustration" width={359} height={394} />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Services
