// Dependencies -------------------------------
const express = require("express");
const path = require("path");

// PORT ---------------------------------------
const PORT = process.env.PORT || 8080;
const app = express();

// Set up static content ---------------------
app.use(express.static("public"));

// Force HTTPS redirect ----------------------
// At the top, with other redirect methods before other routes
app.get('*', (req, res, next) => {
  if (req.headers['x-forwarded-proto'] != 'https') {
    res.redirect('https://britneyaronson.com' + req.url);
  } else {
    next(); // Continue to other routes if we're not redirecting
  }
});

// Routes -------------------------------------
const htmlRoutes = require("./routes/htmlRoutes.js");

app.use(htmlRoutes);

// Listener -----------------------------------
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Connected on localhost:${PORT}`);
});
