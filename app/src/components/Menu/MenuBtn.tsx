import { useContext } from "react";
import { AppContext } from "@/app/layout";
import { IMenuBtn, IAppData } from "@/types";
import stylesHelper from "@/helpers/StylesHelper";
import styles from "./menu.module.scss";

export default function MenuBtn({ title }: IMenuBtn) {
  const { actualCategory, setAppData } = useContext(AppContext);

  return (
    <button
      className={stylesHelper(
        styles.menu__btn,
        actualCategory === title ? styles.active : ""
      )}
      onClick={() => {
        setAppData((prevState: IAppData) => {
          return { ...prevState, actualCategory: title };
        });
      }}
    >
      {title}
    </button>
  );
}
