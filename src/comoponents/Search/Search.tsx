import styles from "./style.module.css"

interface SearchInterface {
  keywords: string;
  setKeywords:(prop:string) => void,
}


const Search = ({keywords, setKeywords}:SearchInterface) => {
  return (
    <div className={styles.search}>
        <input type="text" value={keywords} onChange={(e) => setKeywords(e.target.value)} className={styles.input} placeholder="Search"  />
    </div>
  );
};

export default Search;