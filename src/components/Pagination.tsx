import React, { Dispatch, MutableRefObject, SetStateAction } from "react";

const Pagination = (props: {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  numOfPages: number;
}) => {
  const handlePrevious = () => {
    props.page > 1 && props.setPage(props.page - 1);
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    props.page < props.numOfPages && props.setPage(props.page + 1);
    window.scrollTo(0, 0);
  };
  return (
    <div className="pagination_bar">
      {props.page > 1 && <button onClick={handlePrevious}>Previous</button>}
      <h3>
        Page {props.page} Of {props.numOfPages}
      </h3>
      {props.page < props.numOfPages && (
        <button onClick={handleNext}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
