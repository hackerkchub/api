// src/server.js

const path = require("path");

// Database connect
require("./config/db");

const app = require("./app");

// Hosting safe PORT (fixed)
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
