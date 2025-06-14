import Pillars from "./pillar-sections";
import styles from "./pillars.module.css";
const PillarSection = () => {
  return (
    <section className={styles.pillarContainer}>
      <div className={styles.pillarHeader}>
        <h2>How it works</h2>
        <h1>
          <span>Lifestyle as medicine: </span> The Six Pillars
        </h1>
      </div>
      <Pillars />
    </section>
  );
};

export default PillarSection;
