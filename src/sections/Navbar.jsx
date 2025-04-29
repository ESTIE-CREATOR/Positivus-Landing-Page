import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavbarLogo } from "../positivus-assets/images";
import { navLinks } from '../constants';
import { hamburger } from "../positivus-assets/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mt-[25px] ">
      <nav className="max-container flex justify-between items-center w-full p-2 md:padding-x">
        <Link to="/">
          <img
            src={NavbarLogo}
            alt="header logo"
            width={219}
            height={56}
            className="flex flex-1 object-contain"
          />
        </Link>

        <ul className="hidden lg:flex  items-center justify-center space-x-1 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label} className="flex">
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `text-lg leading-normal font-grotesk ${
                    link.label === "Request a Quote"
                      ? "border-black border-2 px-[20px] py-[35px] rounded-[14px]"
                      : "px-[15px] py-[10px] rounded-md"
                  } ${
                    isActive && link.label !== "Request a Quote"
                      ? "bg-green-500 text-white"
                      : "text-black hover:text-gray-300"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="lg:hidden z-20" onClick={() => setIsOpen(!isOpen)}>
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
