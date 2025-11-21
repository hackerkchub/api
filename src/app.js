// src/app.js

const express = require("express");
const cors = require("cors");
const path = require("path");

// Only Category Route
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Static folder for uploads (Hosting compatible)
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

// Category API
app.use("/api/categories", categoryRoutes);

// Default Route
app.get("/", (req, res) => {
  res.json({ message: "API is running on hosting server" });
});

module.exports = app;
