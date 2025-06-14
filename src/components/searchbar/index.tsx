import Image from "next/image";
import styles from "./search.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBarWrapper}>
      <form className={styles.searchBar} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.inputGroup}>
          <Image
            src="/search.svg"
            alt="Search"
            width={18}
            height={18}
            className={styles.iconInsideInput}
          />
          <input
            type="text"
            placeholder="Condition, procedure, speciality..."
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <Image
            src="/location.svg"
            alt="Location"
            width={18}
            height={18}
            className={styles.iconInsideInput}
          />
          <input
            type="text"
            placeholder="City, state, or zipcode"
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <Image
            src="/health-card.svg"
            alt="Health Card"
            width={18}
            height={18}
            className={styles.iconInsideInput}
          />
          <input
            type="text"
            placeholder="Insurance carrier"
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.findBtn}>
          <Image src="/search.svg" alt="Search" width={16} height={16} />
          Find now
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
