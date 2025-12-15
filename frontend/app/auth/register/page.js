"use client";

import { useRouter } from "next/navigation";
import styles from "./style.module.css";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <div className={styles.logo}>WHEELBRAND</div>

        <button
          className={styles.backBtn}
          onClick={() => router.push("/auth/login")}
        >
          Back to Login
        </button>
      </header>

      <div className={styles.centerWrapper}>
        <div className={styles.card}>

          <h2 className={styles.title}>Create Company Account</h2>

          <div className={styles.fullRow}>
            <label className={styles.label}>Company Name *</label>
            <input className={styles.input} type="text" />
          </div>

          <div className={styles.row3}>
            <div>
              <label className={styles.label}>Admin Email *</label>
              <input className={styles.input} type="email" />
            </div>

            <div>
              <label className={styles.label}>Admin Phone *</label>
              <input className={styles.input} type="text" />
            </div>

            <div>
              <label className={styles.label}>Conference Rooms *</label>
              <input className={styles.input} type="number" />
            </div>
          </div>

          <div className={styles.fullRow}>
            <label className={styles.label}>Company Logo *</label>
            <input className={styles.fileInput} type="file" />
          </div>

          <div className={styles.row2}>
            <div>
              <label className={styles.label}>Password *</label>
              <input className={styles.input} type="password" />
            </div>

            <div>
              <label className={styles.label}>Confirm Password *</label>
              <input className={styles.input} type="password" />
            </div>
          </div>

          <button
            className={styles.submitBtn}
            onClick={() => router.push("/auth/subscription")}
          >
            Register & Continue
          </button>

        </div>
      </div>

    </div>
  );
}
