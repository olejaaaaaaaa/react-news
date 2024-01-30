import styles from "./style.module.css"


interface CategoriesInterface {
  categories: string[],
  selectedCategory:string,
  SetSelectedCategory:(prop:string) => void,

}

const Categories = ({
  categories,
  selectedCategory,
  SetSelectedCategory
}: CategoriesInterface) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => {
        return (
          <button
            onClick={() => SetSelectedCategory(category)}
            key={category}
            className={
              selectedCategory === category ? styles.active : styles.item
            }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;