const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Up and Running with graphlQL");
});

app.listen(8082, () => console.log("Running at 8082"));
