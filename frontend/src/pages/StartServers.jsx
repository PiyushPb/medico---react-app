import React, { useEffect, useState } from "react";
import axios from "axios";

const StartServers = () => {
  const [BrainTumorServerStatus, setBrainTumorServerStatus] =
    useState("Server down");
  const [HeartDiseaseServerStatus, setHeartDiseaseServerStatus] =
    useState("Server down");
  const [DiabetesDiseaseServerStatus, setDiabetesDiseaseServerStatus] =
    useState("Server down");

  const getServerStatus = async () => {
    const diabetesServerCall = await axios(
      "https://medicobhbackendapi.onrender.com/ping"
    );

    if (diabetesServerCall.data === "pong") {
      setDiabetesDiseaseServerStatus("Server running...");
      setHeartDiseaseServerStatus("Server running...");
    } else {
      setDiabetesDiseaseServerStatus("Server down");
    }

    const brainTumorServerCall = await axios(
      "http://ec2-65-0-139-126.ap-south-1.compute.amazonaws.com:5000/ping"
    );

    if (brainTumorServerCall.data === "pong") {
      setBrainTumorServerStatus("Server running...");
    } else {
      setBrainTumorServerStatus("Server down");
    }
  };

  useEffect(() => {
    getServerStatus();
  }, []);

  return (
    <div className="container m-5">
      <div className="text-3xl font-bold">Server Status</div>
      <div className="flex items-center mt-5 gap-5">
        <p>Brain Tumor Server</p>
        <div
          className={`w-4 h-4 ${
            BrainTumorServerStatus === "Server running..."
              ? "bg-green-500"
              : "bg-red-500"
          }  rounded-full`}
        ></div>
        <p>{BrainTumorServerStatus}</p>
      </div>
      <div className="flex items-center mt-5 gap-5">
        <p>Heart Disease Server</p>
        <div
          className={`w-4 h-4 ${
            HeartDiseaseServerStatus === "Server running..."
              ? "bg-green-500"
              : "bg-red-500"
          }  rounded-full`}
        ></div>
        <p>{HeartDiseaseServerStatus}</p>
      </div>
      <div className="flex items-center mt-5 gap-5">
        <p>Diabetes Server</p>
        <div
          className={`w-4 h-4 ${
            DiabetesDiseaseServerStatus === "Server running..."
              ? "bg-green-500"
              : "bg-red-500"
          }  rounded-full`}
        ></div>
        <p>{DiabetesDiseaseServerStatus}</p>
      </div>
    </div>
  );
};

export default StartServers;
