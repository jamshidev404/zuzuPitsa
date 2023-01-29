import { useContext } from "react";
import styles from "./CardComponent.module.scss";
import Button from "../Button/Button";
import { Context } from "../Home/Home";

function CardComponent({ category, products, id }) {
  const { onProductButtonClick } = useContext(Context);
  return (
    <>
      <div className={styles.products} id={id}>
        <div className={`${styles.products__container}`}>
          <div className={styles.title}>{category}</div>
          <div className={styles.items}>
            {products.map((product) => (
              <div key={product.id} className={styles.card}>
                <img className={styles.card__image} src={product.image} />
                <div key={product.id} className={styles.card__body}>
                  <div className={styles.card__title}>{product.title}</div>
                  <div className={styles.card__description}>
                    {product.description}
                  </div>
                </div>
                <div className={styles.card__footer}>
                  <div className={styles.card__price}>
                    От {product.price} сумов
                  </div>
                  <div
                    onClick={() => {
                      onProductButtonClick(product.id);
                    }}
                    className={styles.card__button}
                  >
                    <Button variant='card'>Выбрать</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardComponent;