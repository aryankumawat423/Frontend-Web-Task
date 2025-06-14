import React, { useState } from "react";
import styles from "./MobileNavbar.module.css";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.mobileNav}>
        <div className={styles.logoSection}>
          <img src="/logo.svg" alt="ProVital" className={styles.logoImg} />
          <span className={styles.navTitle}>ProVital</span>
        </div>
        <button
          className={styles.hamburger}
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      {open && (
        <div className={styles.menuOverlay}>
          <div className={styles.menuHeader}>
            <div className={styles.logoSection}>
              <img src="/logo.svg" alt="ProVital" className={styles.logoImg} />
              <span className={styles.navTitle}>ProVital</span>
            </div>
            <button
              className={styles.closeBtn}
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          <div className={styles.menuContent}>
            <div className={styles.menuBox}>
              <div className={styles.menuRow}>
                <span>Doctor</span>
                <a href="#">Login</a>
                <a href="#">Sign up</a>
              </div>
              <div className={styles.menuRow}>
                <span>Patients</span>
                <a href="#">Login</a>
                <a href="#">Sign up</a>
              </div>
            </div>
            <a className={styles.menuLink} href="#">Doctors</a>
            <a className={styles.menuLink} href="#">List your practice</a>
            <a className={styles.menuLink} href="#">For Employers</a>
            <a className={styles.menuLink} href="#">Courses</a>
            <a className={styles.menuLink} href="#">Books</a>
            <a className={styles.menuLink} href="#">Speakers</a>
          </div>
        </div>
      )}
    </>
  );
}