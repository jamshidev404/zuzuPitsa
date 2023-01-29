import styles from "./Category.module.scss";
import { useSelector } from "react-redux";

const Category = () => {
  const categories = useSelector((state) => state.products.categories);
  return (
    <>
      <nav className={styles.categories}>
        <div className={`${styles.category__container}`}>
          <ul className={styles.items}>
            {categories?.map((el) => (
              <li className={styles.li__item} key={el.id}>
                <a className={styles.item} href={"#" + el}>{el}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Category;
