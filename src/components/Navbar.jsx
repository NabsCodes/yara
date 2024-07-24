import { useState, useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";
import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => setIsMenuOpen(false)); // Close the menu when the user clicks outside of it

  const handleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-[#dbf0ff] bg-opacity-[0.9] transition-all duration-300 ease-in-out dark:bg-[#2a3d5f] dark:bg-opacity-[0.9]">
      <motion.nav
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0.4,
            ease: [0.44, 0, 0, 1],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="mx-auto flex h-24 max-w-[1240px] items-center justify-between px-4 py-5"
      >
        <h1 className="text-3xl font-bold text-[#7854F7]">YARA</h1>
        <ul className="hidden cursor-pointer text-[#444444] dark:text-gray-200 md:flex">
          <li className="m-2 transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#7854F7] lg:m-8">
            Sell
          </li>
          <li className="m-2 transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#7854F7] lg:m-8">
            Marketplace
          </li>
          <li className="m-2 transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#7854F7] lg:m-8">
            Community
          </li>
          <li className="m-2 transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#7854F7] lg:m-8">
            Develop
          </li>
          <li className="m-2 transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#7854F7] lg:m-8">
            Resources
          </li>
        </ul>
        <div className="hidden items-center justify-between md:flex md:gap-x-2 lg:gap-x-4">
          <span className="cursor-pointer text-[16px] font-normal text-[#444444] transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#7854F7] dark:text-gray-200">
            Log in
          </span>
          <button
            className="cursor-pointer rounded-[20px] bg-[#7854F7] px-[20px] py-1.5 text-[16px] font-bold text-white transition-all duration-300 ease-in-out hover:bg-[#9f77ff] lg:px-[30px] lg:py-2.5"
            aria-label="Get Started"
          >
            Get Started
          </button>
        </div>
        <button onClick={handleNav} className="block md:hidden">
          {!isMenuOpen && <MenuIcon />}
        </button>
        {isMenuOpen && (
          <button
            className="fixed inset-0 z-10 bg-black bg-opacity-30"
            aria-label="Close Menu"
            onClick={handleNav} // Optional: Close the menu when clicking on the overlay
          ></button>
        )}
        <aside
          className={`fixed top-0 z-50 md:hidden ${
            isMenuOpen
              ? "visible left-0 opacity-100"
              : "invisible -translate-x-full opacity-0"
          } -webkit-overflow-scrolling:touch h-full w-[70%] overflow-y-auto bg-white px-4 py-5 shadow-[0px_23px_30px_0px_rgba(0,0,0,0.1)] transition-all duration-500 ease-in-out dark:bg-gray-800`}
          ref={ref}
        >
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-[#7854F7]">YARA</h1>
            <CloseIcon onClick={handleNav} />
          </div>
          <ul className="cursor-pointer text-[#444444] dark:text-gray-200">
            <li className="mt-3 border-b border-gray-600 py-4 transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#7854F7]">
              Sell
            </li>
            <li className="border-b border-gray-600 py-4 transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#7854F7]">
              Marketplace
            </li>
            <li className="border-b border-gray-600 py-4 transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#7854F7]">
              Community
            </li>
            <li className="border-b border-gray-600 py-4 transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#7854F7]">
              Develop
            </li>
            <li className="mb-3 border-b border-gray-600 py-4 transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#7854F7]">
              Resources
            </li>
          </ul>
          <div className="flex flex-col items-start justify-between gap-y-4">
            <span className="mt-2 cursor-pointer text-[16px] font-semibold text-[#444444] transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#7854F7] dark:text-gray-200">
              Log in
            </span>
            <button
              className="w-full cursor-pointer rounded bg-[#7854F7] px-[30px] py-2.5 text-[16px] font-bold text-white transition-all duration-300 ease-in-out hover:bg-[#9f77ff]"
              aria-label="Get Started"
            >
              Get Started
            </button>
          </div>
        </aside>
      </motion.nav>
    </header>
  );
};

export default Navbar;
