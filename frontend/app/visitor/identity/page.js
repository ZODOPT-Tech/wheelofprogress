"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./style.module.css";

export default function VisitorIdentity() {
  const router = useRouter();

  const [cameraActive, setCameraActive] = useState(false);
  const [photo, setPhoto] = useState(null);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async () => {
    setCameraActive(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      alert("Camera access denied!");
      setCameraActive(false);
    }
  };

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 300;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imgData = canvas.toDataURL("image/png");
    setPhoto(imgData);

    video.srcObject?.getTracks().forEach((track) => track.stop());
    setCameraActive(false);
  };

  const [idType, setIdType] = useState("");
  const [idNumber, setIdNumber] = useState("");

  const handleNext = () => {
    if (!photo) return alert("Please capture visitor photo.");
    if (!idType) return alert("Please select ID type.");
    if (!idNumber) return alert("Please enter ID number.");

    router.push("/visitor/pass");
  };

  return (
    <div className={styles.container}>

      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.logo}>WHEELBRAND</div>

        <div className={styles.companySection}>
          <span className={styles.companyName}>Demo Company Pvt Ltd</span>
          <img src="/logo_placeholder.png" className={styles.companyLogo} alt="logo" />
        </div>
      </header>

      {/* MAIN CARD */}
      <div className={styles.card}>
        <h2 className={styles.title}>Visitor Identity Verification</h2>

        {/* CAMERA CENTERED */}
        <div className={styles.cameraWrapper}>
          {!cameraActive && !photo && (
            <button className={styles.cameraBtn} onClick={startCamera}>
              Start Camera
            </button>
          )}

          {cameraActive && (
            <div className={styles.videoContainer}>
              <video ref={videoRef} autoPlay className={styles.video}></video>
              <button className={styles.captureBtn} onClick={capturePhoto}>
                Capture Photo
              </button>
            </div>
          )}

          {photo && (
            <div className={styles.photoPreview}>
              <img src={photo} className={styles.capturedPhoto} />
              <button className={styles.retakeBtn} onClick={() => setPhoto(null)}>
                Retake
              </button>
            </div>
          )}
        </div>

        <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

        {/* ID TYPE */}
        <div className={styles.rowFull}>
          <label>ID Type *</label>
          <select
            className={styles.input}
            value={idType}
            onChange={(e) => setIdType(e.target.value)}
          >
            <option value="">Select ID Type</option>
            <option value="Aadhaar">Aadhaar Card</option>
            <option value="PAN">PAN Card</option>
            <option value="Driving License">Driving License</option>
            <option value="Passport">Passport</option>
            <option value="Voter ID">Voter ID</option>
          </select>
        </div>

        {/* ID NUMBER */}
        <div className={styles.rowFull}>
          <label>ID Number *</label>
          <input
            type="text"
            placeholder="Enter Govt ID Number"
            className={styles.input}
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
          />
        </div>

        {/* BUTTONS */}
        <div className={styles.buttonRow}>
          <button className={styles.prevBtn} onClick={() => router.back()}>
            Previous
          </button>

          <button className={styles.nextBtn} onClick={handleNext}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
