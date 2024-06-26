import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.linkedin.com/in/santosh-narvekar-7664a5259/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/prathamesh_0620/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const quickLinks02 = [
  {
    path: "/",
    display: "Prathamesh Sonwane",
  },
  {
    path: "/",
    display: "Sanket",
  },
  {
    path: "/",
    display: "Rohan",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Privacy Policy",
  },
  {
    path: "/",
    display: "Terms & Conditions",
  },
  {
    path: "/",
    display: "FAQ",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={Logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright © {year} developed by Prathamesh, Santosh and Ajinkya.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
