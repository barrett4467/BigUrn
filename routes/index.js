const express = require("express");
const router = express.Router();

router.use("/", require("./application.js"));
router.use("/blog", require("./urn"));
router.use("/upload", require("./upload"));