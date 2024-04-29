import React from "react";

const cardData = [
  {
    id: 1,
    title: "Diabetes Prediction Model",
    imageUrl:
      "https://domf5oio6qrcr.cloudfront.net/medialibrary/10051/diabetes-and-healthy-lifestyle.jpg",
    description:
      "This prediction model uses various machine learning techniques to predict if the person has diabetes or not.",
    onClick: (setPage) => {
      setPage(2);
    },
  },
  {
    id: 2,
    title: "Heart Disease Prediction",
    imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8",
    description:
      "This prediction model uses Linear Regression to predict the probability of heart patient based on the patient's data.",
    onClick: (setPage) => {
      setPage(3);
    },
  },
  {
    id: 3,
    title: "Brain Tumor Detection",
    imageUrl:
      "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2014/10/30/15/17/mcdc7_brain_cancer-8col.jpg",
    description:
      "This prediction model uses Linear Regression to predict the probability of brain tumor based on the patient's data.",
    onClick: (setPage) => {
      setPage(4);
    },
  },
  {
    id: 4,
    title: "Drug suggestion based on symptoms",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
    description:
      "This prediction model uses Linear Regression to predict the probability of drug based on the patient's symptoms data.",
    onClick: (setPage) => {
      setPage(5);
    },
  },
];

const Cards = (props) => {
  return (
    <div className="container py-10 flex justify-between gap-10 flex-wrap">
      {cardData.map((card) => (
        <div key={card.id}>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col justify-between">
            <a href="#">
              <img
                className="rounded-t-lg max-h-[350px] h-[350px] w-full object-cover"
                src={card.imageUrl}
                alt=""
              />
            </a>
            <div className="p-5">
              <button onClick={() => card.onClick(props.setPage)}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {card.title}
                </h5>
              </button>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {card.description}
              </p>
              <a
                onClick={() => card.onClick(props.setPage)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"
              >
                Start Prediction
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
