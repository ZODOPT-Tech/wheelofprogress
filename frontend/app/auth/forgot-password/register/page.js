"use client";

import { useRouter } from "next/navigation";
import styles from "./style.module.css";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/auth/subscription");
  };

  return (
    <div className={styles.container}>

      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.logo}>WHEELBRAND</div>

        <Link href="/auth/login" className={styles.backLink}>
          Back to Login →
        </Link>
      </header>

      {/* FORM WRAPPER */}
      <div className={styles.centerWrapper}>
        <div className={styles.card}>

          <h4>Create Your Company Account</h4>

          {/* Company Name */}
          <div className={styles.rowFull}>
            <label>
              Company Name <span className={styles.required}>*</span>
            </label>
            <input className={styles.input} type="text" placeholder="Enter Company Name" />
          </div>

          {/* Email - Phone - Rooms */}
          <div className={styles.row3}>
            <div>
              <label>
                Admin Email ID <span className={styles.required}>*</span>
              </label>
              <input className={styles.input} type="email" placeholder="Enter Admin Email" />
            </div>

            <div>
              <label>
                Admin Number <span className={styles.required}>*</span>
              </label>
              <input className={styles.input} type="text" placeholder="Enter Mobile Number" />
            </div>

            <div>
              <label>
                Conference Rooms <span className={styles.required}>*</span>
              </label>
              <input className={styles.input} type="number" placeholder="Room Count" />
            </div>
          </div>

          {/* Logo Upload */}
          <div className={styles.rowFull}>
            <label>
              Upload Company Logo <span className={styles.required}>*</span>
            </label>
            <input className={styles.fileUpload} type="file" />
          </div>

          {/* Passwords */}
          <div className={styles.row2}>
            <div>
              <label>
                Password <span className={styles.required}>*</span>
              </label>
              <input className={styles.input} type="password" placeholder="Enter Password" />
            </div>

            <div>
              <label>
                Confirm Password <span className={styles.required}>*</span>
              </label>
              <input className={styles.input} type="password" placeholder="Re-enter Password" />
            </div>
          </div>

          {/* BUTTON */}
          <button className={styles.submitBtn} onClick={handleRegister}>
            Register Account
          </button>

        </div>
      </div>
    </div>
  );
}
