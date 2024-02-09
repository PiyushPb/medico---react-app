import React from "react";
import Cards from "./Cards";
import DiabetesPrediction from "./DiabetesPrediction";

const Predict = () => {
  const [page, setPage] = React.useState(1);

  return (
    <>
      {page === 1 ? (
        <Cards setPage={setPage} />
      ) : page === 2 ? (
        <DiabetesPrediction />
      ) : (
        <h1>Page Not Found</h1>
      )}
    </>
  );
};

export default Predict;
