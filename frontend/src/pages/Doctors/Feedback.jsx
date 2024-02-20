import React, { useState } from "react";

import avatar from "../../assets/images/avatar-icon.png";
import { formateDate } from "../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";

const Feedback = ({ reviews, totalRating }) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews ({totalRating})
        </h4>
        {reviews?.map((review, index) => (
          <div key={index} className="flex justify-between gap-10 mb-[30px]">
            {console.log(review)}
            <div className="flex gap-3">
              <figure className="w-10 h-10 rounded-full">
                <img
                  src={review?.photo}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </figure>

              <div>
                <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                  {review?.userName}
                </h5>
                <p className="text-[14px] leading-6 text-textColor">
                  {formateDate(review?.createdAt)}
                </p>
                <p className="text__para mt-3 font-medium text-[15px]">
                  {review?.reviewText}
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              {[...Array(review?.rating).keys()].map((_, index) => (
                <AiFillStar keys={index} color="#0067FF" key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}
      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
