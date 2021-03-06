const express = require("express");
const app = express();
const path = require("path");

//Setting
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Middlewares

//Routes
app.use(require("./routes/"));

app.get("/download", (req, res) => {
  res.download(
    path.join(__dirname, "public", "docs", "ProyectoElectronica.pdf"),
    "ProyectoElectronica.pdf",
    (err) => {
      if (err) console.log(err);
    }
  );
});

//Static files
app.use(express.static(path.join(__dirname, "public")));
//Listening

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
