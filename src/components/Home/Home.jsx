import React from "react";
import Banner from "../Banner/Banner";
import styles from "./Home.module.scss";
// import CardComponent from "../CardComponent/CardComponent";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import pizza from "../../Images/pizza1.png";

const Home = () => {
  const data = useSelector((state) => state.products.data);
  return (
    <>
      <Banner />
      {data.map((el) => (
        <div className={styles.products}>
          <div className={`${styles.products__container}`}>
            <div className={styles.title}>{el.category}</div>
            <div className={styles.items}>
              {el.products.map((product) => (
                <div className={styles.card}>
                  <img className={styles.card__image} src={pizza} />
                  <div className={styles.card__body}>
                    <div className={styles.card__title}>{product.title}</div>
                    <div className={styles.card__description}>
                      {product.description}
                    </div>
                  </div>
                  <div className={styles.card__footer}>
                    <div className={styles.card__price}>От {product.price} сумов</div>
                    <div className={styles.card__button}>
                      <Button variant='card'>Выбрать</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
