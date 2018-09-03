// Dependencies ---------------------------------------
const path = require("path");
const express = require("express");
const router = express.Router();

// Routes --------------------------------------------
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/about.html"));
});

router.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/projects.html"));
});

router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/contact.html"));
});

module.exports = router;
