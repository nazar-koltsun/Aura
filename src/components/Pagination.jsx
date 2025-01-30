import { cn } from "../lib/utils";
import { useState } from "react";

const Pagination = ({ totalItems, itemsPerPage, className }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(startItem + itemsPerPage - 1, totalItems);

  // Function to generate page numbers
  const getPageNumbers = () => {
    if (totalPages <= 6) {
      return [...Array(totalPages).keys()].map((n) => n + 1);
    }
    if (currentPage < 5) {
      return [1, 2, 3, 4, "...", totalPages];
    }
    if (currentPage > totalPages - 4) {
      return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  };

  const onPrevBtnClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const onNextBtnClick = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const onPageClick = (page) => {
    typeof page === "number" && setCurrentPage(page);
  };

  const basicBtnClasses = "min-w-[26px] h-6 text-xs bg-[#f5f5f5] border border-[#eee] rounded";

  return (
    <div className={cn("flex justify-between items-center gap-4 max-700:flex-col", className)}>
      {/* Displaying entries info */}
      <p className="text-sm text-[#b5b7c0] tracking-tight max-700:text-center">
        Wyświetlanie danych od {startItem} to {endItem} z {totalItems} wpisów
      </p>

      {/* Pagination Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrevBtnClick}
          disabled={currentPage === 1}
          className={cn(basicBtnClasses, currentPage === 1 && "opacity-40")}
        >
          ‹
        </button>

        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => onPageClick(page)}
            className={cn(basicBtnClasses, page === currentPage && "bg-[var(--jungle-green)] border-[var(--jungle-green)] text-white")}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}

        <button
          onClick={onNextBtnClick}
          disabled={currentPage === totalPages}
          className={cn(basicBtnClasses, currentPage === totalPages && "opacity-40")}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Pagination;
