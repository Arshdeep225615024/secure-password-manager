# 🔐 Password Strength & Breach Checker

## 📌 Overview
The **Password Strength & Breach Checker** is a full-stack web application that helps users:
- Evaluate the strength of their passwords in real-time.
- Check if a password has been breached using the **HaveIBeenPwned API**.
- Save passwords (securely hashed) against different apps/websites in **MongoDB**.
- Receive **real-time breach alerts** via **Socket.io**.

This project was developed as part of SIT725, focusing on secure design, testing, and best practices for HD-level quality.

---

## 🚀 Features
- **Password Strength Meter**: Detects weak, medium, strong, and very strong passwords.
- **Breach Checker**: Uses k-anonymity with SHA1 hashing against HaveIBeenPwned.
- **Password Storage**: Save hashed passwords with associated app/website name in MongoDB.
- **Real-Time Notifications**: Socket.io alerts if a saved password is found breached.
- **Password Generator**: Suggests a random strong password.
- **Testing**: Mocha + Chai + Supertest integration.

---

## 🛠 Tech Stack
- **Frontend**: HTML, CSS, Vanilla JS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Local / Atlas)
- **Real-time**: Socket.io
- **Testing**: Mocha, Chai, Supertest, Sinon
- **Version Control**: Git + GitHub
- **Project Management**: Trello

---

## 📂 Project Structure
password-checker/
│── app.js # Main entry point
│── .env # Environment variables (not committed)
│── config/ # Database configuration
│── controllers/ # Controllers (strength, breach)
│── models/ # Mongoose models (Password schema)
│── routes/ # API routes
│── public/ # Static frontend files (JS, CSS)
│ ├── js/main.js
│ └── css/styles.css
│── views/ # HTML frontend (index.html)
│── tests/ # Unit & integration tests
│── README.md # Documentation


1. Install dependencies
npm install

2. Setup environment variables

Create a .env file:

PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/passwordCheckerDB

3. Run the application
# Development (auto-restart with nodemon)
npm run dev

# Production
npm start

4. Open in browser
http://localhost:3000

5. Running Tests

We use Mocha + Chai + Supertest + Sinon for testing.

Run all tests:

npm test


Run a specific test:

npx mocha tests/unitTests/strengthController.test.js --exit

6. Architecture and use case diagrams:

link- https://excalidraw.com/#json=K9actp4xYhnBcFzWj5b-6,kzARM2Mc02vVYHN-mhEykw

### Build the Docker Image
`Docker Instructions :
•	How to build the image :- “docker build -t secure-password-manager .”
•	How to run the container:- “docker run -p 3000:3000 secure-password-manager”
•	Which port to access:- 3000 
•	What the /api/student output should look like :- localhost/3000/api/student


## 📸 Screenshots
- **Password Strength Meter & Breach Check Result** – proof of MVP features  
  https://docs.google.com/document/d/1MTP9gStHryZ1Cfq1Wiq7aW1lUZygbUZX1QuonFiC0/edit?usp=sharing

## 📚 References
- [HaveIBeenPwned API](https://haveibeenpwned.com/API/v3)
- [Socket.io Documentation](https://socket.io/docs/v4/)
- [MongoDB Docs](https://www.mongodb.com/docs/)