import Link from "next/link";
import Menu from "@/components/Menu";
import Tooltip from "./Tooltip";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.logo}>
          <Link className={styles.logo__link} href="/">
            Blog <span className="text-bold">template</span>
          </Link>
        </div>
        <Tooltip />
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link className={styles.nav__link} href="#">
                About
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link className={styles.nav__link} href="#">
                Cooperation
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link className={styles.nav__link} href="#">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Menu />
      </div>
    </header>
  );
}
