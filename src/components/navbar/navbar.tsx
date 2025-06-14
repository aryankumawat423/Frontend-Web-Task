import Image from "next/image";
import styles from "./navbar.module.css";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoSection}>
        <Image
          src="/images/logo.svg"
          alt="ProVital Logo"
          width={25}
          height={25}
        />
        <span className={styles.navTitle}>ProVital</span>
      </div>
      <div className={styles.menu}>
        <span className={styles.menuItem}>List your practice</span>|
        <span className={styles.menuItem}>For Employers</span>|
        <span className={styles.menuItem}>Courses</span>|
        <span className={styles.menuItem}>Books</span>|
        <span className={styles.menuItem}>Speakers</span>|
        <span className={styles.menuItem}>Doctors</span>|
        <div className={styles.loginDropdown} tabIndex={0}>
          <span className={styles.dropdownToggle}>
            Login / Signup <ChevronDown size={20} />
          </span>
          <div className={styles.dropdownMenu}>
            <div className={styles.dropdownRow}>
              <span className={styles.title}>Doctor</span>
              <span className={styles.dropdownLinks}>
                <a href="#" className={styles.dropdownLink}>
                  Login
                </a>
                <a href="#" className={styles.dropdownLink}>
                  Sign up
                </a>
              </span>
            </div>
            <div className={styles.rule}></div>
            <div className={styles.dropdownRow}>
              <span className={styles.title}>Patients</span>
              <span className={styles.dropdownLinks}>
                <a href="#" className={styles.dropdownLink}>
                  Login
                </a>
                <a href="#" className={styles.dropdownLink}>
                  Sign up
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
