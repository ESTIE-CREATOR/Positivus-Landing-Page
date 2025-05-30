import { ArrowUpRight } from "lucide-react";


const ServiceCard = ({ label, src, index }) => {

    let bgColor = '';
    let textColor = '';
    let iconText = '';
    let iconBg = '';
  
    if (index === 0 || index === 4) {
      // Lime card
      bgColor = 'bg-lime-300';
      textColor = 'text-black';
      iconText = 'text-lime-300';
      iconBg = 'bg-black';
    } else if (index === 2 || index === 5) {
      // Black card
      bgColor = 'bg-black';
      textColor = 'text-white';
      iconText = 'text-black';
      iconBg = 'bg-white';
    } else {
      // Gray card
      bgColor = 'bg-gray-100';
      textColor = 'text-black';
      iconText = 'text-gray-400';
      iconBg = 'bg-black';
    }

  return (
    <div className={`flex justify-between items-center gap-[30px] md:gap-[75px] border-rich-black border-[1px] border-b-[4px] rounded-[45px] ${bgColor} ${textColor} w-full p-[50px]`}>
    <div className="flex flex-col">
        <h3 className="text-[30px] font-grotesk font-medium max-sm:text-[25px]">{label}</h3>
        <button className="flex justify-between items-center w-[164px] h-[41px]  md:mt-[90px] transition-transform duration-200 hover:-translate-y-2 hover:underline max-sm:hover:-translate-y-1">
        <span className={`p-2 rounded-full ${iconBg}`}>
          <ArrowUpRight className={`stroke-current ${iconText}`} />
        </span>
            <span className="max-sm:hidden font-grotesk text-[20px]">Learn more</span>
        </button>
        </div>

        <img
  src={src}
  alt="illustration"
  className="w-full max-w-[115px] sm:max-w-[210px] h-auto object-contain mx-auto sm:mx-0"
/>
      
    </div>
  )
}

export default ServiceCard
