const express = require("express");
const router = express.Router();

const urnController = require("../controllers/urn.js");

router.get("/", function(req, res) {
res.send("Home path test");
});
router.get("/urns", function(req,res){
    res.send("Urns path test")
})

// //posts to blog
// router.post("/post", urnController.create);

// //gets existing posts
// router.get("/post", urnController.show);

module.exports = router;