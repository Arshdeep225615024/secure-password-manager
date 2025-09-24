const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
require("dotenv").config();

const breachRoutes = require("./routes/breachRoutes");
const strengthRoutes = require("./routes/strengthRoutes");

const app = express();


// connectDB();


app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.get("/api/student", (req, res) => {
  res.json({
    name: "Arshdeep Singh Banga",       // replace with your real name
    studentID: "225615024"  // replace with your real ID
  });
});


app.use("/api", breachRoutes);
app.use("/api", strengthRoutes);


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "signup.html"));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
