import React from "react";
import s from "./Header.module.css";
import logoIcon from "../../common/img/header/logo.png";

function Header() {
  return (
    <header className={s.header}>
      <div className={s.header_logo}>
        <img src={logoIcon} alt="" />
      </div>
      <div className={s.header_main}>
        <div className={s.header_main_search}>
          <input type="text" />
          <button></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
