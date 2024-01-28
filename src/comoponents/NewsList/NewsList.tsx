import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import styles from "./style.module.css";
import NewsItem from "../NewsItem/NewsItem";

const NewsList = ({ news }: any) => {
  return (
   <ul className={styles.list}>
    {news.map((item: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
      return <NewsItem key={item.id}  item= {item}/>
    })}
   </ul>
  );
};

export default NewsList;
