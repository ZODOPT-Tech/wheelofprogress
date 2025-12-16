"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./style.module.css";

export default function Login() {
  const [modalContent, setModalContent] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const openDropdown = (type) => {
    if (type === "about") {
      setModalContent(
        "ARSCCOM is a modern Visitor Management & Conference Room Booking Platform."
      );
    }
    if (type === "plans") {
      setModalContent("plans");
    }
    if (type === "contact") {
      setModalContent("Email: support@arsccom.com | Phone: +91 98765 43210");
    }
    setDropdownVisible(true);
  };

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid credentials");
        return;
      }

      router.push("/home");
    } catch (err) {
      setError("Unable to connect to server");
    }
  };

  return (
    <div className={styles.container}>

      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.brandSection}>
          <div className={styles.logoText}>ARSCCOM</div>
          <img
            src="/logo.png"
            alt="ARSCCOM Logo"
            className={styles.brandLogo}
          />
        </div>

        <nav className={styles.nav}>
          <button onClick={() => openDropdown("about")}>ABOUT</button>
          <button onClick={() => openDropdown("plans")}>PLANS</button>
          <button onClick={() => openDropdown("contact")}>CONTACT</button>
        </nav>
      </header>

      {/* DROPDOWN */}
      {dropdownVisible && (
        <div className={styles.dropdownBox}>
          {modalContent !== "plans" ? (
            <>
              <p>{modalContent}</p>
              <button
                className={styles.closeBtn}
                onClick={() => setDropdownVisible(false)}
              >
                Close
              </button>
            </>
          ) : (
            <>
              <div className={styles.planContainer}>
                <div className={styles.planCard}>
                  <h3>Bronze</h3>
                  <h2>Free</h2>
                  <ul>
                    <li>100 Visitors / month</li>
                    <li>100 Bookings</li>
                    <li>2 Conference Rooms</li>
                  </ul>
                </div>

                <div className={styles.planCard}>
                  <h3>Silver</h3>
                  <h2>₹1000 / month</h2>
                  <ul>
                    <li>1000 Visitors</li>
                    <li>1000 Bookings</li>
                    <li>4 Conference Rooms</li>
                  </ul>
                </div>

                <div className={styles.planCard}>
                  <h3>Gold</h3>
                  <h2>₹2000 / month</h2>
                  <ul>
                    <li>5000 Visitors</li>
                    <li>10,000 Bookings</li>
                    <li>6 Conference Rooms</li>
                  </ul>
                </div>
              </div>

              <button
                className={styles.closeBtn}
                onClick={() => setDropdownVisible(false)}
              >
                Close
              </button>
            </>
          )}
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className={styles.mainRow}>
        <div className={styles.leftSpacer}></div>

        {/* LOGIN CARD */}
        <div className={styles.loginWrapper}>
          <div className={styles.loginCard}>
            <h4>LOGIN TO YOUR ACCOUNT</h4>

            <div className={styles.inputGroup}>
              <label>Email ID</label>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <p style={{ color: "red", fontSize: "14px", marginBottom: "8px" }}>
                {error}
              </p>
            )}

            <button className={styles.loginBtn} onClick={handleLogin}>
              LOGIN
            </button>

            <div className={styles.extraLinks}>
              <Link href="/auth/forgot-password">Forgot Password?</Link>
              <span>|</span>
              <Link href="/auth/register">New Registration</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

