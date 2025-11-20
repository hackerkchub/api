// src/server.js
const app = require("./app");
require("./config/db");  // DB connect here

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅Server started on port ${PORT}`);
});
