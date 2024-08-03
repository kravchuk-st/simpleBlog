import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </p>
      <p>
        Try awsome tool for desgners{" "}
        <Link
          className={styles.link}
          href="https://symu.co"
          target="_blank"
          rel="noreferrer"
        >
          symu.co
        </Link>
      </p>
    </footer>
  );
}
