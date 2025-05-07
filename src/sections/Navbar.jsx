import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavbarLogo } from "../positivus-assets/images";
import { navLinks } from "../constants";
import { hamburger } from "../positivus-assets/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mt-0 sm:mt-[20px]">
      <nav className="max-container flex justify-between items-center w-full p-2 md:px-[50px] relative">
        <Link to="/">
          <img
            src={NavbarLogo}
            alt="header logo"
            width={219}
            height={56}
            className="flex flex-1 object-contain max-sm:w-[150px] max-sm:h-[40px] "
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center justify-center space-x-2 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label} className="flex">
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `text-lg leading-normal font-grotesk ${
                    link.label === "Request a Quote"
                      ? "border-black border-2 py-[20px] px-[35px] rounded-[14px]"
                      : "px-[15px] py-[10px] rounded-md"
                  } ${
                    isActive && link.label !== "Request a Quote"
                      ? "bg-green-500 text-white"
                      : "text-black hover:text-green-500"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <div className="lg:hidden z-20" onClick={() => setIsOpen(!isOpen)}>
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>

        {/* Mobile Menu */}
        <ul
          className={`lg:hidden absolute top-full right-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.label} className="border-t border-gray-200">
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `block text-lg leading-normal font-grotesk ${
                    link.label === "Request a Quote"
                      ? "border-black border-2 py-[15px] px-[30px] rounded-[14px] mx-4 my-2"
                      : "px-4 py-3"
                  } ${
                    isActive && link.label !== "Request a Quote"
                      ? "bg-green-500 text-white"
                      : "text-black hover:text-gray-300"
                  }`
                }
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;