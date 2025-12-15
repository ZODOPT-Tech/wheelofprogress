"use client";

import Link from "next/link";
import styles from "./style.module.css";

export default function ForgotPassword() {
  return (
    <div className={styles.container}>

      {/* WHEELBRAND HEADER */}
      <header className={styles.header}>
        <div className={styles.logo}>WHEELBRAND</div>
      </header>

      {/* CARD */}
      <div className={styles.centerWrapper}>
        <div className={styles.card}>
          <h4>RESET PASSWORD</h4>

          <div className={styles.inputGroup}>
            <label>REGISTERED EMAIL ID</label>
            <input type="email" placeholder="Enter Email ID" />
          </div>

          <button className={styles.submitBtn}>SEND RESET LINK</button>

          <div className={styles.backRow}>
            <Link href="/">← Back to Login</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
