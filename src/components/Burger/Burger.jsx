import "./Burger.css";
import React, { useState } from "react";

function Burger() {
  //to change burger class
  const [burger__class, setBurgerClass] = useState("burger-bar uncliked");
  const [menu__class, setMenuClass] = useState("menu hidden");
  const [isMenuCliked, setIsMenuCliked] = useState(false);

  //toggle burger menu change
  const updateMenu = () => {
    if (!isMenuCliked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuCliked(!isMenuCliked)
  };

  return (
    // style={{ width: "100%", height: "100vh" }}
    <div>  
      <nav>
        <div className='burger-menu'>
          <div className={burger__class} onClick={updateMenu}></div>
          <div className={burger__class} onClick={updateMenu}></div>
          <div className={burger__class} onClick={updateMenu}></div>
        </div>
      </nav>

      <div className={menu__class}></div>
    </div>
  );
}

export default Burger;
