import React from "react";
import { Link } from "react-router-dom";
import { GoStarFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";

const DoctorCard = (props) => {
  return (
    <div className="relative">
      <img src={props.doctor.photo} alt="" />
      <h3 className="text-xl font-[700] text-headingColor mt-3">
        {props.doctor.name}
      </h3>
      <div className="flex items-center gap-1 justify-between mt-2">
        <p className="text-lg font-[400] bg-[#a5f3fc] text-[#0ea5e9] w-fit py-2 px-5 rounded-md">
          {props.doctor.specialty}
        </p>
        <div className="flex items-center gap-1">
          <GoStarFill className="text-yellowColor" />{" "}
          {props.doctor.averageRating}{" "}
          <span className="text-[#a5a5a5]"> ({props.doctor.totalRating})</span>
        </div>
      </div>
      <Link
        className="absolute mt-5 text-[#0ea5e9] flex gap-2 items-center justify-center hover:text-[#126b94] transition-[color]"
        to={`/doctors/${props.doctor._id}`}
      >
        View Profile <FaArrowRight />
      </Link>
    </div>
  );
};

export default DoctorCard;
