const express = require("express");
const router = express.Router();

const urnController = require("../controllers/urn.js");

router.get("/test", urnController.test);

// //posts to blog
// router.post("/post", urnController.create);

// //gets existing posts
// router.get("/post", urnController.show);

module.exports = router;