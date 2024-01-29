import styles from "./style.module.css"

interface PaginationInterface {
  handleNextPage: () => void;
  handlePreviuosPage: () => void;
  handlePageClick: (pageNumber:number) => void;
  totalPages: number;
  currentPage: number;
}

const Pagination = ({
  totalPages,
  handlePreviuosPage,
  handleNextPage,
  handlePageClick,
  currentPage,
}: PaginationInterface) => {
  return (
    <div className={styles.pagination}>
      <button disabled={currentPage <= 1} onClick={handlePreviuosPage} className={styles.arrow}>
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={styles.pageNumb}
              key={index}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button disabled= {currentPage >= totalPages} onClick={handleNextPage} className={styles.arrow}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;