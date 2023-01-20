import React from "react";
import styles from "./Button.module.scss";

function Button({ style, children, variant, type }) {
  const findStyle = () => {
    switch (variant) {
      case "header":
        return {
          padding: "14px 16px",
          background: "#f5f5f5",
          color: "#292929",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontFamily: "Rubik sans-serif"
        };
      case "components":
        return {
          background: "#fff",
          padding: "14px 24px",
          color: "#292929",
          fontFamily: "Rubik"
        };
      case "card":
        return {
          background: "#f5f5f5",
          padding: "12px 24px",
          color: "#292929",
          fontFamily: "Rubik sans-serif"
        };
      case "profil":
        return {
          background: "#EC8D1E",
          padding: "14px 80px",
          color: "#FFF",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "20px",
          fontFamily: "Rubik sans-serif"
        };
    }
  };

  // const buttonClass = `${styles.buttons} ${styles[type]}}`;
  return (
    <div>
      {/* <button className={buttonClass}>{children}</button> */}
      <button style={findStyle(variant)} className={styles.card}>
        {children}
      </button>
    </div>
  );
}

export default Button;
