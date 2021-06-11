var express = require("express");
var app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");


//Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.listen(3000, () => console.log("Server up and running on 3000"));

app.get("/", (req, res) => {
    res.render("inventory.ejs")
});
