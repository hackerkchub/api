// src/app.js
const express = require("express");
const cors = require("cors");
const path = require("path");


const categoryRoutes = require("./routes/categoryRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); 

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// API Routes
app.use("/api/categories", categoryRoutes);

// Home Route
app.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});

module.exports = app;
