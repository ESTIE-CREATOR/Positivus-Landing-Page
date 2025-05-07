import { impactStats } from "../constants"




const Impact = () => {
  return (
    <section className="max-container mt-[40px] md:mt-[140px]">
    <div className="p-2 md:padding-x ">
    <div className="flex max-lg:justify-center max-lg:items-center flex-col lg:flex-row gap-10 ">
      <h2 className="flex items-center justify-center text-center text-[40px] bg-lime-green font-grotesk py-[10px] rounded-md border-[5px] border-lime-green  font-medium">Our Impact in Numbers</h2>
      <p className="font-grotesk flex items-center text-lg max-sm:text-center md:w-[450px]">A snapshot of the milestones and acheivements that drive our success</p>
    </div>

    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 mt-[80px]">
        {impactStats.map((stat, index) => (
          <div
            key={index}
            className="flex-1 px-4 py-6 text-center border-t-[1px] border-rich-black rounded-[30px]"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-black">{stat.value}</h3>
            <p className="text-sm md:text-base text-gray-700 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

    </div>
    </section>
  )
}

export default Impact
