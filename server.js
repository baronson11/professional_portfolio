// Dependencies -------------------------------
const express = require("express");
const path = require("path");

// PORT ---------------------------------------
const PORT = process.env.PORT || 8080;
const app = express();

// Set up static content ---------------------
app.use(express.static("public"));

// Force SSL/HTTPS redirect ----------------------
const forceSSL = (req, res, next) => {
  if (req.headers['X-Forwarded-Proto'] !== 'https' && process.env.NODE_ENV === 'production') {
    return res.redirect(301, ['https://', req.get('Host'), req.url].join(''));
  } else {
    next();
  }
};

app.use(forceSSL);

// Routes -------------------------------------
const htmlRoutes = require("./routes/htmlRoutes.js");

app.use(htmlRoutes);

// Listener -----------------------------------
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Connected on localhost:${PORT}`);
});
