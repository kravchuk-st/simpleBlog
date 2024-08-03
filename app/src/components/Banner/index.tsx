"use client";
import { useContext } from "react";
import { AppContext } from "@/app/layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import SlideContent from "./SlideContent";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import styles from "./slider.module.scss";

export default function Banner() {
  const { articlesSlider } = useContext(AppContext);

  return (
    <section className={styles.banner}>
      <div className={styles.banner__slider}>
        <Swiper
          className={`mySwiper ${styles.banner__slider}`}
          effect={"fade"}
          navigation={true}
          modules={[EffectFade, Navigation]}
          slidesPerView={1}
          spaceBetween={2}
          loop={true}
        >
          {articlesSlider.length &&
            [...articlesSlider].reverse().map((el) => (
              <SwiperSlide className={styles.banner__slide} key={el.id}>
                {<SlideContent data={el.attributes} />}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
