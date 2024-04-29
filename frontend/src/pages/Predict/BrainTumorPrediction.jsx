import React, { useState } from "react";
import axios from "axios";
import uploadGif from "../../assets/images/upload.gif";

const BrainTumorPrediction = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handlePredict = async () => {
    if (image) {
      try {
        const formData = new FormData();
        formData.append("image", dataURItoBlob(image));

        const response = await axios.post(
          "http://ec2-65-0-139-126.ap-south-1.compute.amazonaws.com:5000/api/v1/brainTumorPrediction",
          formData
        );

        if (response.status === 200) {
          const result = response.data;
          setResult(result.prediction);
        } else {
          // Handle errors
          console.error("Failed to get prediction result");
        }
      } catch (error) {
        console.error("Error while making prediction request", error);
      }
    }
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const getResultInfo = () => {
    if (result === 0) {
      return (
        <div className="result-info" style={{ color: "red" }}>
          <p className="result-title">Detected: Glioma Tumor</p>
          <p className="result-description">
            Glioma is a type of tumor that occurs in the brain and spinal cord.
            It can be malignant or benign. Consult with a medical professional
            for further evaluation and treatment options.
          </p>
          <p className="result-link">
            <a
              href="https://www.cancer.gov/types/glioma"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more about Glioma Tumor
            </a>
          </p>
        </div>
      );
    } else if (result === 1) {
      return (
        <div className="result-info" style={{ color: "red" }}>
          <p className="result-title">Detected: Meningioma Tumor</p>
          <p className="result-description">
            Meningioma is a typically slow-growing tumor that forms in the
            meninges, the layers of tissue covering the brain and spinal cord.
            Consult with a medical professional for further evaluation and
            treatment options.
          </p>
          <p className="result-link">
            <a
              href="https://www.cancer.gov/types/meningioma"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more about Meningioma Tumor
            </a>
          </p>
        </div>
      );
    } else if (result === 2) {
      return (
        <div className="result-info" style={{ color: "green" }}>
          <p className="result-title">No Tumor Detected</p>
          <p className="result-description">
            Great news! Based on the analysis, there is no evidence of a brain
            tumor in the provided image. Regular check-ups with a healthcare
            professional are recommended for continued health monitoring.
          </p>
        </div>
      );
    } else if (result === 3) {
      return (
        <div className="result-info" style={{ color: "red" }}>
          <p className="result-title">Detected: Pituitary Tumor</p>
          <p className="result-description">
            Pituitary tumors are growths that occur in the pituitary gland,
            affecting hormone production. Consult with a medical professional
            for further evaluation and treatment options.
          </p>
          <p className="result-link">
            <a
              href="https://www.cancer.gov/types/pituitary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more about Pituitary Tumor
            </a>
          </p>
        </div>
      );
    } else {
      return null;
    }
  };

  // Helper function to convert data URI to Blob
  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: "image/png" });
  };

  return (
    <div className="container" onDragOver={preventDefault} onDrop={handleDrop}>
      <h1 className="text-3xl font-bold mt-10">BrainTumor Detection</h1>
      <p className="text-lg mt-2">
        Brain tumor prediction works by taking a picture of the brain MRI scan
        and detecting if there is a tumor
      </p>

      <div className="w-full h-fit flex flex-col justify-center items-center">
        <div
          className="drop-zone w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] cursor-pointer mt-8 overflow-hidden"
          onDragEnter={preventDefault}
          onDragLeave={preventDefault}
        >
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="hidden "
            id="fileInput"
          />
          <label htmlFor="fileInput" className="drop-zone-label">
            {image ? (
              <img
                src={image}
                alt="Uploaded"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] flex justify-center items-center border-2 border-dashed border-gray-600 p-3">
                <img
                  src={uploadGif}
                  className="w-[100px] sm:w-[250px]"
                  alt=""
                />
              </div>
            )}
          </label>
        </div>
        <button
          onClick={handlePredict}
          className="mt-4 p-4 bg-blue-500 text-white max-w-[500px] w-full rounded-full ease-in-out  hover:bg-blue-600 transition duration-200"
        >
          Predict
        </button>

        {result !== null && getResultInfo()}
      </div>
    </div>
  );
};

export default BrainTumorPrediction;
