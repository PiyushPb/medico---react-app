import React from "react";

import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
import About from "../components/About/About";
import ServicesList from "../components/Services/ServicesList";
import FaqList from "../components/Faq/FaqList";

const Home = () => {
  return (
    <>
      <>
        <section className="hero__section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    We help patients live a healthy, longer life.
                  </h1>
                  <p className="text__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit, sint incidunt. Ullam dolor officia itaque iusto
                    tempore nobis. Doloribus dolorum rem ipsam, deleniti ea
                    quibusdam exercitationem voluptatem nostrum vitae labore?
                  </p>

                  <button className="btn">Request an Appointment</button>
                </div>

                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-textColor">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Years of Experience</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-textColor">
                      15+
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Clinic location</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-textColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[30px] justify-end">
                <div>
                  <img src={heroImg01} alt="" className="w-full" />
                </div>
              </div>
              <div className="mt-[30px] hidden md:block">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center">
                Providing the best medical services
              </h2>
              <p className="text__para text-center">
                World-class care for everyone. our health System offers
                unmatched, expert health care.
              </p>
            </div>

            <div className="flex flex-wrap items-center flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                <div className="py-[30px] px-5">
                  <div className="flex items-center justify-center">
                    <img src={icon01} alt="" />
                  </div>

                  <div className="mt-[30px]">
                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                      Find a Doctor
                    </h2>
                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                      World-class doctor care for everyone. our health System
                      offers unmatched, expert health care.
                    </p>
                    <Link
                      to="/doctors"
                      className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                    >
                      <BsArrowRight className="group-hover:text-white w-6 h-5" />
                    </Link>
                  </div>
                </div>
                <div className="py-[30px] px-5">
                  <div className="flex items-center justify-center">
                    <img src={icon02} alt="" />
                  </div>

                  <div className="mt-[30px]">
                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                      Find a Location
                    </h2>
                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                      World-class doctor care for everyone. our health System
                      offers unmatched, expert health care.
                    </p>
                    <Link
                      to="/doctors"
                      className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                    >
                      <BsArrowRight className="group-hover:text-white w-6 h-5" />
                    </Link>
                  </div>
                </div>
                <div className="py-[30px] px-5">
                  <div className="flex items-center justify-center">
                    <img src={icon03} alt="" />
                  </div>

                  <div className="mt-[30px]">
                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                      Book an Appointment
                    </h2>
                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                      World-class doctor care for everyone. our health System
                      offers unmatched, expert health care.
                    </p>
                    <Link
                      to="/doctors"
                      className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                    >
                      <BsArrowRight className="group-hover:text-white w-6 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --------------------- about section --------------------- */}
        <About />

        {/* --------------------- service section --------------------- */}
        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">
                Providing the best medical services
              </h2>
              <p className="text__para text-center">
                World-class care for everyone. our health System offers
                unmatched, expert health care.
              </p>
            </div>

            <ServicesList />
          </div>
        </section>

        {/* --------------------- features section ---------------------  */}
        <section>
          <div className="container">
            <div className="flex items-center justify-between flex-col lg:flex-row">
              <div className="xl:w-[670px]">
                <h2 className="heading">
                  Get virtual treatment <br /> anytime anywhere!
                </h2>
                <ul className="pl-4">
                  <li className="para__text mt-2">
                    1. Schedule the appointment directly.
                  </li>
                  <li className="para__text mt-2">
                    2. Loream ipsum is a placeholder text commonly used to
                    demonstrate.
                  </li>
                  <li className="para__text mt-2">
                    3. Loream ipsum is a placeholder text commonly used to
                    demonstrate.
                  </li>
                </ul>
              </div>
              {/* ------------- features image ------------- */}
              <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                <img src={featureImg} alt="" className="3/4" />

                {/* <div className="w-[150px] lg:w-[248px] bg-red-500 absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]"></div> */}
              </div>
            </div>
          </div>
        </section>
        {/* ------------- FAQ Sections -------------*/}
        <section>
          <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-0">
              <div className="w-1/2 hidden md:block">
                <img src={faqImg} alt="" />
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="heading">Frequently Asked Questions</h2>
                <FaqList />
              </div>
            </div>
          </div>
        </section>
        {/* --------------------- footer section --------------------- */}
      </>
    </>
  );
};

export default Home;
