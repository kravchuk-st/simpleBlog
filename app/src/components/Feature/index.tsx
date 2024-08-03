"use client";
import { useState, useEffect } from "react";
import Card from "../Card";
import { fechArticles } from "@/http";
import styles from "./feature.module.scss";
import { ICard } from "@/types";

export default function Feature() {
  const [articles, setArticles] = useState([]);
  const filterStr =
    "&filters[$or][0][category][name][$eq]=trips&filters[$or][1][category][name][$eq]=tech&pagination[limit]=2";

  useEffect(() => {
    fechArticles(filterStr).then((data) => {
      setArticles(data.data);
    });
  }, []);

  return (
    <section className={styles.section}>
      <div className="wrapper">
        {articles.length &&
          articles.map((el: { attributes: ICard }) => (
            <Card {...el.attributes} key={el.attributes.publishedAt} />
          ))}
      </div>
    </section>
  );
}
