import { seoServices } from "../constants"


const SEO = () => {
  return (
    <section className="max-container mt-[40px] md:mt-[140px]">
    <div className="p-2 md:padding-x ">
    <div className="flex max-lg:justify-center max-lg:items-center flex-col lg:flex-row gap-10 ">
      <h2 className="flex items-center justify-center text-center text-[40px] bg-lime-green font-grotesk py-[10px] rounded-md border-[5px] border-lime-green  font-medium">How We Work: SEO Process</h2>
      <p className="font-grotesk flex items-center text-lg w-[450px]">
      Our step-by-step SEO process ensures your website ranks higher, attracts more traffic and drives lasting results. </p>
    </div>

    <div className="w-full flex flex-col mt-[80px] gap-[20px] ">
      {seoServices.map((seos) => (
        <div className="flex items-start bg-light-gray rounded-[45px] py-[40px] gap-10 px-[60px] ">

          <div>
             <div className="w-16 h-16 bg-black text-lime-400 flex items-center justify-center font-bold text-lg" style={{ clipPath: "polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)",}}>
               {seos.id}
             </div>
          </div>

          <div>
            <h3 className="font-grotesk font-bold">{seos.label}</h3>
            <p className="font-grotesk text-[18px] ">{seos.description}</p>
          </div>


        </div>
      ))}

    </div>

    </div>  
    </section>
  )
}

export default SEO
