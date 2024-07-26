import { IMenuBtn } from "@/types";
import stylesHelper from "@/helpers/StylesHelper";
import styles from "./menu.module.scss";

export default function MenuBtn({ activeMenu, title, onClick }: IMenuBtn) {
  return (
    <button
      className={stylesHelper(
        styles.menu__btn,
        activeMenu === title ? styles.active : ""
      )}
      onClick={() => onClick(title.toLowerCase())}
    >
      {title}
    </button>
  );
}
