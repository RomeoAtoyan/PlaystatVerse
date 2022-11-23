import React from "react";
import "./Pagination.css";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="page_buttons_container">
      {pages.map((page, index) => {
        return (
          <button
            className="page_button active"
            onClick={() => setCurrentPage(page)}
            key={index}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
