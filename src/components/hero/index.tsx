"use client";
import Image from "next/image";
import styles from "./hero.module.css";
import SearchBar from "../searchbar";

const allImages = [
  "/HeroImg/Rectangle 3468480.svg",
  "/HeroImg/Rectangle 3468481.svg",
  "/HeroImg/Rectangle 3468482.svg",
  "/HeroImg/Rectangle 3468483.svg",
  "/HeroImg/Rectangle 3468484.svg",
  "/HeroImg/Rectangle 3468485.svg",
  "/HeroImg/Rectangle 3468486.svg",
  "/HeroImg/Rectangle 3468487.svg",
];

const HeroSection = () => {
  const imagesCol1 = [...allImages.slice(0, 4), ...allImages.slice(0, 4)];
  const imagesCol2 = [...allImages.slice(4), ...allImages.slice(4)];

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContentWrapper}>
        <div className={styles.heroColumns}>
          <div className={styles.imageColumns}>
            <div className={styles.imageColumn}>
              <div className={styles.imageListDown}>
                {imagesCol1.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    width={237}
                    height={335}
                    alt=""
                    className={styles.heroImg}
                  />
                ))}
              </div>
            </div>
            <div className={styles.imageColumn}>
              <div className={styles.imageListUp}>
                {imagesCol2.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    width={237}
                    height={335}
                    alt=""
                    className={styles.heroImg}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.heroTextBlock}>
            <h1 className={styles.heroTitle}>
              Book an appointment with{" "}
              <span className="highlight" style={{ color: "#00b5d8" }}>
                lifestyle medicine
              </span>{" "}
              experts
            </h1>
            <p className={styles.heroDesc}>
              Optimize your lifestyle and reverse chronic diseases.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.curveGradient} />
      <div className={styles.searchBarWrapper}>
        <SearchBar />
      </div>
    </section>
  );
};

export default HeroSection;
