"use client";
import { useState } from "react";
import Btn from "./MenuBtn";
import styles from "./menu.module.scss";

const categories = ["nature", "people", "trips", "animals", "fashion", "tech"];

export default function Menu() {
  const [activeMenu, setActiveMenu] = useState("people");

  return (
    <div className={styles.menu}>
      <div className={styles.menu__list}>
        {categories.map((el, i) => (
          <Btn
            activeMenu={activeMenu}
            title={el}
            onClick={setActiveMenu}
            key={`${el + i}`}
          />
        ))}
      </div>
    </div>
  );
}
