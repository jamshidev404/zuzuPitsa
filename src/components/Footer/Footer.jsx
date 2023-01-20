import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../Images/Logo.png";
import { FacebookSvg, InstagramSvg, TelegramSvg } from "../../Images/svg";
import { Link, NavLink } from "react-router-dom";

const links = [
  {
    htext: "Филиалы",
    href: "/filial",
  },
  {
    htext: "О нас",
    href: "/about",
  },
  {
    htext: "Контакты",
    href: "/contacts",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.top} container `}>
        <img src={logo} className={styles.logo} alt='rasm' />
        <nav className={styles.menu}>
          <ul className={styles.lists}>
            {links.map((el) => (
              <li key={el.href} className={styles.item}>
                <NavLink className={({ isActive }) => isActive ? styles.active : styles.link} to={el.href} key={el.title}>
                  {el.htext}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={`${styles.bottom} container`}>
        <div className={styles.text}>©Zuzu 2005 - 2021 All rights reserved</div>
        <div className={styles.icons}>
          <InstagramSvg />
          <FacebookSvg />
          <TelegramSvg />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
