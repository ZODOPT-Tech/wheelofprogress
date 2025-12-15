"use client";

import { useRouter } from "next/navigation";
import styles from "./style.module.css";

export default function VisitorPrimaryDetails() {
  const router = useRouter();

  const companyName = "Demo Company Pvt Ltd";
  const companyLogo = "/logo_placeholder.png";

  return (
    <div className={styles.container}>

      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.logo}>WHEELBRAND</div>

        <div className={styles.companySection}>
          <span className={styles.companyName}>{companyName}</span>
          <img src={companyLogo} alt="Company Logo" className={styles.companyLogo} />
        </div>
      </header>

      {/* MAIN WHITE CARD */}
      <div className={styles.formCard}>

        <h2 className={styles.title}>Visitor Primary Details</h2>

        {/* NAME */}
        <div className={styles.fullRow}>
          <label>
            Name <span className={styles.required}>*</span>
          </label>
          <input type="text" placeholder="Enter Visitor Name" />
        </div>

        {/* PHONE + EMAIL ROW */}
        <div className={styles.twoColRow}>
          <div>
            <label>
              Phone Number <span className={styles.required}>*</span>
            </label>
            <input type="text" placeholder="Enter Phone Number" />
          </div>

          <div>
            <label>
              Email ID <span className={styles.required}>*</span>
            </label>
            <input type="email" placeholder="Enter Email ID" />
          </div>
        </div>

        {/* NEXT BUTTON */}
        <button
          className={styles.nextBtn}
          onClick={() => router.push("/visitor/secondary_details")}
        >
          Next →
        </button>

      </div>
    </div>
  );
}
