import React, { useState } from "react";
import Success from "./diabetes/success";
import Fail from "./diabetes/Fail";

const DiabetesPrediction = () => {
  const [formData, setFormData] = React.useState({
    noofpregnancies: "",
    glucoselevel: "",
    bloodpressure: "",
    skinfoldthickness: "",
    insulindose: "",
    bodymassindex: "",
    diabetespedigreefunction: "",
    age: "",
  });

  const [result, setResult] = useState(null);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const floatValues = Object.values(formData).map(parseFloat);
    const values = floatValues.join(",");

    fetch("http://127.0.0.1:5000/api/v1/diabetesPrediction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input_data: values }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setResult(data.prediction);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mt-10">Diabetes Prediction</h1>
      <p className="text-lg mt-2">Diabetes Prediction</p>

      <form className="mt-10">
        <div className="flex gap-2 flex-wrap">
          <div className="mb-5 flex-grow">
            <label
              htmlFor="noofpregnancies"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Number of Pregnancies
            </label>
            <input
              type="text"
              id="noofpregnancies"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Number of pregnancies"
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="mb-5 flex-grow">
            <label
              htmlFor="glucoselevel"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Glucose level
            </label>
            <input
              type="text"
              id="glucoselevel"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Glucose level"
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="mb-5 flex-grow">
            <label
              htmlFor="bloodpressure"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Blood pressure
            </label>
            <input
              type="text"
              id="bloodpressure"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Blood pressure value"
              required
              onChange={handleFormChange}
            />
          </div>
        </div>
        {/* ------------ col 2 ------------ */}
        <div className="flex gap-2 flex-wrap">
          <div className="mb-5 flex-grow">
            <label
              htmlFor="skinfoldthickness"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Skin thickness value
            </label>
            <input
              type="text"
              id="skinfoldthickness"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Number of pregnancies"
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="mb-5 flex-grow">
            <label
              htmlFor="insulindose"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Insuline level
            </label>
            <input
              type="text"
              id="insulindose"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Insuline level"
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="mb-5 flex-grow">
            <label
              htmlFor="bodymassindex"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              BMI
            </label>
            <input
              type="text"
              id="bodymassindex"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Body mass index"
              required
              onChange={handleFormChange}
            />
          </div>
        </div>

        {/* ------------- col 3 ------------ */}
        <div className="flex gap-2 flex-wrap">
          <div className="mb-5 flex-grow">
            <label
              htmlFor="diabetespedigreefunction"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Diabetes pedigree function value
            </label>
            <input
              type="text"
              id="diabetespedigreefunction"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Diabetes pedigree function value"
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="mb-5 flex-grow">
            <label
              htmlFor="age"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Age
            </label>
            <input
              type="text"
              id="age"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Age"
              required
              onChange={handleFormChange}
            />
          </div>
        </div>
        <button className="btn mt-1" onClick={handleSubmit}>
          Diabetes test result
        </button>
      </form>
      {result !== null ? result === 1 ? <Fail /> : <Success /> : null}
    </div>
  );
};

export default DiabetesPrediction;
