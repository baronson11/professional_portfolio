// Dependencies -------------------------------
const express = require("express");
const path = require("path");

// PORT ---------------------------------------
const PORT = process.env.PORT || 8080;
const app = express();

// Set up static content ---------------------
app.use(express.static("public"));

// Routes -------------------------------------
const htmlRoutes = require("./routes/htmlRoutes.js");

app.use(htmlRoutes);

// Listener -----------------------------------
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Connected on localhost:${PORT}`);
});
