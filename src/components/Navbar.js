import React, { useState, useEffect } from "react";
import { IoMenu, IoSunny, IoMoon } from "react-icons/io5";
import { IoClose, IoCallSharp, IoMailOpen } from "react-icons/io5";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSun, setSun] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setSun(!isSun);
  };

  useEffect(() => {
    // Apply theme to the entire page
    document.body.classList.toggle("dark-theme", !isSun);
  }, [isSun]);

  return (
    <>
      <div className="bg-white flex gap-3 md:gap-10 py-3 w-[92%]  mx-auto">
        <div className="flex justify-center items-center gap-5">
          <IoCallSharp />

          <p className="text-sm">+9193265 82108</p>
        </div>

        <div className="flex justify-center items-center gap-5">
          <IoMailOpen />

          <p className="text-sm">piyushp0512@gmail.com</p>
        </div>
      </div>
      <header className="px-10">
        <nav className="flex items-center justify-between max-w-full 2xl:max-w-[1580px] mx-auto">
          <div>
            <a href="/">
              <h1 className="text-black text-3xl font-bold">Procty</h1>
            </a>
          </div>
          <div
            className={`md:static bg-white md:bg-transparent absolute md:min-h-fit min-h-[40vh] left-0 ${
              isMenuOpen ? "top-[90px]" : "top-[-100%]"
            } md:w-auto w-[90%] left-[50%] translate-x-[-50%] md:translate-x-0 flex items-center px-5 duration-500 rounded-md`}
          >
            <ul className="flex md:flex-row flex-col items-center md:gap-[4vw] gap-12 w-full">
              <li>
                <a
                  className="md:text-black hover:text-blue-500 text-[0.9rem] ease-in-out duration-300 cursor-pointer"
                  to="aboutus"
                  smooth={true}
                  duration={500}
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="md:text-black hover:text-blue-500 text-[0.9rem] ease-in-out duration-300 cursor-pointer"
                  to="whychooseus"
                  smooth={true}
                  duration={500}
                >
                  Why choose us
                </a>
              </li>
              <li>
                <a
                  className="md:text-black hover:text-blue-500 text-[0.9rem] ease-in-out duration-300"
                  href="/Pricing"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="md:text-black hover:text-blue-500 text-[0.9rem] ease-in-out duration-300"
                  href="/Contactus"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-[#a6c1ee]	">
              Login
            </button>
            {isMenuOpen ? (
              <IoClose
                onClick={toggleMenu}
                className="text-3xl cursor-pointer md:hidden"
              />
            ) : (
              <IoMenu
                onClick={toggleMenu}
                className="text-3xl cursor-pointer md:hidden"
              />
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
