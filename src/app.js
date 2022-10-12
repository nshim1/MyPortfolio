const express = require("express"); //외부에서 설치된파일을 import

const app = express();

//Read
app.get("/", (req, res) => {
  res.send("Welcome to server");
});

app.listen(8080, () => {
  console.log("Your server is listening on 8080.");
});
