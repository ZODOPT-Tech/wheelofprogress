"use client";

import { useRouter } from "next/navigation";
import styles from "./style.module.css";

export default function SecondaryDetails() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.logo}>WHEELBRAND</div>

        <div className={styles.companySection}>
          <span className={styles.companyName}>Demo Company Pvt Ltd</span>
          <img
            src="/logo_placeholder.png"
            className={styles.companyLogo}
            alt="Company Logo"
          />
        </div>
      </header>

      {/* MAIN FORM CARD */}
      <div className={styles.formCard}>
        <h2 className={styles.title}>Visitor Secondary Details</h2>

        {/* Row 1 */}
        <div className={styles.row3}>
          <div>
            <label>From Company *</label>
            <input type="text" placeholder="Enter Company Name" />
          </div>

          <div>
            <label>Department *</label>
            <input type="text" placeholder="Enter Department" />
          </div>

          <div>
            <label>Designation *</label>
            <input type="text" placeholder="Enter Designation" />
          </div>
        </div>

        {/* Address */}
        <div className={styles.fullRow}>
          <label>Organization Address *</label>
          <input type="text" placeholder="Enter Address Line" />
        </div>

        {/* Row 2 */}
        <div className={styles.row3}>
          <div>
            <label>City *</label>
            <input type="text" placeholder="Enter City" />
          </div>

          <div>
            <label>State *</label>
            <input type="text" placeholder="Enter State" />
          </div>

          <div>
            <label>Postal Code *</label>
            <input type="text" placeholder="Postal Code" />
          </div>
        </div>

        {/* Row 3 */}
        <div className={styles.row3}>
          <div>
            <label>Country *</label>
            <input type="text" placeholder="Enter Country" />
          </div>

          <div>
            <label>Person to Meet *</label>
            <input type="text" placeholder="Enter Person Name" />
          </div>

          <div>
            <label>Purpose *</label>
            <input type="text" placeholder="Enter Purpose" />
          </div>
        </div>

        {/* Belongings */}
        <div className={styles.fullRow}>
          <label>Belongings *</label>
          <div className={styles.checkboxGroup}>
            <label><input type="checkbox" /> Bags</label>
            <label><input type="checkbox" /> Laptop</label>
            <label><input type="checkbox" /> Charger</label>
            <label><input type="checkbox" /> Documents</label>
            <label><input type="checkbox" /> Electronic Items</label>
            <label><input type="checkbox" /> Power Bank</label>
          </div>
        </div>

        {/* BUTTONS */}
        <div className={styles.buttonRow}>
          <button className={styles.prevBtn} onClick={() => router.back()}>
            Previous
          </button>

          <button
            className={styles.nextBtn}
            onClick={() => router.push("/visitor/identity")}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
