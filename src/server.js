// server.js
const express = require("express");
const dotenv = require("dotenv");

require("./config/db");
dotenv.config();

const app = express();

// Middlewares
app.use(express.json());

// Import Routes
const categoryRoutes = require("./routes/categoryRoutes");

// API Routes
app.use("/api/categories", categoryRoutes);

// Basic Test Route
app.get("/", (req, res) => {
  res.json({ message: "Server is running..." });
});

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`✅Server started on port ${PORT}`);
});
