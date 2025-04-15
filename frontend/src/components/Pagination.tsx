// import "../styles/pagination.css"
// import React from 'react';
// function Pagination(){
//     return (
//         <div className="pagination">
//                 <a href="#">&laquo;</a>
//                 <a href="#" className="active">1</a>
//                 <a href="#">2</a>
//                 <a href="#">&raquo;</a>
//         </div>
//     );
// }

// export default Pagination;

import "../styles/pagination.css";
import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        &laquo;
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={currentPage === index + 1 ? "active" : ""}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;