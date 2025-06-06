import { contactIllustration } from "../positivus-assets/images"


const Contact = () => {
  return (
   <section>
          <div className="max-container p-2 md:padding-x md:mt-[50px]">
         
         
         <div className="bg-light-gray rounded-[45px] p-6 sm:pl-8 sm:pt-8 sm:pb-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
             {/* Form */}
             <div className="flex flex-col w-full lg:w-1/2 gap-6 sm:gap-8">
               {/* Radio Buttons */}
               <div className="flex items-center gap-4 sm:gap-6">
                 <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                   <input
                     type="radio"
                     name="contact-type"
                     className="w-6 h-6 sm:w-7 sm:h-7 accent-lime-green"
                     defaultChecked
                   />
                   <p className="text-[16px] sm:text-[18px] font-grotesk">Say Hi</p>
                 </label>
                 <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                   <input
                     type="radio"
                     name="contact-type"
                     className="w-6 h-6 sm:w-7 sm:h-7 accent-lime-green"
                   />
                   <p className="text-[16px] sm:text-[18px] font-grotesk">Get a Quote</p>
                 </label>
               </div>
   
               {/* Form Inputs */}
               <div className="flex flex-col gap-4 sm:gap-6">
                 <div className="flex flex-col">
                   <label className="text-[14px] sm:text-[16px] font-grotesk">Name</label>
                   <input
                     type="text"
                     placeholder="Name"
                     className="w-full h-[50px] sm:h-[60px] mt-1 sm:mt-2 border-black border-[1px] bg-white rounded-[14px] px-4 sm:px-5 text-black text-[16px] sm:text-[18px] font-grotesk focus:outline-none"
                     required
                   />
                 </div>
   
                 <div className="flex flex-col">
                   <label className="text-[14px] sm:text-[16px] font-grotesk">Email*</label>
                   <input
                     type="email"
                     placeholder="Email"
                     className="w-full h-[50px] sm:h-[60px] mt-1 sm:mt-2 border-black border-[1px] bg-white rounded-[14px] px-4 sm:px-5 text-black text-[16px] sm:text-[18px] font-grotesk focus:outline-none"
                     required
                   />
                 </div>
   
                 <div className="flex flex-col">
                   <label className="text-[14px] sm:text-[16px] font-grotesk">Message*</label>
                   <textarea
                     rows="5"
                     placeholder="Message"
                     className="w-full mt-1 sm:mt-2 border-black border-[1px] bg-white rounded-[14px] px-4 sm:px-5 py-3 text-black text-[16px] sm:text-[18px] font-grotesk focus:outline-none"
                     required
                   />
                 </div>
               </div>
   
               {/* Send Message Button */}
               <button className="w-full sm:w-[200px] h-[50px] sm:h-[60px] bg-black text-white rounded-[14px] text-[16px] sm:text-[18px] font-grotesk hover:bg-gray-800 transition-transform duration-200 hover:-translate-y-2 ">
                 Send Message
               </button>
             </div>
   
             {/* Illustration */}
             <div className="w-full lg:w-1/2 max-sm:hidden">
               <img
                 src={contactIllustration}
                 alt="Contact illustration"
                 className="w-full h-[648px] object-contain object-right"
               />
             </div>
           </div>
   
         </div>
       </section>
  )
}

export default Contact
