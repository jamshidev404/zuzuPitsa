import { Button } from "@mui/material";
import React from "react";
import { RemoveSVG, CloseIcon } from "../../Images/svg";
import Order from "../Order/Order";
import styles from "./Korzinka.module.scss";
import pizza from "../../Images/pizza1.png";

const Korzinka = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.left}>
          <div className={styles.top}>
            <div className={styles.title}>Корзина</div>
            <div className={styles.remove}>
              <RemoveSVG /> Очистить корзину
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.bottom}>
            <div className={styles.bottom__left}>
              <div className={styles.img}>
                <img src={pizza} alt='' />
              </div>
              <div className={styles.wrrap}>
                <div className={styles.bottom__title}>Пицца кебаб</div>
                <div className={styles.bottom__type}>Средняя, Воздушное</div>
              </div>
            </div>
            <div className={styles.bottom__right}>
              <div className={styles.bottom__price}>74,000 сум</div>
              <div className={styles.count}>
                <div className={styles.decr}>-</div>
                <div className={styles.bottom__count}>1</div>
                <div className={styles.incr}>+</div>
              </div>
              <CloseIcon />
            </div>
          </div>
          <div className={styles.line}></div>
        </div>

        {/* ==== RIGHT SIDE === */}
        <div className={styles.right}>
          <div className={styles.title}>Ваш заказ</div>
          <div className={styles.line}></div>
          <div className={styles.all__orders}>
            <div className={styles.all__products}>
              <div className={styles.pizza__name}>1 x Пицца кебаб</div>
              <div className={styles.price}>74 000 сум</div>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.delivery}>
            <div className={styles.deli}>Доставка</div>
            <div className={styles.full__price}>0 сум</div>
          </div>
          <div className={styles.main__price}>
            <div>Итого</div>
            <div>148 000 сум</div>
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
