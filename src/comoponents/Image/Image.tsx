import styles from "./style.module.css";

const Image = ({image}:any) => {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="news" className={styles.image}/>: null}

    </div>
  );
};

export default Image;
