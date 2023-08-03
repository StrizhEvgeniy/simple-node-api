const express = require("express");
const bulletins = require("./bulletins");

const router = express.Router();

router.get("/api/bulletins", function (req, res) {
  res.json(bulletins);
});

router.post("/api/bulletins", function (req, res) {
  res.send("Data Received: " + req.body);
});

module.exports = router;
