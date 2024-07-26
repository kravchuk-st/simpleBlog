import stylesHelper from "@/helpers/StylesHelper";
import { IBtn } from "@/types";
import styles from "./button.module.scss";

export default function Btn({ title, style = "", type = "button" }: IBtn) {
  return (
    <button className={stylesHelper(styles.btn, style)} type={type}>
      {title}
    </button>
  );
}
