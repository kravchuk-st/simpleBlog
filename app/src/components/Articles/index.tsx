"use client";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "@/app/layout";
import Card from "../Card";
import { ICard } from "@/types";
import styles from "./articles.module.scss";
import { fechArticles } from "@/http";
import stylesHelper from "@/helpers/StylesHelper";

export default function Articles() {
  const { searchTerm } = useContext(AppContext);
  const [articles, setArticles] = useState([]);

  let filterStr;

  if (searchTerm) {
    filterStr = `&filters[title][$containsi]=${searchTerm}&pagination[limit]=7`;
  } else {
    filterStr = "&pagination[start]=2&pagination[limit]=7";
  }

  useEffect(() => {
    fechArticles(filterStr).then((data) => {
      setArticles(data.data);
    });
  }, [searchTerm]);

  return (
    <section className={styles.section}>
      <div
        className={`wrapper ${stylesHelper(
          articles.length > 3 ? styles.layout : ""
        )}`}
      >
        {articles.length > 0 ? (
          articles.map((el: { attributes: ICard }) => (
            <Card {...el.attributes} key={el.attributes.publishedAt} />
          ))
        ) : (
          <h2 className={styles.title}>
            At your request "{searchTerm}", nothing was found.
          </h2>
        )}
      </div>
    </section>
  );
}
