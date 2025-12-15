"use client";

import { useRouter } from "next/navigation";
import styles from "./style.module.css";

export default function Home() {
  const router = useRouter();

  // Temporary backend placeholders
  const companyName = "Demo Company Pvt Ltd";
  const companyLogo = "/logo_placeholder.png";

  const handleLogout = () => {
    router.push("/auth/login");
  };

  return (
    <div className={styles.container}>
      
      {/* HEADER */}
      <header className={styles.header}>
        {/* LEFT: BRAND */}
        <div className={styles.logo}>WHEELBRAND</div>

        {/* RIGHT: Welcome + Logo + Logout */}
        <div className={styles.rightSection}>
          <span className={styles.welcomeText}>Welcome, {companyName}</span>

          <img
            src={companyLogo}
            alt="Company Logo"
            className={styles.companyLogo}
          />

          {/* LOGOUT BUTTON */}
          <button className={styles.logoutBtn} onClick={handleLogout}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3c007a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>
        </div>
      </header>

      {/* MAIN CARDS */}
      <div className={styles.cardWrapper}>
        
        {/* Visitor Management Card */}
        <div
          className={styles.card}
          onClick={() => router.push("/visitor/dashboard")}
        >
          <div className={styles.iconCircle}>
            <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
              <path d="M12 2a5 5 0 015 5v1a5 5 0 11-10 0V7a5 5 0 015-5zm-7 18a7 7 0 1114 0H5z"/>
            </svg>
          </div>
          <h2>Visitor Management</h2>
          <p>Manage visitor entries, ID verification, passes & reports.</p>
        </div>

        {/* Conference Booking Card */}
        <div
          className={styles.card}
          onClick={() => router.push("/conference/dashboard")}
        >
          <div className={styles.iconCircle}>
            <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
              <path d="M3 4h18v2H3V4zm2 4h14v10H5V8zm3 12h8v2H8v-2z"/>
            </svg>
          </div>
          <h2>Conference Booking</h2>
          <p>Schedule rooms, manage corporate meetings and bookings.</p>
        </div>

      </div>
    </div>
  );
}
