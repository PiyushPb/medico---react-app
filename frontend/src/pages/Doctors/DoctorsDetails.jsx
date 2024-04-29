import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import doctorImg from "../../assets/images/doctor-img02.png";
import { GoStarFill } from "react-icons/go";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePannel from "./SidePannel";

const DoctorsDetails = () => {
  const [tab, setTab] = useState("about");
  const [doctorData, setDoctorData] = useState({});

  const { id } = useParams();

  const fetchDrData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/doctors/${id}`
      );
      const data = await response.json();

      setDoctorData(data.data);
    } catch (error) {
      console.error("Error fetching doctor data:", error);
    }
  };

  useEffect(() => {
    fetchDrData();
  }, [id]);

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={doctorData?.photo} alt="" className="w-full" />
              </figure>
              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px=6 text-[12px] leading-4 lg:text-[14px] lg:leading-7 font-semibold rounded">
                  {doctorData?.specialty}
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold ">
                  {doctorData?.name}
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <GoStarFill className="text-yellowColor" />{" "}
                    {doctorData?.averageRating}{" "}
                    <span className="text-textColor">
                      ({doctorData?.totalRating})
                    </span>
                  </span>
                </div>
                <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                  {doctorData?.description}
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0086ff34]">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" &&
                  "border-b border-solid border-primaryColor "
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>

              <button
                onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback" &&
                  "border-b border-solid border-primaryColor "
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>
            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout doctorData={doctorData} />}
              {tab === "feedback" && (
                <Feedback
                  reviews={doctorData?.reviews}
                  totalRating={doctorData?.totalRating}
                />
              )}
            </div>
          </div>
          <div>
            <SidePannel
              doctorId={doctorData?._id}
              ticketPrice={doctorData?.ticketPrice}
              timeSlots={doctorData?.timeSlots}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsDetails;
