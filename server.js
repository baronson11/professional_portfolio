// Dependencies -------------------------------
const express = require("express");
const path = require("path");
const sslRedirect = require("heroku-ssl-redirect");

// PORT ---------------------------------------
const PORT = process.env.PORT || 8080;
const app = express();

// Set up static content ---------------------
app.use(express.static("public"));

// Force SSL/HTTPS redirect ----------------------
// Redirect for "/" route only
app.get("/", (req, res, next) => {
  if (req.headers['X-Forwarded-Proto'] != 'https') {
    res.redirect(`https://${req.headers.host}${req.url}`);
  } else {
    next();
  }
});

app.use(sslRedirect(['production'], 301));

// Routes -------------------------------------
const htmlRoutes = require("./routes/htmlRoutes.js");

app.use(htmlRoutes);

// Listener -----------------------------------
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Connected on localhost:${PORT}`);
});
