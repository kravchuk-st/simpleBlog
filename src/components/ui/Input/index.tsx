import stylesHelper from "@/helpers/StylesHelper";
import { IInput } from "@/types";
import styles from "./input.module.scss";

export default function Input({ style = "", type = "text" }: IInput) {
  return <input className={stylesHelper(styles.input, style)} type={type} />;
}
