import React from "react";
import { GoStarFill } from "react-icons/go";

import doctorImg01 from "../../assets/images/doctor-img01.png";
const DoctorCard = (props) => {
  return (
    <div className="">
      <img src={props.doctor.photo} alt="" />
      <h3 className="text-xl font-[700] text-headingColor mt-3">
        {props.doctor.name}
      </h3>
      <div className="flex items-center gap-1 justify-between mt-2">
        <p className="text-lg font-[400] bg-[#a5f3fc] text-[#0ea5e9] w-fit py-2 px-5 rounded-md">
          {props.doctor.specialty}
        </p>
        <div className="flex items-center gap-1">
          <GoStarFill className="text-yellowColor" /> {props.doctor.avgRating}{" "}
          <span className="text-[#a5a5a5]"> ({props.doctor.totalRating})</span>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
