import React from "react";
import Cards from "./Cards";
import DiabetesPrediction from "./DiabetesPrediction";
import { FaLongArrowAltLeft } from "react-icons/fa";
import HeartPrediction from "./HeartPrediction";
import BrainTumorPrediction from "./BrainTumorPrediction";

const Predict = () => {
  const [page, setPage] = React.useState(1);

  return (
    <>
      {page === 1 ? (
        <Cards setPage={setPage} />
      ) : page === 2 ? (
        <>
          <div className="container flex gap-2">
            <FaLongArrowAltLeft
              className="text-3xl"
              onClick={() => setPage(1)}
            />
            <h1 className="text-xl font-bold">Go back</h1>
          </div>
          <DiabetesPrediction />
        </>
      ) : page === 3 ? (
        <>
          <div className="container flex gap-2">
            <FaLongArrowAltLeft
              className="text-3xl"
              onClick={() => setPage(1)}
            />
            <h1 className="text-xl font-bold">Go back</h1>
          </div>
          <HeartPrediction />
        </>
      ) : page === 4 ? (
        <>
          <div className="container flex gap-2">
            <FaLongArrowAltLeft
              className="text-3xl"
              onClick={() => setPage(1)}
            />
            <h1 className="text-xl font-bold">Go back</h1>
          </div>
          <BrainTumorPrediction />
        </>
      ) : (
        <h1>Page Not Found</h1>
      )}
    </>
  );
};

export default Predict;
