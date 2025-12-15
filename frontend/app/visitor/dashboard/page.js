"use client";

import { useRouter } from "next/navigation";
import styles from "./style.module.css";

export default function VisitorDashboard() {
  const router = useRouter();

  const companyName = "Demo Company Pvt Ltd";
  const companyLogo = "/logo_placeholder.png";

  const stats = {
    todayVisitors: 34,
    totalVisitors: 1023,
  };

  const recentVisitors = [
    { name: "Arjun Mehta", purpose: "Meeting", time: "10:20 AM" },
    { name: "Priya Shah", purpose: "Delivery", time: "10:05 AM" },
    { name: "Rohit Kumar", purpose: "Interview", time: "9:55 AM" },
    { name: "Sneha Rao", purpose: "Client Visit", time: "9:30 AM" },
  ];

  const handleLogout = () => {
    router.push("/auth/login");
  };

  const handleCheckout = (visitorName) => {
    alert(`${visitorName} checked out successfully!`);
  };

  return (
    <div className={styles.container}>

      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.logo}>WHEELBRAND</div>

        <div className={styles.rightHeader}>
          <span className={styles.welcomeText}>Welcome, {companyName}</span>

          {/* Company Logo */}
          <img
            src={companyLogo}
            className={styles.companyLogo}
            alt="Company Logo"
          />

          {/* Logout Icon Button */}
          <button className={styles.logoutBtn} onClick={handleLogout}>
            ⏻
          </button>
        </div>
      </header>

      {/* TITLE */}
      <h1 className={styles.pageTitle}>Visitor Dashboard</h1>

      {/* STATS */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>Visitors Today</h3>
          <p>{stats.todayVisitors}</p>
        </div>

        <div className={styles.statCard}>
          <h3>Total Visitors</h3>
          <p>{stats.totalVisitors}</p>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className={styles.actionRow}>
        <button
          className={styles.primaryBtn}
          onClick={() => router.push("/visitor/primary_details")}
        >
          + New Visitor Registration
        </button>

        <button className={styles.secondaryBtn}>View All Visitors</button>
      </div>

      {/* RECENT VISITORS */}
      <div className={styles.tableCard}>
        <h3>Recent Visitors</h3>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Purpose</th>
              <th>Check-in Time</th>
              <th>Checkout</th>
            </tr>
          </thead>

          <tbody>
            {recentVisitors.map((visitor, index) => (
              <tr key={index}>
                <td>{visitor.name}</td>
                <td>{visitor.purpose}</td>
                <td>{visitor.time}</td>
                <td>
                  <button
                    className={styles.checkoutBtn}
                    onClick={() => handleCheckout(visitor.name)}
                  >
                    Checkout
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
