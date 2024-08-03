"use client";
import { useState, useContext } from "react";
import { AppContext } from "@/app/layout";
import Btn from "@/components/ui/Button";
import stylesHelper from "@/helpers/StylesHelper";
import styles from "./header.module.scss";
import { IAppData } from "@/types";

export default function Tooltip() {
  const [inputValue, setInputValue] = useState("");
  const [isShowForm, setIsShowForm] = useState(false);
  const { setAppData } = useContext(AppContext);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setAppData((prevState: IAppData) => {
      return { ...prevState, searchTerm: inputValue };
    });
    setIsShowForm(false);
    setInputValue("");
  };

  return (
    <div className={styles.tooltip}>
      <button
        className={styles.tooltip__btn}
        aria-labelledby="search-tooltip"
        onClick={() => setIsShowForm(!isShowForm)}
      >
        <svg className={styles.tooltip__icon} width={24} height={24}>
          <use xlinkHref="/icon.svg#icon" />
        </svg>
      </button>
      <div
        className={stylesHelper(
          styles.tooltip__form,
          isShowForm ? styles.show : ""
        )}
        role="tooltip"
        id="search-tooltip"
      >
        <form className={styles.search} onSubmit={handleSubmit}>
          <input
            className={`input ${styles.search__input}`}
            autoComplete="off"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Btn
            style={styles.search__btn}
            title=""
            type="submit"
            aria-label="Search articles"
          />
        </form>
      </div>
    </div>
  );
}
