import { RemoveSVG, CloseIcon } from "../../Images/svg";
import styles from "./Korzinka.module.scss";
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemAction,
  deleteAllOrdersAction,
  incrActionCreator,
  decrActionCreator,
} from "../../redux/productReducer";

const Korzinka = () => {
  const data = useSelector((state) => state.products.orders);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const Incr = (id) => {
    dispatch(incrActionCreator(id));
  };
  const Decr = (id) => {
    dispatch(decrActionCreator(id));
  };

  const deleteItem = (id) => {
    dispatch(deleteItemAction(id));
  };

  const deleteAll = () => {
    dispatch(deleteAllOrdersAction());
  };

  return (
    <>
      <div className={`${styles.wrap} container`}>
        <div className={styles.left}>
          <div className={styles.top}>
            <div className={styles.title}>Корзина</div>
            <div onClick={deleteAll} className={styles.remove}>
              <RemoveSVG /> Очистить корзину
            </div>
          </div>
          <div className={styles.line}></div>
          {data.map((el) => (
            <div className={styles.bottom}>
              <div className={styles.bottom__left}>
                <div className={styles.img}>
                  <img src={el.image} alt='' />
                </div>
                <div className={styles.wrrap}>
                  <div className={styles.bottom__title}>{el.title}</div>
                  <div className={styles.bottom__type}>{el.type}</div>
                </div>
              </div>
              <div className={styles.bottom__right}>
                <div className={styles.bottom__price}>
                  {el.price * count} so'm
                </div>
                <div className={styles.count}>
                  <div
                    onClick={() => {
                      Decr(el.id);
                    }}
                    className={styles.decr}
                  >
                    -
                  </div>
                  <div className={styles.bottom__count}>{el.count}</div>
                  <div onClick={() => {
                      Incr(el.id);
                    }} className={styles.incr}>
                    +
                  </div>
                </div>
                <div
                  onClick={() => {
                    deleteItem(el.id);
                  }}
                  className={styles.closeIcon}
                >
                  <CloseIcon />
                </div>
              </div>
            </div>
          ))}
          <div className={styles.line}></div>
        </div>

        {/* ======================= RIGHT ============================ */}
        <div className={styles.right}>
          <div className={styles.title}>Ваш заказ</div>
          <div className={styles.line}></div>
          {data.map((el) => (
            <>
              <div className={styles.all__orders}>
                <div className={styles.all__products}>
                  <div className={styles.pizza__name}>
                    {el.count} x {el.title}
                  </div>
                  <div className={styles.price}>{el.price * count}</div>
                </div>
              </div>
              <div className={styles.line}></div>
            </>
          ))}
          <div className={styles.delivery}>
            <div className={styles.deli}>Доставка:</div>
            <div className={styles.full__price}>20 000 сум</div>
          </div>
          <div className={styles.main__price}>
            <div>Итого: </div>
            <div> сум</div>
          </div>
          <div className={styles.line}></div>
          <Button
            sx={{
              background: "#EC8D1E",
              borderRadius: 100,
              padding: "16px 98px",
              color: "white",
              textTransform: "capitalize",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
              marginTop: "10px",
              "&:hover": {
                backgroundColor: "#EC8D1E",
                borderColor: "#EC8D1E",
                boxShadow: "none",
              },
            }}
            variant='contained'
            endIcon='К оформление заказа'
          />
        </div>
      </div>
    </>
  );
};

export default Korzinka;
