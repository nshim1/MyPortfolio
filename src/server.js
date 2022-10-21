const express = require("express"); //외부에서 설치된파일을 import
const morgan = require("morgan");
const path = require("path");

const app = express();
app.use(morgan("combined"));
console.log(path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname, "public"))); //join +
//static <- be able to access through address with file name

//Read
app.get("/", (req, res) => {
  // const name = req.query.name ?? "";
  const { name, age } = req.query ?? "";
  res.send(`Welcome to server,${name}`);
});
app.get("/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Welcome to server${name}`);
});
app.get("/home", (req, res) => {
  res.redirect("/");
});
app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(8080, () => {
  console.log("Your server is listening on 8080.");
});
