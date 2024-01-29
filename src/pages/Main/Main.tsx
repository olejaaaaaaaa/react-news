import { useEffect, useState } from "react";
import NewsBanner from "../../comoponents/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";
import NewsList from "../../comoponents/NewsList/NewsList";
import Skeleton from "../../comoponents/Skeleton/Skeleton";
import Pagination from "../../comoponents/Pagination/Pagination";

const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const[currentPage, SetCurrentPage] = useState(1)
    const totalPages:number = 10
    const pageSize:number = 10
    const fetchNews = async (currentPage: number) => {
      try {
        setIsLoading(true)
        const response = await getNews(currentPage, pageSize);
        setNews(response.news);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handleNextPage  = () => {
    if (currentPage < totalPages){
      SetCurrentPage(currentPage + 1)
    }
  }
  const handlePreviuosPage = () => {
    if (currentPage > 1) {
      SetCurrentPage(currentPage - 1);
    }
  };
const handlePageClick = (pageNumber:number) => {
  
    SetCurrentPage(pageNumber);
  
};


  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type="banner" count={1} />
      )}
      <Pagination
        handleNextPage={handleNextPage}
        handlePreviuosPage={handlePreviuosPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type="item" count={10} />
      )}
      <Pagination
        handleNextPage={handleNextPage}
        handlePreviuosPage={handlePreviuosPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </main>
  );
};

export default Main;
