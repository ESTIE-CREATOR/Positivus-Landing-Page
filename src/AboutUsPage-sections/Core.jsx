import { values } from "../constants"
import { servicesIllustration7 } from "../positivus-assets/images"


const Core = () => {
  return (
  <section className="max-container mt-[40px] md:mt-[140px]">
    <div className="p-2 md:padding-x ">
    <div className="flex max-lg:justify-center max-lg:items-center flex-col lg:flex-row gap-10 ">
      <h2 className="flex items-center justify-center text-center text-[40px] bg-lime-green font-grotesk py-[10px] rounded-md border-[5px] border-lime-green  font-medium">Core Values</h2>
      <p className="font-grotesk flex items-center text-lg w-[350px]">At the heart of everything we do are our core values: </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] mt-[80px]">
      {values.map((value, index) => (
        <div  key={index} className="flex justify-between items-center border-[1px] rounded-[45px] border-rich-black p-[50px] " >
         <div>
          <h3 className="text-[32px] font-bold mb-2 text-rich-black font-grotesk">{value.label}</h3>
          <div className="w-full h-[1px] bg-rich-black mb-[30px] "></div>
          <p className="text-rich-black font-grotesk">{value.des}</p>
          </div>
          {value.src && (
              <img
                src={value.src}
                alt={value.label}
                className="w-full max-w-[180px] sm:max-w-[210px] h-auto object-contain mx-auto sm:mx-"
               
              />
            )}
        </div>
      ))}
    </div>

    <div className="flex flex-row max-sm:flex-col justify-between items-center flex-1 w-full bg-rich-black rounded-[45px] mt-[123px] px-[60px] mb-[23]">
    <div className="max-sm:hidden">
          <img src={servicesIllustration7} alt="Illustration" width={500} height={394} />
        </div>

        <div className="flex flex-col gap-[26px] py-[60px] max-w-[500px]">
          <p className="font-grotesk text-[40px] text-white font-bold">"At Positivus, we believe that success is built on innovation, collaboration and a relentless focus on delivering results"</p>
           <p className="font-grotesk text-[25px] text-white">-John smith, Founder of Positivus</p>
        </div>
        
      </div>

    </div>
   </section>
  )
}

export default Core
