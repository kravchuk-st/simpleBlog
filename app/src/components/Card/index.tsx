import Link from "next/link";
import Image from "next/image";
import { ICard } from "@/types";
import styles from "./card.module.scss";

export default function Card({
  category,
  title,
  date,
  author,
  img,
  alt_img,
}: ICard) {
  return (
    <div className={styles.card}>
      <Link className={styles.card__img} href="#">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${img.data.attributes.url}`}
          alt={alt_img}
          width={380}
          height={250}
        />
        <span
          className={styles.card__label}
          style={{
            backgroundColor: `#${category.data.attributes.color}`,
          }}
        >
          {category.data.attributes.name}
        </span>
      </Link>
      <Link href="#" className={styles.card__title}>
        {title}
      </Link>
      <div className={styles.card__info}>
        <time className={styles.card__date} dateTime={date}>
          14 septemvber 2016
        </time>
        <span className={styles.card__separator}>|</span>
        <Link href="#" className={styles.card__link}>
          {author}
        </Link>
      </div>
    </div>
  );
}
