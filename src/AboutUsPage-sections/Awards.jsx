import { Recognition } from "../constants"
import Button from "../homePage-components/Button"
import { servicesIllustration7 } from "../positivus-assets/images"

const Awards = () => {
  return (
    <section className="max-container mt-[40px] md:mt-[140px]">
    <div className="p-2 md:padding-x ">
    <div className="flex max-lg:justify-center max-lg:items-center flex-col lg:flex-row gap-10 ">
      <h2 className="flex items-center justify-center text-center text-[40px] bg-lime-green font-grotesk py-[10px] rounded-md border-[5px] border-lime-green  font-medium">Awards & Recognition</h2>
      <p className="font-grotesk flex items-center text-lg w-[580px]">At Positivus, our commitment to excellence has been recognized by idustry leadrs. Here are some of our proudest acheivements: </p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[40px] mt-[80px]">
      {Recognition.map((recognition, index) => (
        <div key={index} className="flex flex-col items-center bg-light-gray rounded-[45px] p-[30px] border-rich-black border-[1px] border-b-[4px]">
          <img src={recognition.src} alt={recognition.label} />

          <div className="flex flex-col mt-[30px]">
            <h3 className="font-grotesk font-bold text-[25px]">{recognition.label}</h3>
            <p className="font-grotesk mt-[18px] ">{recognition.des}</p>
          </div>
        </div>

      ))}
    </div>

    <div className="flex flex-row justify-between items-center flex-1 w-full bg-lime-green rounded-[45px] mt-[123px] px-[60px] mb-[23] border-[1px] border-rich-black border-b-[4px]">
        <div className="flex flex-col gap-[26px] py-[60px] max-w-[500px]">
          <h3 className="font-grotesk text-[30px]">Join Our Team</h3>
          <p className="font-grotesk text-[18px]">
          At Positivus, we thrive on innovation and collaboration. We're always looking for passionate individuals to join our team and help businesses grow. Ready to make an impact?</p>
           <div className="px-[35px] py-[20px] ">
                  <Button label="Explore Carrers"  />
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

export default Awards
