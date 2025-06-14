"use client";

import React, { useRef, useEffect, useState } from "react";
import styles from "./pillar-sections.module.css";

const pillars = [
  {
    image: "/Card/Rectangle 144.svg",
    icon: "/icons/heart-blue.svg",
    stat: "121/80",
    statLabel: "mmHg",
    title: "Nutrition",
    description:
      "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
  },
  {
    image: "/Card/Rectangle 152.svg",
    icon: "/icons/heart-orange.svg",
    stat: "32",
    statLabel: "minutes",
    title: "Physical activity",
    description:
      "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
  },
  {
    image: "/Card/Rectangle 160.svg",
    icon: "/icons/moon-green.svg",
    stat: "8",
    statLabel: "hours",
    title: "Restorative sleep",
    description:
      "Consistent, quality sleep is essential for cognitive function and physical health.",
  },
  {
    image: "/Card/Rectangle 154.svg",
    icon: "/icons/heart-blue.svg",
    stat: "60",
    statLabel: "bpm",
    title: "Stress management",
    description:
      "Effective stress management techniques are crucial for mental well-being and overall health.",
  },
  {
    image: "/Card/Rectangle 156.svg",
    icon: "/icons/heart-orange.svg",
    stat: "Feeling better",
    statLabel: "",
    title: "Social connection",
    description:
      "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
  },
  {
    image: "/Card/Rectangle 158.svg",
    icon: "/icons/clock.svg",
    stat: "62",
    statLabel: "days",
    title: "Substance abuse",
    description:
      "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
  },
];

export default function Pillars() {
  const [active, setActive] = useState(0);
  const cardsRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardsRow = cardsRowRef.current;
    if (cardsRow) {
      const activeCard = cardsRow.children[active] as HTMLElement;
      if (activeCard) {
        activeCard.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "nearest",
        });
      }
    }
  }, [active]);

  const handlePrev = () =>
    setActive((prev) => (prev === 0 ? pillars.length - 1 : prev - 1));
  const handleNext = () =>
    setActive((prev) => (prev === pillars.length - 1 ? 0 : prev + 1));

  return (
    <section className={styles.section}>
      <div className={styles.tabsRow}>
        <div className={styles.tabs}>
          {pillars.map((pillar, idx) => (
            <button
              key={pillar.title}
              className={idx === active ? styles.tabActive : styles.tab}
              onClick={() => setActive(idx)}
              type="button"
            >
              {pillar.title}
            </button>
          ))}
        </div>
        <div className={styles.arrows}>
          <button
            className={styles.arrowBtn}
            onClick={handlePrev}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            className={styles.arrowBtn}
            onClick={handleNext}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className={styles.cardsRow} ref={cardsRowRef}>
        {pillars.map((pillar, idx) => (
          <div
            key={pillar.title}
            className={`${styles.card} ${idx === active ? styles.activeCard : ""}`}
            onClick={() => setActive(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setActive(idx);
              }
            }}
          >
            <div className={styles.cardImageWrapper}>
              <img
                src={pillar.image}
                alt={pillar.title}
                className={styles.cardImage}
              />
              <div className={styles.cardStat}>
                <img
                  src={pillar.icon}
                  alt=""
                  className={styles.cardStatIcon}
                />
                <span className={styles.cardStatValue}>{pillar.stat}</span>
                {pillar.statLabel && (
                  <span className={styles.cardStatLabel}>
                    {pillar.statLabel}
                  </span>
                )}
              </div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>{pillar.title}</div>
              <div className={styles.cardDesc}>{pillar.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
