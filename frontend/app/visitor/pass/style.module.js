/* FULL PAGE */
.container {
  height: 100vh;
  background: linear-gradient(135deg, #3c007a, #7a00ff);
  font-family: Arial, sans-serif;
  color: white;
  overflow: hidden; /* no scrolling */
  padding-top: 20px;
}

/*************** HEADER ***************/
.header {
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
}

.logo {
  font-size: 28px;
  font-weight: bold;
}

.headerButtons {
  display: flex;
  gap: 12px;
}

.backBtn,
.logoutBtn {
  background: white;
  color: #3c007a;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

.backBtn:hover,
.logoutBtn:hover {
  opacity: 0.85;
}

/*************** PASS CARD ***************/
.passCard {
  width: 85%;                     /* 🔥 Increased width */
  background: white;
  color: #3c007a;
  margin: 25px auto;
  padding: 40px 50px;
  border-radius: 22px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.25);
}

.title {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 25px;
}

/*************** SIDE-BY-SIDE LAYOUT ***************/
.passLayout {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

/* LEFT SIDE DETAILS */
.detailsBox {
  width: 60%;    /* Bigger width for details */
}

.infoRow {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
}

.label {
  font-size: 16px;
  font-weight: 700;
}

.value {
  font-size: 16px;
}

/* RIGHT SIDE PHOTO */
.photoBox {
  width: 35%;
  display: flex;
  justify-content: center;
}

.visitorPhoto {
  width: 220px;      /* bigger */
  height: 260px;
  object-fit: cover;
  border-radius: 12px;
  border: 3px solid #3c007a;
}
