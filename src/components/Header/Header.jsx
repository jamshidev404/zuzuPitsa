import styles from "./Header.module.scss";
import {
  KorzinkaSvg,
  LocationSvg,
  ProfileSvg,
  StrelkaSvg,
} from "../../Images/svg";
import logo from "../../Images/Logo.png";
import language from "../../Images/uzbekistan 1.jpg";
import React from "react";
import Button from "../Button/Button";
import Burger from "../Burger/Burger";
import Korzinka from "../Korzinka/Korzinka";
import { Context } from "../Home/Home";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Header({ product, onClickClose, addToOrders }) {
  // const { onProductButtonClick } = useContext(Context);
  return (
    <div className={styles.header__wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header__left}>
            <div className={styles.header__burger}>
              <Burger />
            </div>
            <div className={styles.header__logo}>
              <img src={logo} />
            </div>
            <div className={styles.header__location}>
              <Button variant='header'>
                <LocationSvg />
                Toshkent
              </Button>
            </div>
          </div>
          <div className={styles.header__right}>
            <div>
              <Link to='/korzinka'>
                <Button on variant='header'>
                  <KorzinkaSvg />
                  Корзина
                </Button>
              </Link>
            </div>
            <Button variant='header'>
              <img src={language} />
              <StrelkaSvg />
            </Button>
            <Button variant='header'>
              <ProfileSvg />
              Войти
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
