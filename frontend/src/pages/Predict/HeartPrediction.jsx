import React, { useState } from "react";
import Fail from "./diabetes/Fail";
import Success from "./diabetes/success";

const HeartPrediction = () => {
  const [formData, setFormData] = React.useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
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

    console.log(values);

    fetch("http://127.0.0.1:5000/api/v1/heartPrediction", {
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
        console.log(data.prediction);
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
              htmlFor="age"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              age
            </label>
            <input
              type="text"
              id="age"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="age"
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="mb-5 flex-grow">
            <label
              htmlFor="sex"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              sex
            </label>
            <input
              type="text"
              id="sex"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="sex"
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="mb-5 flex-grow">
            <label
              htmlFor="cp"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              cp
            </label>
            <input
              type="text"
              id="cp"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="cp"
              required
              onChange={handleFormChange}
            />
          </div>
        </div>
        {/* ------------ col 2 ------------ */}
        <div className="flex gap-2 flex-wrap">
          <div className="mb-5 flex-grow">
            <label
              htmlFor="trestbps"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              trestbps
            </label>
            <input
              type="text"
              id="trestbps"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="trestbps"
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="mb-5 flex-grow">
            <label
              htmlFor="chol"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              chol
            </label>
            <input
              type="text"
              id="chol"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="chol"
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="mb-5 flex-grow">
            <label
              htmlFor="fbs"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              fbs
            </label>
            <input
              type="text"
              id="fbs"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="fbs"
              required
              onChange={handleFormChange}
            />
          </div>
        </div>

        {/* ------------- col 3 ------------ */}
        <div className="flex gap-2 flex-wrap">
          <div className="mb-5 flex-grow">
            <label
              htmlFor="restecg"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              restecg
            </label>
            <input
              type="text"
              id="restecg"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="restecg"
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="mb-5 flex-grow">
            <label
              htmlFor="thalach"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              thalach
            </label>
            <input
              type="text"
              id="thalach"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="thalach"
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="mb-5 flex-grow">
            <label
              htmlFor="exang"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              exang
            </label>
            <input
              type="text"
              id="exang"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="exang"
              required
              onChange={handleFormChange}
            />
          </div>
        </div>
        {/* ------------- col 4 ------------ */}
        <div className="flex gap-2 flex-wrap">
          <div className="mb-5 flex-grow">
            <label
              htmlFor="oldpeak"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              oldpeak
            </label>
            <input
              type="text"
              id="oldpeak"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="oldpeak"
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="mb-5 flex-grow">
            <label
              htmlFor="slope"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              slope
            </label>
            <input
              type="text"
              id="slope"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="slope"
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="mb-5 flex-grow">
            <label
              htmlFor="ca"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ca
            </label>
            <input
              type="text"
              id="ca"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="ca"
              required
              onChange={handleFormChange}
            />
          </div>
        </div>
        {/* ------------- col 5 ------------ */}
        <div className="flex gap-2 flex-wrap max-w-[33%]">
          <div className="mb-5 flex-grow">
            <label
              htmlFor="thal"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              thal
            </label>
            <input
              type="text"
              id="thal"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="thal"
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

export default HeartPrediction;
