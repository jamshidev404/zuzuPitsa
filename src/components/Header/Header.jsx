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

function Header() {
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
            <Button variant='header'>
              <KorzinkaSvg />
              Корзина
            </Button>
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
