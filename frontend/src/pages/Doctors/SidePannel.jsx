import React, { useEffect, useState } from "react";

const SidePannel = (props) => {
  console.log(props.doctorData);

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {props.doctorFees} ₹
        </span>
      </div>
      <div className="mt-[30xpx]">
        <p className="text__para mt-0font-semibold text-headingColor">
          Available time slots:
        </p>
        <ul className="mt-3">
          {props.doctorData?.map((timeSlot, index) => (
            <li key={index} className="flex justify-between items-center mt-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {`${timeSlot?.day}`}
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {`${timeSlot?.startingTime}`} - {`${timeSlot?.endingTime}`}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <button className="btn w-full px-2 rounded-md">Book appointment</button>
    </div>
  );
};

export default SidePannel;
