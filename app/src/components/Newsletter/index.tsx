"use client";
import Input from "@/components/ui/Input";
import Btn from "@/components/ui/Button/index";
import styles from "./newsletter.module.scss";

export default function Newsletter() {
  return (
    <section className={styles.newslatter}>
      <div className="wtapper">
        <h2 className={styles.title}>Newsletter</h2>
        <p className={styles.subtitle}>
          Donec elementum dui semper, pretium dui quis, pretium nisl.
        </p>
        <form
          className={styles.form}
          action="#"
          method="post"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input style={styles.input} type="email" />
          <Btn title="Sign up" style={styles.btn} type="submit" />
        </form>
      </div>
    </section>
  );
}
