import styles from "./Order.module.scss";
import { CloseIcon } from "../../Images/svg";
import { Button } from "@mui/material";
import { useState } from "react";
import { incrActionCreator, decrActionCreator } from "../../redux/productReducer";
import { useDispatch, useSelector, } from "react-redux";


const Order = ({ product, onClickClose, addToOrders }) => {
  const [count, setCount] = useState(1);
  const data = useSelector((state) => state.products.orders)
  const dispatch = useDispatch()

  const Incr = (id) => {
    setCount(count + 1);
    // dispatch(incrActionCreator(id))
  };

  const Decr = (id) => {
    if (count > 1) setCount(count - 1);
    // dispatch(decrActionCreator(id))
  };

  return (
    <div className={styles.order}>
      <img className={styles.order__image} src={product.image} alt='' />
      <div className={styles.order__content}>
        <div onClick={onClickClose} className={styles.content__button}>
          <CloseIcon />
        </div>
        <div className={styles.content__title}>{product.title}</div>
        <div className={styles.content__description}>{product.description}</div>
        <div className={styles.content__buttons}>
          <div className={styles.content__counter}>
            <Button
              onClick={() => {
                Decr(product.id)
              } }
              variant='contained'
              style={{
                background: "#f5f5f5",
                borderRadius: "50%",
                color: "#292929",
                fontSize: 16,
                // lineHeight:20,
                textAlign: "center",
                fontWeight: 600,
              }}
              size='small'
            >
              -
            </Button>
            <span className={styles.content__count}>{count}</span>
            <Button
              onClick={()=> {
                Incr(product.id)
              }}
              variant='contained'
              style={{
                background: "#f5f5f5",
                borderRadius: "50%",
                color: "#292929",
                fontSize: 16,
                // lineHeight:20,
                textAlign: "center",
                fontWeight: 600,
              }}
              size='small'
            >
              +
            </Button>
          </div>
          <div className={styles.content__add}>
            <Button
              onClick={() => {
                addToOrders(product,count);
              }}
              variant='contained'
              style={{
                background: "#ec8d1e",
                borderRadius: 100,
                color: "#fff",
                fontSize: "50px",
                textTransform: "lowercase",
                minWidth: 300
              }}
              size='large'
              startIcon={"Добавить"}
              endIcon={`${product.price * count}000 so'm`}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
