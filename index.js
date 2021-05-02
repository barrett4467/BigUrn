const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const MongoClient = require("mongodb").MongoClient;

const handlebars = require("express-handlebars");
app.set("view engine", "hbs");
app.engine("hbs", handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs"
}));
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true
  }));


app.get("/", (req, res) => {
    res.render("main", {layout : "index"}); 
})

const urn = require("./routes/urn");
app.use("/", urn);

app.post("/urns", (req, res) => {
    console.log("Hello from the other side");
    let test = req.body;
    console.log(test);
});

MongoClient.connect("mongodb+srv://BigUrn:<password>@cluster0.eb4nl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", (err, client) => {

})

app.listen(port, () => console.log(`App listening on port ${port}`))