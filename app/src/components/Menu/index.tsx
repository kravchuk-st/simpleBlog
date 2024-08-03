import { useContext } from "react";
import { AppContext } from "@/app/layout";
import Btn from "./MenuBtn";
import styles from "./menu.module.scss";

export default function Menu() {
  const { categoriesList } = useContext(AppContext);

  return (
    <div className={styles.menu}>
      <div className={styles.menu__list}>
        {categoriesList.length > 0 &&
          categoriesList.map((el: ICategory) => (
            <Btn title={el.attributes.name} key={el.id} />
          ))}
      </div>
    </div>
  );
}

interface ICategory {
  id: number;
  attributes: { [key: string]: string };
}
