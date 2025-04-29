import { teamMembers } from "../constants"
import { linkedln } from "../positivus-assets/images"
import Button from "../homePage-components/Button"

const Team = () => {
  return (
    <section >
      <div className="max-container p-2 md:padding-x mt-[40px] md:mt-[140px]">
      <div className="flex max-lg:justify-center max-lg:items-center flex-col lg:flex-row gap-10  mb-[80px]">
        <h2 className="flex items-center justify-center text-center text-[40px] bg-lime-green font-grotesk py-[10px] rounded-md border-[5px] border-lime-green px-[7px] font-medium">Team</h2>
        <p className="font-grotesk flex items-center text-lg w-[473px]">Meet the skilled and experienced team behind our successful digital marketing strategies</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
        {teamMembers.map((member, index) => ( 
          <div className="relative border-[1px] border-rich-black rounded-[45px] p-6 sm:p-8 border-b-[4px]" key={index}>
            <div className="">
              <div className="flex ">
                <img src={member.src} alt="image of team members" width={97.82} height={97.82} className="object-contain" />
                <div className="flex-1 pt-3 sm:pt-5 ml-[12px] sm:ml-[20px]">
                <h4 className="text-[20px] font-grotesk font-semibold">{member.name}</h4>
                <p className="text-[18px] font-grotesk">{member.position}</p>
                </div>
                <img src={linkedln} alt="linkedln" width={34} height={34} className="absolute top-6 right-6 sm:top-8 sm:right-8 object-contain flex items-end"/>
              </div>

              <div  className="h-[1px] w-full bg-rich-black mb-[28px] mt-[28px]"></div>

              <div>
                <p className=" text-[18px] font-grotesk">{member.des}</p>
              </div>

            </div>
          </div>
        ))}

       
      </div>
      <div className="flex justify-end items-center mt-[40px] px-[35px] py-[20px] ">
          <Button label="See all team"/>
        </div>
      </div>
    </section >
  )
}

export default Team
