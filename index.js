const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
// const routes = require("./routes/index.js");

const handlebars = require("express-handlebars");
app.set("view engine", "hbs");
app.engine("hbs", handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs"
}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("main", {layout : "index"}); 
})

const urn = require("./routes/urn");
app.use("/", urn);

app.post("/urns", (req, res) => {
    console.log("Hello from the other side")
})
// app.use(express.static("public"))

// app.use("/", routes);
// app.use(require("./routes/index.js"));


app.listen(port, () => console.log(`App listening on port ${port}`))