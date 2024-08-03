import Image from "next/image";
import Link from "next/link";
import styles from "./slider.module.scss";
import { ICard } from "@/types";

export default function SliderSlide({ data }: { data: ICard }) {
  const { title, img, alt_img, date, category, author } = data;

  return (
    <div className="wrapper">
      <Image
        className={styles.img}
        src={`${process.env.NEXT_PUBLIC_API_URL}${img.data.attributes.url}`}
        width={2000}
        height={815}
        alt={alt_img}
        priority
      />
      <div className={styles.content}>
        <Image
          className={styles.author}
          src="/author.png"
          width={135}
          height={135}
          alt="Picture"
          priority={false}
        />
        <Link href="#" className={styles.title}>
          {title}
        </Link>
      </div>
      <div className={styles.footer}>
        <span
          className={styles.label}
          style={{
            backgroundColor: `#${category.data.attributes.color}`,
          }}
        >
          {category.data.attributes.name}
        </span>
        <div className={styles.info}>
          <time dateTime={date}>14 septemvber 2016</time>
          <span className={styles.separator}>|</span>
          <Link href="#" className={styles.auyhor_link}>
            {author}
          </Link>
        </div>
      </div>
    </div>
  );
}
