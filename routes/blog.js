const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blog.js");

router.get("/", blogController.show);

//posts to blog
router.post("/post", blogController.create);

//gets existing posts
router.get("/post", blogController.show);

module.exports = router;