import { CheckCircle } from "lucide-react"
import { plans } from "../constants"


const Pricing = () => {
  return (
    <section className="w-full min-h-screen max-container md:padding-x px-4 mt-[50px] ">
        <div className="flex flex-col">
      <div className="flex flex-col">
        <h1 className="font-grotesk font-medium text-[100px] max-sm:text-[70px]">Pricing</h1>
        <p className="font-grotesk text-[30px] mt-[20px] max-sm:text-[18px] ">Elevate Your Online Presence: Competitive Pricing <br /> for excetional Results</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl sm:mx-auto mt-[80px]">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-3xl border-[1px] border-b-[4px] border-rich-black pl-6 pr-6 pb-6 pt-4 md:pl-8 md:pr-8 md:pb-8  md:pt-6 flex flex-col justify-between  ${plan.bg} ${plan.text}`}
          >
            <div className="flex justify-end">
            {plan.popular && (
              <span className=" text-xs px-2 py-1 bg-lime-400 text-black rounded-full font-semibold font-grotesk">
                Popular
              </span>
            )}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 font-grotesk">{plan.title}</h3>
              <p className="text-3xl font-bold mb-6 font-grotesk">
                {plan.price}
                <span className="text-base font-normal font-grotesk"> /month</span>
              </p>

              <button className={`w-full font-grotesk py-2 rounded-lg mb-3 ${plan.buttonStyle} font-medium transition-transform duration-200 hover:-translate-x-2 hover:underline max-sm:text-[18px]`}>
                Get Started
              </button>
              <button className="w-full font-grotesk py-2 rounded-lg border border-gray-400 font-medium transition-transform duration-200 hover:-translate-x-2 hover:underline max-sm:text-[18px] ">
                Request a quote
              </button>

              <hr className="my-6 border-gray-300" />

              <ul className="space-y-3 text-sm">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="text-lime-400 w-5 h-5 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      

      </div>
    </section>
  )
}

export default Pricing
