import { useGlobalContext } from "@/context/appContext";
import React from "react";

const Pagination = (props: { numOfPages: number }) => {
  const { state, setPage } = useGlobalContext();
  const { page } = state;
  const handlePrevious = () => {
    page > 1 && setPage(page - 1);
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    page < props.numOfPages && setPage(page + 1);
    window.scrollTo(0, 0);
  };
  return (
    <div className="pagination_bar">
      {page > 1 && <button onClick={handlePrevious}>Previous</button>}
      <h3>
        Page {page} Of {props.numOfPages}
      </h3>
      {page < props.numOfPages && <button onClick={handleNext}>Next</button>}
    </div>
  );
};

export default Pagination;
