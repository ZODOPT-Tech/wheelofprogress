"use client";

import { useRouter } from "next/navigation";
import styles from "./style.module.css";

export default function VisitorPass() {
  const router = useRouter();

  // Dummy visitor details (replace with backend)
  const visitor = {
    name: "Arjun Mehta",
    email: "arjun.mehta@gmail.com",
    phone: "+91 9876543210",
    purpose: "Client Meeting",
    personToMeet: "Mr. Rajesh Kumar",
    checkIn: "2025-02-13 • 10:22 AM",
    photo: "/placeholder_face.png"  // Replace with captured image
  };

  return (
    <div className={styles.container}>

      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.logo}>WHEELBRAND</div>

        <div className={styles.headerButtons}>
          <button
            className={styles.backBtn}
            onClick={() => router.push("/visitor/dashboard")}
          >
            ← Back to Dashboard
          </button>

          <button
            className={styles.logoutBtn}
            onClick={() => router.push("/auth/login")}
          >
            Logout
          </button>
        </div>
      </header>

      {/* VISITOR PASS CARD */}
      <div className={styles.passCard}>
        <h2 className={styles.title}>Visitor Pass</h2>

        <div className={styles.passLayout}>

          {/* LEFT — DETAILS */}
          <div className={styles.detailsBox}>
            <div className={styles.infoRow}>
              <span className={styles.label}>Visitor Name:</span>
              <span className={styles.value}>{visitor.name}</span>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.label}>Email ID:</span>
              <span className={styles.value}>{visitor.email}</span>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.label}>Phone Number:</span>
              <span className={styles.value}>{visitor.phone}</span>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.label}>Purpose:</span>
              <span className={styles.value}>{visitor.purpose}</span>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.label}>Person to Meet:</span>
              <span className={styles.value}>{visitor.personToMeet}</span>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.label}>Check-in Time:</span>
              <span className={styles.value}>{visitor.checkIn}</span>
            </div>
          </div>

          {/* RIGHT — PHOTO */}
          <div className={styles.photoBox}>
            <img
              src={visitor.photo}
              alt="visitor photo"
              className={styles.visitorPhoto}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
