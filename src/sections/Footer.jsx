
import { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import { navLinks } from '../constants';
import { FooterLogo } from "../positivus-assets/images"
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";


const footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <div className="max-container p-2 md:padding-x mt-[40px] md:mt-[140px]" >

      <div className="bg-rich-black rounded-t-[45px] rounded-b-none px-[60px] pt-[55px] ">

        <div className="flex md:justify-between items- flex-row max-md:flex-col max-md:gap-5 justify-center">
          <div className="flex items-center justify-center md:justify-end">
              <img src={FooterLogo} alt="footer logo" width={180} height={29} className="object-contain" />
              </div>

           <ul className="hidden lg:flex  items-center justify-center space-x-1 max-lg:hidden">
                     {navLinks
  .filter(link => link.label !== "Pricing" && link.label !== "Request a Quote")
  .map((link) => (
                       <li key={link.label} className="flex">
                         <NavLink
                           to={link.href}
                           className={({ isActive }) =>
                             `text-lg leading-normal font-grotesk px-[15px] py-[10px] rounded-md
                              ${
                               isActive && link.label !== "Request a Quote"
                                 ? "bg-green-500 text-white"
                                 : "text-white hover:text-gray-300"
                             }`
                           }
                         >
                           {link.label}
                         </NavLink>
                       </li>
                     ))}
                   </ul>
     
            <div className="flex items-center justify-center gap-[20px] max-md:hidden">
            <FaLinkedin className="text-white w-6 h-6" />
            <FaTwitter className="text-white w-6 h-6" />
            <FaFacebook className="text-white w-6 h-6" />
            </div>
            

        </div>

        <div className="text-white mt-[66px] flex flex-row max-lg:flex-col justify-between items-center w-full gap-[154px] mb-[50px] ">
          <div className="flex  flex-col">
            <div>
            <button className="font-grotesk text-[20px] bg-lime-green rounded-[7px] px-[7px] py-[0px] hover:bg-lime-green/80 transition-all duration-300 ease-in-out text-black">
              Contact Us:
            </button>
            </div>
            <div className="flex flex-col gap-[20px] mt-[27px]">
              <p className="text-white text-[18px] font-grotesk">Email: info@positivus.com</p>
              <p className="text-white text-[18px] font-grotesk">Phone: 555-567-8901</p>
              <p className="text-white text-[18px] font-grotesk">Address: 1234 Main St <br />Moonstone City, Stardust State 12345</p>
            </div>
          </div>

        
          <label className="flex justify-evenly max-lg:flex-col gap-[20px] bg-deep-gray px-[40px] py-[58px]  ">
            <input type="text" placeholder="Email" className="flex-1 bg-deep-gray border-[1px] border-white rounded-[14px] pl-3  " />
            <div className="w-full">
            <button className="font-grotesk text-[20px] bg-lime-green rounded-[14px]  hover:bg-lime-green/80 transition-all duration-300 ease-in-out text-black px-[35px] py-[20px] md:w-[300px]">
             Subscribe to news
            </button>
            </div>
          </label>
         
        </div>

        <div className="flex items-center justify-center gap-[20px] md:hidden mb-[30px] ">
            <FaLinkedin className="text-white w-6 h-6" />
            <FaTwitter className="text-white w-6 h-6" />
            <FaFacebook className="text-white w-6 h-6" />
            </div>

        <div className="mt-[50px] bg-light-gray w-full h-[1px]">
          
        </div>

        <div className="flex max-sm:flex-col items-center mt-[50px] gap-[40px] pb-[50px]">
          <p className="text-white text-[16px] font-grotesk max-sm:text-center">© 2023 Positivus. All rights reserved.</p>
          <p className="text-white text-[16px] font-grotesk max-sm:text-center">Privacy Policy</p>
        </div>

        </div>
        

      </div>
      
    </section>
  )
}

export default footer
